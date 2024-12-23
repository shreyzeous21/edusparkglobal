"use client";

import emailjs from '@emailjs/browser';

// Configure EmailJS with your service details
// emailjs.init({
//   publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
//   privateKey: process.env.EMAILJS_PRIVATE_KEY || '',
// });

export interface EnrollmentData {
  fullName: string;
  email: string;
  mobileNumber: string;
  college: string;
  program: string;
  specialization: string;
}

export async function sendEnrollmentEmail(data: EnrollmentData) {
  // Ensure environment variables are set on the client side
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '3XgNPJmb2DL32lABX';
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_cg2kfvp';
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_ct3f8cs';

  if (!publicKey || !serviceId || !templateId) {
    console.error('EmailJS configuration is missing');
    return {
      success: false,
      error: 'Email service configuration is incomplete',
    };
  }

  // Initialize EmailJS with public key
  emailjs.init(publicKey);

  try {
    const response = await emailjs.send(
      serviceId, 
      templateId,
      {
        to_name: 'Enrollment Team',
        from_name: 'EduSpark Enrollment',
        message: `
╔══════════════════════════════════════════════════════════╗
║                 🎓 NEW ENROLLMENT INQUIRY               ║
╚══════════════════════════════════════════════════════════╝

┌─────────────────────────────────────────────────────────┐
│ 👤 PERSONAL INFORMATION                                │
├─────────────────────────────────────────────────────────┤
│ Full Name     : ${data.fullName.toUpperCase()}
│ Email Address : ${data.email}
│ Mobile Number : ${data.mobileNumber}
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ 📚 PROGRAM DETAILS                                     │
├─────────────────────────────────────────────────────────┤
│ College        : ${data.college.toUpperCase()}
│ Program        : ${data.program.toUpperCase()}
│ Specialization : ${(data.specialization || 'Not specified').toUpperCase()}
└─────────────────────────────────────────────────────────┘

🕒 Inquiry Timestamp: ${new Date().toLocaleString()}

⚠️ IMPORTANT: Please contact the candidate using the 
provided contact information for further processing.

Best regards,
EduSpark Enrollment System
        `,
        reply_to: data.email,
      }
    );

    return {
      success: true,
      messageId: response.status.toString(),
    };
  } catch (error) {
    console.error('Email sending failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
