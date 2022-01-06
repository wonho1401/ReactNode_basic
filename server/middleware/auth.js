const { User } = require("../models/User");

let auth = (req, res, next) => {
  // 인증 처리를 하는 곳.
  // 1. 클라이언트 쿠키에서 토큰을 가져옴.
  let token = req.cookies.x_auth;
  // 2. 토큰을 복호화한 후 유저를 찾는다.
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) return res.json({ isAuth: false, error: true });
    req.token = token;
    req.user = user;
    next();
    //next를 넣는 이유는 미들웨어 이기 때문에 다음으로 넘어갈 수 있도록 해줘야함.
  });
  // 3. 유저가 있으면 인증 OK! 없으면 인증 NO!
};

module.exports = { auth };
