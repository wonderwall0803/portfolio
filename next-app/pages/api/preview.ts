import type { NextApiRequest, NextApiResponse } from 'next';
import { getPreviewData } from 'libs/client';

export default async function preview(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const slug = typeof req.query.slug === 'string' ? req.query.slug : '';
  const draftKey = typeof req.query.draftKey === 'string' ? req.query.draftKey : '';
  const type = typeof req.query.type === 'string' ? req.query.type : 'posts';

  if (!slug) {
    return res.status(404).end();
  }

  const content = await getPreviewData(type, slug, draftKey);

  if (!content) {
    return res.status(401).json({ message: 'Invalid slug' });
  }
  
  res.setPreviewData({slug: content.id, draftKey: draftKey});
  res.writeHead(307, { Location: `/${type}/${slug}` });
  res.end('Preview mode enabled');
}
