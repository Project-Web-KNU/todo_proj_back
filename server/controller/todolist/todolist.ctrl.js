const asyncWrapper = require('../../middleware/async');
const Memo = require('../../models/Memo')

exports.post_createTodo = async (req, res) => {
    const { memo, date } = req.body;

    if (!memo) {
        throw new Error('할 일을 입력해주세요!');
    }
    const post = await Memo.create({ memo, date });

    res.status(201).json({ post })
}

exports.get_findByDateTodo = asyncWrapper(async (req, res) => {
    const { date } = req.query;
    const memos = await Memo.find({ date });
    res.status(200).json({ memos, count: memos.length })
});

exports.get_findByIdPost = asyncWrapper(async (req, res) => {
    const { params: { id: id } } = req;
    const memo = await Memo.find({ _id: id });
    res.status(200).json({ memo })
});

exports.get_findAllTodo = asyncWrapper(async (req, res) => {
    const memos = await Memo.find({});
    res.status(200).json({ memos, count: memos.length })
});

exports.edit_post = asyncWrapper(async (req, res) => {
    res.send("edit post");
})

exports.delete_post = asyncWrapper(async (req, res) => {
    console.log(req);
    const { params: { id: id } } = req;
    const memo = await Memo.findByIdAndDelete({ _id: id });

    if (!memo) {
        throw new Error('해당 ID는 존재하지 않습니다.');
    }
    res.status(200).send({ msg: `${id}는 삭제 완료 되었습니다.` });
})