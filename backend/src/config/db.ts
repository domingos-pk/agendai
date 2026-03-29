import 'dotenv/config';
import { PrismaClient } from '../../generated/prisma/client.js';
import { PrismaNeon } from '@prisma/adapter-neon';

const adapter = new PrismaNeon({
    connectionString: process.env.DIRECT_URL!,
});

const prisma = new PrismaClient({
    adapter,
});
