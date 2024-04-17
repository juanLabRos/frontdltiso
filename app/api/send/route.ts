import { EmailTemplate } from '../../../emails/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'Acme <dltcode@resend.dev>',
      to: ['cesex81385@agromgt.com'],
      subject: 'Verifica tu correo electrónico',
      react: EmailTemplate({ firstName: 'John',token:'1234' }),
      text: 'Verifica tu correo electrónico'
    }); 

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
