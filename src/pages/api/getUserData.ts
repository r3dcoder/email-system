// pages/api/getUserData.ts
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const authorizationHeader = req.headers.authorization;
    
    if (!authorizationHeader) {
      return res.status(401).json({ error: 'Authorization header missing' });
    }
    
    const token = authorizationHeader.split(' ')[1];

    const response = await axios.get(`http://localhost:8000/api/mail/user/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'Error fetching user data' });
  }
}
