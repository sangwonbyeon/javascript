const express = require('express')
const bodyparser = require('body-parser') //post 데이터를 전달받기 위해 사용
const app = express()
const port = 3000

//body-parser를 이용해 application/x-www-form-urlencoded 파싱
//http://localhost:3000/?userid=apple&userpw=1111
//(전송방식이 get이 아니기 때문에 데이터를 받을 수 없음)

app.use(bodyparser.urlencoded({ extended: false })); //파싱 일어날때 충돌하는 것을 방지하겠다 해서 false를 사용

app.use((req, res) => {
  const paramId = req.body.userid; //post방식으로 데이터를 입력
  const paramPw = req.body.userpw; //post방식으로 데이터를 입력
  console.log(`paramId: ${paramId}, paramPw:${paramPw}`);

  res.writeHead(200, { "content-type": "text/html;charset=utf-8" });
  res.write("<h2>익스프레스 서베엇 응답하는 메시지입니다.</h2>");
  res.write(`<p>아이디: ${paramId}</p>`);
  res.write(`<p>비밀번호: ${paramPw}</p>`);
  res.end();
})

app.listen(port, () => {
    console.log(`${port} 포트로 서버 실행중...`)
})