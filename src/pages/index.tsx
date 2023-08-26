import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import { setFips } from 'crypto'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [first, setfirst] = useState("second")
  return (
    <main>
      <button onClick={()=>setfirst("hi")}>{first}</button>
    </main>
  )
}
