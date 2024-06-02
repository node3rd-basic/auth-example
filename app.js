const express = require("express")
const cors = require("cors")
const app = express()
const port = 3000

app.use(cors())
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

app.get("/order/:desk", (req, res) => {
    console.log("Request Header: ", req.headers)
    // console.log("Request Header: ", req.headers.cookie)
    console.log("Request path param: ", req.params)
    console.log("Request querystring: ", req.query)
    console.log("Request req body", req.body)
    // console.log("Request Header: ", req)

    res.cookie("desk", req.params.desk)
    res.json({
        msg: "주문 완료"
    })
})

app.post("/sign-in", (req, res) => {
    const { email, password } = req.body
    const user = users.find((user) => user.email === email && user.password === password)
    if (!user) {
        return res.status(401).json({msg: "사용자를 찾지 못했습니다."})
    }

    res.json({
        token: user.id
    })
})

app.get("/users/me", (req, res) => {
    res.json({
        id: 1,
        name: "우준호",
        email : "noggong@gmail.com",
    })
})

app.listen(port, () => {
    console.log("Server Start : " + port)
})