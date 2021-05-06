import UserService from './userService.js';

const userController = {};

userController.getAllUsers = async (req, res) => {
  try {
    const users = await UserService.getUsers();
    return res.json(users);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

userController.createUser = async (req, res) => {
  try {
    const userInfo = req.body;
    const userCreated = await UserService.createUser(userInfo);
    return res.json({ msg: 'User Created', user: userCreated });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export default userController;
