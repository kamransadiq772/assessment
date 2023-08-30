const nodemailer = require("nodemailer");
const JWT = require("jsonwebtoken");
require('dotenv').config()

module.exports = {
  ResponseObject: (res, obj) => {
    console.log(obj,"========================> Response Object");
    return res.status(obj.status).send({
      status: obj.status,
      success: obj.success,
      message: obj.message,
      data: obj.data,
    });
  },

  consoleLog: (msg) => {
    process.env.STAGE === "dev" && console.log(msg);
  },

  clearErrorMsg: (msg) => {
    let MSG = msg.split("/").join("");
    MSG = MSG.split('"').join("");
    MSG = MSG.includes("password")
      ? "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      : MSG;
    return MSG;
  },
  verifyAccessToken: (req, res, next) => {
    console.log(req.headers["authorization"], process.env.SECRETKEY,'header-=-=-=')
    if (!req.headers["authorization"]) {
      return next(
        res.status(404).send({
          status: 404,
          success: false,
          message: "Token not found",
          data: {},
        })
      );
    }
    const token = req.headers["authorization"];
    JWT.verify(token, process.env.SECRETKEY, (err, payload) => {
      if (err) {
        console.log(err);
        return res.status(401).send({
          status: 401,
          success: false,
          message: "Verification Failed",
          data: {},
        });
      }

      req.payload = payload;
      next();
    });
  },

  sendEmail: async (email, subject, text) => {
    try {
      console.log(email,subject," send mail data log");
      const transporter = nodemailer.createTransport({
        host: process.env.MAILHOST,
        port: process.env.MAILPORT,
        auth: {
          user: process.env.MAILUSER,
          pass: process.env.MAILPASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SENDEREMAIL,
        to: email,
        subject: subject,
        html: text,
      });

      process.env.STAGE === "dev" && console.log("email sent successfully");
      return true;
    } catch (error) {
      process.env.STAGE === "dev" && console.log("email not sent");
      process.env.STAGE === "dev" && console.log(error);
      return false;
    }
  },
};

Array.prototype.restructureErrors = function () {
  try {
    const errors = {};
    for (const item of this) {
      errors[item.path.shift()] = item.message.replace(/\"/g, "");
    }
    return errors;
  } catch (error) {
    return false;
  }
};
