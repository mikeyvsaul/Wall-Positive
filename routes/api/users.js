const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const messagesCtrl = require('../../controllers/api/messages');

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);


/*---------- Protected Routes ----------*/
router.get('/:id', messagesCtrl.show);
router.post('/', messagesCtrl.create);
router.delete('/:id', messagesCtrl.delete);
router.put('/:id', messagesCtrl.update);


module.exports = router;