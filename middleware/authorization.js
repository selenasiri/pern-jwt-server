const jwt = require('jsonwebtoken')

module.exports = async (req, res, next)=>{
  try {
    // 1. get token in header?
    const jwtToken = req.header('token')
    if (!jwtToken) {
      res.status(403).json('Not Authorize');
    }

    // 2. verify token
    const payload = jwt.verify(jwtToken, process.env.JWT_SECRET)
    req.user = payload.user
    next()
  } catch (err) {
    console.error(err.message);
    res.status(403).json('Not Authorize');
  }
}