import Image from 'next/image'
import EmailList from './components/EmailList'

export default function Home() {
  return (
    <main>
      <div className="container mx-auto mt-8">

        <EmailList />
      </div>
    </main>
  )
}
