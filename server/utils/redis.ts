import { Redis } from "ioredis";
const redisClient = () => {
  if (process.env.REDIS_URL) {
    console.log(`Redis connected to ${process.env.REDIS_URL}`);
    return process.env.REDIS_URL;
  }
  throw new Error(`Could not connect to redis`);
};

export const redis = new Redis(redisClient());
