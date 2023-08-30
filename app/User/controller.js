const User = require("./model");
const bcrypt = require("bcryptjs");
const { ResponseObject, consoleLog, sendEmail } = require("../../utils/helper");
const { newAccessToken } = require("./middleware");
const messages = require("./resMsgs/messages");
const { jwtConstants } = require("./constants");
const { sendConfirmationOtp } = require("./views/confirmationEmail");
const providers = require("./enums/providerType");
const { default: mongoose } = require("mongoose");

class Controller {
  setter(obj) {
    const keys = Object.keys(obj);

    keys.map((key) => (this[key] = obj[key]));
  }

  async sign_up(req, res, next) {
    try {
      const body = req.body;
      console.log(body, " body");
      const { email, providerType } = body;
      let user = await User.findOne({ email: email });
      const payload = {
        ...body,
        email: body.email.toLowerCase(),
        password: bcrypt.hashSync(body.password, jwtConstants.salt)
      }

      if (!user) {
        user = await User.create({
          ...payload
        });
        console.log(payload, "payloadpayload");

        const data = {
          ...user.toJSON(),
          token: await newAccessToken(user._id),
        };

        if (user) {
          this.setter({
            status: 201,
            success: true,
            msg: messages.accountCreation,
            data,
          });
        } else {
          this.setter({
            status: 500,
            success: false,
            msg: messages.serverErr,
            data,
          });
        }
      } else {
        this.setter({
          status: 409,
          success: false,
          msg: messages.accountExists,
          data: {},
        });
      }
    } catch (error) {
      console.log(error, "ERROR");
      this.setter({
        status: 500,
        success: false,
        msg: messages.typeError,
        data: {},
      });
    }

    return ResponseObject(res, {
      status: this.status,
      success: this.success,
      message: this.msg,
      data: this.data,
    });
  }

  async login(req, res) {
    const { email, password } = req.body;

    try {
      const isUserExists = await User.findOne({ email });

      if (!isUserExists) {
        return res.status(409).send({
          message: "Not User Exists",
        });
      }

      const validatePassword = bcrypt.compareSync(
        password,
        isUserExists.password
      );
      if (validatePassword) {
        const data = {
          ...isUserExists.toJSON(),
          token: await newAccessToken(isUserExists._id, {
            role: isUserExists.role,
            permissions: [],
          }),
        };
        this.setter({
          status: 200,
          success: true,
          msg: messages.loginSuccess,
          data: data,
        });
      } else {
        this.setter({
          status: 404,
          success: false,
          msg: messages.invalidParams,
          data: {},
        });
      }
    } catch (error) {
      console.log(error, "error");
      this.setter({
        status: 500,
        success: false,
        msg: messages.serverErr,
        data: {},
      });
    }
    return ResponseObject(res, {
      status: this.status,
      success: this.success,
      message: this.msg,
      data: this.data,
    });
  }
}

module.exports = new Controller();
