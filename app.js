const express = require("express")
const cors = require("cors")
const CryptoJS = require("crypto-js");
const app = express()
const port = 3000

const secretKey = "secret key 123"

var corsOptions = {
    origin: 'http://localhost:63342',
    credentials:  true
}
app.use(cors(corsOptions))
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

    const userInfo = {
        id: user.id,
        name: user.name,
        email: user.email
    }

    const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(userInfo), secretKey).toString();
    res.json({ msg: "okay", data: { token:  ciphertext}} )
})

app.get("/users/me", (req, res) => {
    const { authorization: token } = req.headers
    const bytes  = CryptoJS.AES.decrypt(token, secretKey);
    const userString = bytes.toString(CryptoJS.enc.Utf8);
    const user = JSON.parse(userString)
    res.json(user)
})

app.listen(port, () => {
    console.log("Server Start : " + port)
})