// const nodemailer = require('nodemailer');
// const transport = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//         user: 'govila.niyati@gmail.com',
//         pass: 'pradipkumargovila',
//     },
// });
// const mailOptions = {
//     from: 'govila.niyati@gmail.com',
//     to: 'govila.niyati@gmail.com',
//     subject: 'hello world!',
//     html: 'hello world!',
// };
// transport.sendMail(mailOptions, (error, info) => {
//     if (error) {
//         console.log(error);
//     }
//     console.log(`Message sent: ${info.response}`);
// });

const sendMail = require('./send-email2');
sendMail('govila.niyati@gmail.com','hello','try2');