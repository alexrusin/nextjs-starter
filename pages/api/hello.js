// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import logger from '../../services/logger';

export default function handler(req, res) {
  logger.info(`Request headers: ${JSON.stringify(req.headers)}`);

  res.status(200).json({ name: 'John Doe' });
}
