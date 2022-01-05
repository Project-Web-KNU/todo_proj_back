const asyncWrapper = require('../../middleware/async');
const Memo = require('../../models/Memo')

exports.post_createTodo = async (req, res) => {
    const { memo, date } = req.body;
    const post = await Memo.create({ memo, date });

    res.status(201).json({ post })
}

exports.get_findAllTodo = asyncWrapper(async (req, res) => {
    const { date } = req.query;
    const memos = await Memo.find({ date });
    res.status(200).json({ memos, count: memos.length })
});