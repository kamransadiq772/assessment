const FlashCard = require("./model");
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

  async create(req, res, next) {
    try {
      const { userId } = req.payload
      const body = req.body;
      const flashCard = await FlashCard.create({
        ...req.body,
        createdBy: userId
      })

      if (flashCard) {
        this.setter({
          status: 200,
          success: true,
          msg: "Created",
          data: flashCard,
        });
      } else {
        this.setter({
          status: 500,
          success: false,
          msg: messages.serverErr,
          data,
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

  async update(req, res, next) {
    try {
      const { userId } = req.payload
      const { id, name } = req.body;
      const flash = await FlashCard.findById(id)
      if (flash.createdBy == userId) {
        const flashCard = await FlashCard.findByIdAndUpdate(id, {
          $set: {
            name
          }
        }, { new: true })

        if (flashCard) {
          this.setter({
            status: 200,
            success: true,
            msg: "Created",
            data: flashCard,
          });
        } else {
          this.setter({
            status: 500,
            success: false,
            msg: messages.serverErr,
            data: {},
          });
        }
      } else {
        this.setter({
          status: 403,
          success: false,
          msg: "Not Allowed",
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

  async delete(req, res, next) {
    try {
      const { userId } = req.payload
      const { id } = req.params;
      const flash = await FlashCard.findById(id)
      if (flash.createdBy == userId) {
        const flashCard = await FlashCard.findByIdAndDelete(id)
        this.setter({
          status: 200,
          success: true,
          msg: "Deleted",
          data: {},
        });
      } else {
        this.setter({
          status: 403,
          success: false,
          msg: "Not Allowed",
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

  async getAll(req, res, next) {
    try {
      const { userId } = req.payload
      const flash = await FlashCard.find({ createdBy: new mongoose.Types.ObjectId(userId) })
      this.setter({
        status: 200,
        success: true,
        msg: "OK",
        data: flash,
      });
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

}

module.exports = new Controller();
