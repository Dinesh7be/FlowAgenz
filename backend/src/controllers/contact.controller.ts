import { Request, Response } from 'express';
import prisma from '../lib/prisma';
import { asyncHandler, AppError } from '../middleware/errorHandler';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';
import nodemailer from 'nodemailer';

// Initialize S3 client (optional - only if AWS credentials are provided)
const s3Client = process.env.AWS_ACCESS_KEY_ID
  ? new S3Client({
      region: process.env.AWS_REGION || 'us-east-1',
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
      },
    })
  : null;

// Configure email transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Recipient email address
const RECIPIENT_EMAIL = 'dinesh7be@gmail.com';

// Upload file to S3
async function uploadToS3(file: Express.Multer.File): Promise<string | null> {
  if (!s3Client || !process.env.AWS_BUCKET_NAME) {
    console.log('S3 not configured, skipping file upload');
    return null;
  }

  const fileExtension = file.originalname.split('.').pop();
  const fileName = `contact-uploads/${uuidv4()}.${fileExtension}`;

  await s3Client.send(
    new PutObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: fileName,
      Body: file.buffer,
      ContentType: file.mimetype,
    })
  );

  return `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;
}

// Send email notification
async function sendEmailNotification(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  requirements: string;
  budget?: string;
  fileUrl?: string | null;
}) {
  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #2563EB, #34D399); padding: 20px; border-radius: 8px 8px 0 0;">
        <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
      </div>
      <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-radius: 0 0 8px 8px;">
        <h2 style="color: #0f172a; margin-top: 0;">Contact Details</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #64748b; width: 30%;">Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #64748b;">Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">
              <a href="mailto:${data.email}" style="color: #2563EB;">${data.email}</a>
            </td>
          </tr>
          ${data.phone ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #64748b;">Phone</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${data.phone}</td>
          </tr>
          ` : ''}
          ${data.company ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #64748b;">Company</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${data.company}</td>
          </tr>
          ` : ''}
          ${data.budget ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #64748b;">Budget</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${data.budget}</td>
          </tr>
          ` : ''}
        </table>
        
        <h3 style="color: #0f172a; margin-top: 20px;">Project Requirements</h3>
        <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">
          <p style="color: #0f172a; margin: 0; white-space: pre-wrap;">${data.requirements}</p>
        </div>
        
        ${data.fileUrl ? `
        <h3 style="color: #0f172a; margin-top: 20px;">Attachment</h3>
        <p><a href="${data.fileUrl}" style="color: #2563EB;">Download Attachment</a></p>
        ` : ''}
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
          <p style="color: #64748b; font-size: 12px; margin: 0;">
            This email was sent from the FlowAgenz contact form.
          </p>
        </div>
      </div>
    </div>
  `;

  const mailOptions = {
    from: process.env.SMTP_FROM || '"FlowAgenz" <noreply@flowagenz.com>',
    to: RECIPIENT_EMAIL,
    subject: `New Contact Form Submission from ${data.name}`,
    html: emailHtml,
    replyTo: data.email,
  };

  try {
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully to', RECIPIENT_EMAIL);
    } else {
      console.log('SMTP not configured. Email would be sent to:', RECIPIENT_EMAIL);
      console.log('Email data:', {
        from: data.email,
        name: data.name,
        subject: `New Contact Form Submission from ${data.name}`,
      });
    }
  } catch (error) {
    console.error('Failed to send email:', error);
    // Don't throw - we still want to save the contact message
  }
}

// POST /api/contact
export const submitContactForm = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, phone, company, requirements, budget } = req.body;

  // Validate required fields
  if (!name || !email || !requirements) {
    throw new AppError('Name, email, and requirements are required', 400);
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new AppError('Invalid email format', 400);
  }

  // Upload file if provided
  let fileUrl: string | null = null;
  if (req.file) {
    fileUrl = await uploadToS3(req.file);
  }

  // Create contact message in database
  const contactMessage = await prisma.contactMessage.create({
    data: {
      name,
      email,
      phone: phone || null,
      company: company || null,
      requirements,
      budget: budget || null,
      fileUrl,
    },
  });

  console.log('New contact message received:', contactMessage.id);

  // Send email notification
  await sendEmailNotification({
    name,
    email,
    phone,
    company,
    requirements,
    budget,
    fileUrl,
  });

  res.status(201).json({
    success: true,
    message: 'Thank you for your message. We will get back to you within 24 hours.',
  });
});
