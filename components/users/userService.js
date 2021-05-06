import User from './user.js';
import { hashPassword } from '../../utils/hashPassword.js';

export default class UserService {
  static async getUsers() {
    try {
      const users = await User.find();
      return users;
    } catch (err) {
      return err;
    }
  }

  static async createUser(userInfo) {
    try {
      const user = new User({
        username: userInfo.username,
        password: await hashPassword(userInfo.password),
        email: userInfo.email,
        role: userInfo.role,
        isActive: true,
      });
      const userCreated = await user.save();
      return userCreated;
    } catch (err) {
      return err;
    }
  }
}
