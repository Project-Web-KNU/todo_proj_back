const express = require('express');
const logger = require('morgan');
const app = express();

app.use(logger('tiny'));

app.get('/api', (req,res) => {
    res.send('이건 백앤드 api를 개발하기 위한...LANDING SITE');
});


app.listen(5000, ()=> {
    console.log("backend is running on 5000");
})
