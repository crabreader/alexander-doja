import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any) {

  // Validate data here if needed

  if (req.method === 'POST') {
      const { name, email, message } = req.body;
      
      // Validate name
      if (!name || name.trim() === '') {
        return res.status(400).json({error: 'Name is required'});
      }
      
      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        return res.status(400).json({error: 'Email is invalid'});
      }
      
      // Validate message
      if (!message || message.trim() === '') {
        return res.status(400).json({error: 'Message is required'});
      }

      try {
        //Configure nodemailer to send emails
        const transporter = nodemailer.createTransport({
          host: "mail.cock.li",
          port: 465,
          secure: true,
          auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
          }
        });
    
        //Send email
        await transporter.sendMail({
          from: process.env.MAIL_USER,
          to: process.env.PRIVATE_MAIL,
          subject: 'New Contact Form Submission',
          text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        });
    
        return res.status(200).send('OK'); // OK status if email sent successfully
      }
      catch (error) {
          console.error('Error sending email:', error);
          res.status(500).send('Internal Server Error'); // Internal server error if email failed to send
      }    
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
};