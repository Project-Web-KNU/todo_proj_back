const { Router } = require('express')
const router = Router();
const ctrl = require('./todolist.ctrl')

router.post('/create', ctrl.post_createTodo);
router.get('/list', ctrl.get_findAllTodo);
router.get('/listone', ctrl.get_findByDateTodo);

module.exports = router;