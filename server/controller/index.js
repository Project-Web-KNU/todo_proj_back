const { Router } = require('express')
const router = Router();

router.use('/v1/todolist', require('./todolist'));

module.exports = router;