const express = require('express');
const router = express.Router();
const messagesCtrl = require('../../controllers/api/messages');

router.get('/', messagesCtrl.index);
router.get('/:id', messagesCtrl.show);
router.post('/', messagesCtrl.create);
router.delete('/:id', messagesCtrl.delete);
router.put('/:id', messagesCtrl.update);

module.exports = router;