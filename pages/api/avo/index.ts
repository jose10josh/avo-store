import { NextApiRequest, NextApiResponse } from "next";


import Database from '@database';

const allAvos = async (req:NextApiRequest, res:NextApiResponse) => {
  const db = new Database();
  const data = await db.getAll()
  const length = data.length;

  res.status(200).json({length, data})
}

export default allAvos;