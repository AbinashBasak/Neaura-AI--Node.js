const express = require('express');
const query = require('../services/query.services');
const verifyToken = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', [verifyToken], query.get);
router.post('/', [verifyToken], query.create);
router.post('/custom-bot', [verifyToken], query.createFromCustomBot);
router.get('/group', [verifyToken], query.getTotalGraphData);
router.get('/total', [verifyToken], query.getTotalCount);
router.post('/delete', [verifyToken], query.delete);
router.get('/group-id', [verifyToken], query.getByGroupId);

module.exports = router;
