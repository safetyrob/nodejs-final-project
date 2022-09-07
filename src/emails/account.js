const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "robert@safetymts.com",
    subject: "Welcome to Safety Management and Training Solutions",
    text: `Welcome to the app, ${name}. Let me know how we can help`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "robert@safetymts.com",
    subject: "Sorry to see you go",
    text: `Goodbye, ${name}. We hope you return soon`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
