
// import nodemailer from "nodemailer";

// // create reusable transporter object using the default SMTP transport
// let transporter = nodemailer.createTransport({
//     host: process.env.EMAIL_SMTP_HOST,
//     port: process.env.EMAIL_SMTP_PORT,
//     //secure: process.env.EMAIL_SMTP_SECURE, // lack of ssl commented this. You can uncomment it.
//     auth: {
//         user: process.env.EMAIL_SMTP_USERNAME,
//         pass: process.env.EMAIL_SMTP_PASSWORD
//     }

// });

// const sendEmail = async (mailDetails, callback) => {
//     try {
//         const info = await transporter.sendMail(mailDetails)
//         callback(info);
//     } catch (error) {
//         console.log(error);
//     }
// };

//  export default sendEmail;



