const express = require("express")
const cors = require("cors")
const randomHash = require('random-hash')
const cookieParser = require('cookie-parser')
const app = express()
const port = 3000

app.use(cors({credentials:  true, origin: "http://localhost:63343"}))
app.use(cookieParser())
app.use(express.json())
app.use(cookieParser())

const users = [
    {
        id: 1,
        name: "우준호",
        email : "noggong@gmail.com",
        password: "1234",
    },
    {
        id: 2,
        name: "홍길동",
        email : "gildong@gmail.com",
        password: "1234",
    }
]

const 세션저장소 = {}

app.post("/sign-in", (req, res) => {
    const { email, password } = req.body
    const user = users.find((user) => user.email === email && user.password === password)
    if (!user) {
        return res.status(401).json({msg: "사용자를 찾지 못했습니다."})
    }

    const sessionId = randomHash.generateHash({ length: 12 })
    세션저장소[sessionId] = user
    res.cookie("_SESSION_ID", sessionId,{secure: false})

    res.json({msg: "로그인 성공"})
})

app.get("/users/me", (req, res) => {
    console.log("세션저장소", 세션저장소)
    const sessionId = req.cookies._SESSION_ID
    const user = 세션저장소[sessionId]
    if (!sessionId || !user) {
        res.status(401).json({msg: "로그인이 필요합니다."})
    }

    res.json(user)
})

app.post("/sign-out", (req, res) => {
    const sessionId = req.cookies._SESSION_ID
    delete 세션저장소[sessionId]
    res.json({msg: "로그아웃 성공"})
})

app.listen(port, () => {
    console.log("Server Start : " + port)
})