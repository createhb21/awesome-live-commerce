import { NextApiRequest, NextApiResponse } from 'next';
import client from '../../libs/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await client.user.create({
    data: {
      email: 'alsghk9701@naver.com',
      name: 'hyobummlee997',
    },
  });

  res.json({
    ok: true,
  });
}
