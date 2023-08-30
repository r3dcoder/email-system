import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import { setFips } from 'crypto'
import axios from 'axios'
import { useAuth } from '@/context/auth-provider'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [first, setfirst] = useState("second")
  const {googleAccessToken, user} = useAuth();


  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/mail/list/'+user?.email, {
        headers: {
          Authorization: `Bearer ${googleAccessToken}`,
        },
      });

      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <main>
      <button onClick={()=>fetchData()}>{first}</button>
    </main>
  )
}
