// show some examples of how to make API
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export async function GET()(req: Request, res: Response) {
  const { url } = req.body;
  const uuid = crypto.randomUUID();
  const qr = await QRcode.toFile(`public/${uuid}.png`, url);
  res.status(200).json({ uuid });
}
