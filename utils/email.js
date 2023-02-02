var nodemailer = require("nodemailer");

async function main(user) {
  let testAccount = await nodemailer.createTestAccount();

  var transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  let info = await transporter.sendMail({
    from: '"test user"<test@example.com',
    to: `${user}`,

    subject: "Welcome to movie time",
    test: "This is the automated email you will recieve when you join",
    html: "<b> Welcome to movie time excelent. Enjoy your new account <b>",
  });
  console.log("preview URL", nodemailer.getTestMessageUrl(info)),
    console.log("message sent,", info.messageId);
}
main().catch(console.error);

module.exports = main;
