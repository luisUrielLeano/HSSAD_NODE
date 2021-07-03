import dotenv from 'dotenv';

dotenv.config();

export const database = process.env.DATABASE_URL;
export const port = process.env.PORT;
export const jwtSecret = process.env.JWT_SECRET;
export const pythonUrl = process.env.PYTHON_URL;
export const pythonScript = process.env.PYTHON_SCRIPT;
