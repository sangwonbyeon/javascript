const express = require('express')
const bodyParser = require('body-parser')

const app = express();  
const port = 3000;

const router = express.Router(); //express 에다 Router 기능을 추가 
app.use(bodyParser.urlencoded({ extended: false }));

//http://localhost:3000/member/login -> post      member Router 객체명
router.route('/member/login').post((req, res) => {//post 방식은 .post((req,res)) => {}
    console.log('/member/login호출')
})  

//http://localhost:3000/member/regist -> post
router.route("/member/regist").post((req, res) => {
  console.log("/member/regist호출!");
});  

//http://localhost:3000/member/about -> get
router.route("/member/regist").get((req, res) => {
  console.log("/member/about호출!");
});  

app.use('/', router)  //express내에서 router 객체를 정의 

app.all('*', (req, res) => {  //모든 요소에 요청과 으답이 찾을수 없을때 표시할 문장 
    res.status(404).send('<h2>페이지를 찾을 수 없습니다.</h2>')
})

app.listen(port, () => {
    console.log(`${port} 포트로 서버 실행중 `)
})