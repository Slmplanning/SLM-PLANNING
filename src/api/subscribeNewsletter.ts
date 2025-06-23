// API route to handle newsletter subscriptions and insert into Supabase
import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }
  const supabase = createClient(
    process.env.VITE_SUPABASE_URL!,
    process.env.VITE_SUPABASE_ANON_KEY!
  );
  const { error } = await supabase.from('newsletter_subscribers').insert([{ email }]);
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  return res.status(200).json({ success: true });
}
