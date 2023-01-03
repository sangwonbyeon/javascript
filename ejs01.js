const express = require('express')
const fs = require('fs')
// npm i ejs
const ejs = require('ejs')

const app = express();
const port = 3000;

const router = express.Router();

//127.0.0.1:3000/ejstest
router.route('/ejstest').post((req, res) => {
    fs.readFile('./ejs1.ejs', 'utf-8', (err, data) => {
        if (!err) {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(ejs.render(data));
        } else {
            console.log(err)
        }
    })
})

app.use('/', router) // 라우터 정의
//예외 처리
app.all('*', (req, res) => {
    res.status(404).send('<h2>페이지를 찾을 수 없습니다.</h2>')
})

app.listen(port, () => {
    console.log(`${port} 포트로 서버 실행중`)
})