import { PrismaClient } from '@prisma/client';
import express from 'express';

import jwt from 'jsonwebtoken';
import cors from 'cors';
import SecurePassword from 'secure-password';

const app = express();
const pwd = new SecurePassword();

app.use(express.json());
app.use(cors());

const prisma = new PrismaClient();

app.listen(process.env.PORT || 3000);