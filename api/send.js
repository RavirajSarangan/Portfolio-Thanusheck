// This is a serverless function intended for Vercel or similar platforms.
// It acts as a secure proxy to call the Resend API without exposing your key to the browser.

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.VITE_RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: 'Portfolio Contact <onboarding@resend.dev>', // Resend verified domain required for custom 'from'
                to: ['mohan.thanu472@gmail.com'], // Sending to your email
                subject: `New Message: ${subject}`,
                reply_to: email,
                html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            return res.status(200).json(data);
        } else {
            return res.status(response.status).json(data);
        }
    } catch (error) {
        console.error('Resend Error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
