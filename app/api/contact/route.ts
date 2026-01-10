import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_bvRZWGGM_DLihJ7yfB1wtW4N12GmAtNex');

export async function POST(req: Request) {
    try {
        const body = await req.json();
        console.log("Received contact form body:", body);
        const { name, email, subject, message } = body;

        // Validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required' },
                { status: 400 }
            );
        }

        const emailSubject = subject || `New Portfolio Contact Message – ${name}`;

        const data = await resend.emails.send({
            from: 'Portfolio Contact Form <onboarding@resend.dev>', // Default Resend testing domain
            to: ['kaushaldarji7182@gmail.com'],
            subject: emailSubject,
            text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
            `,
            html: `
                <h3>New Contact Message</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <hr />
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `,
            replyTo: email, // Allow direct reply to the sender
        });

        if (data.error) {
            return NextResponse.json({ error: data.error }, { status: 500 });
        }

        return NextResponse.json(data);

    } catch (error) {
        console.error('Resend API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
