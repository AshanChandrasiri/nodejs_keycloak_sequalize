const nodemailer = require("nodemailer");
const Email = require("email-templates");
const path = require('path');

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "mailtopubsontap@gmail.com",
    pass: "ACD@PubDev123",
  },
});

const email = new Email({
  transport: transporter,
  send: true,
  preview: false,
  views : {
    root : path.resolve('resources/emails')
  }
});

const TEMPLATES = {
  ACCOUNT_ACTIVATE: "account_activate",
};

const sendAccountActivationMail = async (data) => {
  try {
    const template = TEMPLATES.ACCOUNT_ACTIVATE;
    const from = "John Smithson <no reply>";
    const to = data.email;
    const locals = {
      fname: data.firstName,
      lname: data.lastName,
    };

    await sendMail({ template, from, to, locals });
    console.log("successfully sent mail");
  } catch (error) {
    console.error("error occured in sending mail");
    console.log(error);
  }
};

const sendMail = async (data) => {
  await email.send({
    template: data.template,
    message: {
      from: data.from,
      to: data.to,
    },
    locals: data.locals,
  });
};

const MailService = {
  sendAccountActivationMail: sendAccountActivationMail,
};

export default MailService;
