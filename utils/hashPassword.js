import bcrypt from 'bcrypt';

export async function hashPassword(password) {
  try {
    const rounds = 10;
    const salt = await bcrypt.genSalt(rounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (err) {
    return err;
  }
}

export async function checkPassword(password, hash) {
  try {
    const result = await bcrypt.compare(password, hash);
    return result;
  } catch (err) {
    return err;
  }
}
