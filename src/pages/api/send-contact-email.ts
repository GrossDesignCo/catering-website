import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend('re_GpmzsRKJ_NnZSXtMLj3iuqF8LbzNxaFtz');

const sendContactEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: ['mattgrosspersonal@gmail.com'],
    subject: 'Contact Submission',
    react: EmailTemplate({ firstName: 'John' }),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};

export default sendContactEmail;
