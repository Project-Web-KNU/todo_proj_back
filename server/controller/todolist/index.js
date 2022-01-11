const { Router } = require('express')
const router = Router();
const ctrl = require('./todolist.ctrl')

router.post('/create', ctrl.post_createTodo);
router.get('/list', ctrl.get_findAllTodo);
router.get('/listone', ctrl.get_findByDateTodo);
router.get('/:id', ctrl.get_findByIdPost);
router.patch('/:id', ctrl.edit_post);
router.delete('/:id', ctrl.delete_post);

module.exports = router;