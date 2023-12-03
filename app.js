const express = require("express")
const cors = require("cors")
const app = express()
const port = 3000

app.use(cors())

const userDatabas = [
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
    res.json({
        token: 1
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