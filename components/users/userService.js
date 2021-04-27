import { User } from './user';

export default class UserService {
  static async getUsers() {
    try {
      const users = await User.find();
      return users;
    } catch (err) {
      return err;
    }
  }
}
