import jwt from 'express-jwt';
import { jwtSecret } from '../../config.js';

function getTokenFromHeader(req) {
  if (
    (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token')
        || (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer')
  ) {
    return req.headers.authorization.split(' ')[1];
  }
  return null;
}

const isAuth = jwt({
  secret: jwtSecret,
  algorithms: ['HS256'],
  userProperty: 'token',
  getToken: getTokenFromHeader,
});

export default isAuth;
