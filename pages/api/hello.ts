// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectToDatabase } from "../../utils/mongo";

const client = connectToDatabase();

//@ts-ignore
// console.log(await client.isConnected());

export default (req, res) => {
  res.status(200).json({ name: "John Doe" });
};
