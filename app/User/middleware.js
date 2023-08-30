const JWT = require("jsonwebtoken");
const {
  ResponseObject,
  consoleLog,
  clearErrorMsg,
} = require("../../utils/helper");
const Joi = require("joi");
const { tokenMessage, authError } = require("./resMsgs/messages");
const messages = require("./resMsgs/messages");

module.exports = {
  newAccessToken: (userId) => {
    return new Promise((resolve, reject) => {
      const payload = {
        name: "Assessment",
        userId: userId,
      };
      const secret = process.env.SECRETKEY;
      const option =
        process.env.STAGE === "dev"
          ? {
              issuer: process.env.ISSUER,
              audience: toString(userId),
            }
          : {
              expiresIn: process.env.TOKENEXPIRE,
              issuer: process.env.ISSUER,
              audience: toString(userId),
            };
      return JWT.sign(payload, secret, option, (err, token) => {
        if (err) return reject(err);
        return resolve(token);
      });
    });
  },

  checkSignUpParams: async (req, res, next) => {
    try {
      const signUp_Schema = Joi.object({
        email: Joi.string().email().required(),     
        password: Joi.string().required(),
        name: Joi.string().allow(''),
        avatar: Joi.string().allow(null),
      }).options({
        abortEarly: false
      });
      if(req.body.email){
        await signUp_Schema.validateAsync(req.body);
      }
      next();
    } catch (error) {
      console.log(error,"errrorrrrrrr");
      const msg = error?.toString();
      return ResponseObject(res, {
        status: 400,
        success: false,
        message: msg,
        data: {},
      });
    }
  },
  checkLoginParams: async (req, res, next) => {
    try {
      const login_Schema = Joi.object({
        email: Joi.string()
          .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
          .required(),
        password: Joi.string()
          // .pattern(new RegExp("^[a-zA-Z0-9!@#$%^&*]{8,30}$"))
          .required(),
      }).options({
        abortEarly: false,
      });

      await login_Schema.validateAsync(req.body);
      next();
    } catch (error) {
      consoleLog(error);
      const msg = error.details.restructureErrors();

      // const msg = error.details;
      return ResponseObject(res, {
        status: 400,
        success: false,
        message: "Validation Failed",
        errors: msg,
        data: {},
      });
    }
  },
};
