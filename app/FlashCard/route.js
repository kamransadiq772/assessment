var express = require('express');
const {
    checkFlashCreationParams
} = require('./middleware');
var router = express.Router();
const controller = require('./controller');
const { verifyAccessToken } = require('../../utils/helper');


router.post('/create', verifyAccessToken, checkFlashCreationParams, (req, res, next) => {
    controller.create(req, res, next)
})
router.put("/update", verifyAccessToken, (req, res, next) => {
    controller.update(req, res, next);
});
router.delete("/delete/:id", verifyAccessToken, (req, res, next) => {
    controller.delete(req, res, next);
});
router.get("/getAll", verifyAccessToken, (req, res, next) => {
    controller.getAll(req, res, next);
});
module.exports = router;
