import jwt from 'jsonwebtoken';
import User from '../users/user.js';
import { checkPassword } from '../../utils/hashPassword.js';
import { jwtSecret } from '../../config.js';

export default class AuthService {
  static generateToken(user) {
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    return jwt.sign({
      username: user.username,
      role: user.role,
      email: user.email,
      exp: exp.getTime() / 1000,
    },
    jwtSecret);
  }

  static async signIn(username, password) {
    try {
      const userRecord = await User.findOne({ username });
      if (!userRecord) {
        throw new Error('User not registred');
      }
      const validPassword = await checkPassword(password, userRecord.password);
      if (!validPassword) {
        throw new Error('Invalid Password');
      }
      return {
        user: {
          username: userRecord.username,
          email: userRecord.email,
          role: userRecord.role,
        },
        token: this.generateToken(userRecord),
      };
    } catch (err) {
      err.status = 401;
      throw err;
    }
  }
}
