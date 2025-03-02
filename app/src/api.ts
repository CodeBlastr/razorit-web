const SENDGRID_API_KEY = import.meta.env.VITE_SENDGRID_API_KEY;
const SENDGRID_FROM_EMAIL = import.meta.env.VITE_SENDGRID_FROM_EMAIL;
const SENDGRID_TO_EMAIL = import.meta.env.VITE_SENDGRID_TO_EMAIL;

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const submitContactForm = async (formData: ContactFormData) => {
  const sendGridEndpoint = "https://api.sendgrid.com/v3/mail/send";

  const emailData = {
    personalizations: [{ to: [{ email: SENDGRID_TO_EMAIL }] }],
    from: { email: SENDGRID_FROM_EMAIL },
    subject: "New Contact Form Submission",
    content: [
      {
        type: "text/plain",
        value: `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
      },
    ],
  };

  const response = await fetch(sendGridEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${SENDGRID_API_KEY}`,
    },
    body: JSON.stringify(emailData),
  });

  if (!response.ok) {
    throw new Error("Failed to send message via SendGrid");
  }

  return response.json();
};
