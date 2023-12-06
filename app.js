const express = require("express")
const cors = require("cors")
const app = express()
const cookieParser = require('cookie-parser')
const port = 3000

var corsOptions = {
    origin: 'http://localhost:63342',
    credentials:  true
}
app.use(cors(corsOptions))
app.use(cookieParser())
app.use(express.json())

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

app.post("/sign-in", (req, res) => {
    const { email, password } = req.body
    const user = users.find((user) => user.email === email && user.password === password)
    if (!user) {
        return res.status(401).json({msg: "사용자를 찾지 못했습니다."})
    }

    res.cookie("token", `${user.id}`, {
        secure: false,
        maxAge: 3600000, // 1 hour
    })
    res.json({ msg: "okay"} )
})

app.post("/sign-out", (req, res) => {
    res.cookie("token", "")
    res.json({ msg: "okay"} )
})

app.get("/users/me", (req, res) => {
    const { token } = req.cookies
    const user = users.find((user) => `${user.id}` === token)
    if (!user) {
        return res.status(401).json({msg: "권한이 없습니다."})
    }
    res.json({
        name: user.name,
        email : user.email,
    })
})

app.listen(port, () => {
    console.log("Server Start : " + port)
})