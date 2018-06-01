const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'govila.niyati@gmail.com',
        pass: '',
    },
});
module.exports = function sendEmail(to, subject, message) {
    const mailOptions = {
        from: 'govila.niyati@gmail.com',
        to,
        subject,
        html: message,
    };
    transport.sendMail(mailOptions, (error,info) => {
        if (error) {
            console.log(error);
        }
        console.log(info.response)
    });
};