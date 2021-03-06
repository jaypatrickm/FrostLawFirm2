import { NextApiRequest, NextApiResponse } from 'next';

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');

export default async function(req: NextApiRequest, res: NextApiResponse) {
  sgMail.setApiKey(process.env.sendgrid_api_key);
  const {
    fullName,
    city,
    state,
    contactMethod,
    email,
    cellNumber,
    homeNumber,
    isTextOkay,
    preferredTime,
    hasDiagnosis,
    biopsyPerformed,
    comments
  } = req.body;
  const content = {
    to: 'admin@frostlawfirm.com',
    from: 'admin@frostlawfirm.com',
    subject: `Contact us from ${fullName}`,
    text: `Please view in html`,
    html: `<strong>Information Submitted:</strong> <br>
    <strong>Name:</strong> ${fullName} <br>
    <strong>Location:</strong> ${city}, ${state}<br>
    <strong>Preferred Contact Method:</strong> ${contactMethod}<br>
    <strong>Email:</strong> ${email}<br>
    <strong>Cell Number:</strong> ${cellNumber}<br>
    <strong>Is Text Okay?:</strong> ${isTextOkay ? 'Yes' : 'No'}<br>
    <strong>Home Number:</strong> ${homeNumber}<br>
    <strong>Preferred time to contact:</strong> ${
      preferredTime.length ? preferredTime.join(', ') : ''
    }<br>
    <strong>Who has Mesothelioma, Asbestosis, or Lung Cancer:</strong> ${
      hasDiagnosis.length ? hasDiagnosis.join(', ') : null
    }<br>
    <strong>Biopsy performed?:</strong> ${biopsyPerformed}<br>
  <strong>Comments/Questions:</strong> ${comments}
    `
  };
  sgMail.send(content, (error: any, result: any) => {
    if (error) {
      res.status(400).send('Message not sent');
    } else {
      res.status(200).send('Message sent successfully.');
    }
  });
}
