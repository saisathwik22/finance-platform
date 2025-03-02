import arcjet, { tokenBucket } from "@arcjet/next";

const aj = arcjet({
  key: process.env.ARCJET_KEY,
  characteristics: ["userId"], // track based on clerk user id
  rules: [
    tokenBucket({
      mode: "LIVE",
      refillRate: 10,
      // every hour user can make 10 requests
      // 1 hour (60 mins) 1min (60 sec), 60 * 60 == 3600
      interval: 3600,
      capacity: 10,
    }),
  ],
});

export default aj;
