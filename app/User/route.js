var express = require('express');
const {
    checkSignUpParams,checkLoginParams
} = require('./middleware');
var router = express.Router();
const controller = require('./controller');


router.post('/sign_up', checkSignUpParams, (req, res, next) => {
    controller.sign_up(req, res, next)
})
router.post("/login", checkLoginParams, (req, res, next) => {
    controller.login(req, res, next);
});
module.exports = router;
