var nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "hieunmph46626@fpt.edu.vn",
        pass: "123456"
    }
});
module.exports = transporter 