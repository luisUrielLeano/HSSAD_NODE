import dotenv from 'dotenv';

dotenv.config();

export const database = process.env.DATABASE_URL;
export const port = process.env.PORT;
export const jwtSecret = process.env.JWT_SECRET;
