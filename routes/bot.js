const express = require('express');
const bot = require('../services/bot.services');
const verifyToken = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', [verifyToken], bot.get);
router.post('/', [verifyToken], bot.create);
router.get('/total', [verifyToken], bot.getTotalCount);
router.get('/id', [verifyToken], bot.getById);
router.post('/delete', [verifyToken], bot.delete);

module.exports = router;
