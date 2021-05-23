import AuthService from './authService.js';

const authController = {};

authController.signIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    const { user, token } = await AuthService.signIn(username, password);
    return res.status(200).json({ user, token });
  } catch (err) {
    return res.status(err.status).send(err.message);
  }
};

export default authController;
