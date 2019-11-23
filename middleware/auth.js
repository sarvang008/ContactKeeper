const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
  //Get token from header
  const token = req.header('x-auth-token');
  //check if not token
  if (!token) {
    return res.status('401').json({ msg: 'No token, authorisation denied ' });
  }
  try {
    //if token is invalid gives throws a exception
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user;
    next();
  } catch (error) {
    console.error(error.message);
    res.status('401').json({ msg: 'Token invalid,Authorisation denied' });
  }
};
