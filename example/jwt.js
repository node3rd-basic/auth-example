const jwt = require('jsonwebtoken');
const secretKey = "mySecretKey"

const user = {
    name: '우준호',
    email: "noggong@gmail.com",
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
}
// 암호화
const token = jwt.sign(user, secretKey);
console.log(token)
// 복호화
const decodeUser = jwt.verify(token, secretKey)
console.log(decodeUser)