import { NextApiRequest, NextApiResponse } from "next";

import Database from '@database';

const avoById = async (req:NextApiRequest, res:NextApiResponse) => {
  const db = new Database();
  const avoId = req.query.id
  if(typeof avoId !== "string") throw new Error("Invalid avo id");

  const data = await db.getById(avoId);

  res.status(200).json(data)
}

export default avoById;