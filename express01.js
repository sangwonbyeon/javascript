const express = require('express')
const app = express()   // <- app 안에 express 함수를 넣기 위해 
const port = 3000;

//127.0.0.1:3000  or localhost:3000
app.get('/', (req, res) => {
    res.send('익스프레스 서버 테스트')
})

app.listen(port, () => {
    console.log(`${port} 포트로 서버 실행중....`)
})