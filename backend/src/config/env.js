import "dotenv/config.js";

export const ENV = {
    PORT: process.env.NODE_PORT || 5001,
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    
};
