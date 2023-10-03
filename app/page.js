import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <header>
        <h1>Andres Hung</h1>
      </header>
      <section>
      <Image src='/packetroo.jpg' width={200} height={200} alt='Profile Picture' className='border-2 border-green-400 mb-3 mx-auto'/>
        <p>My name is Andres Hung and I like computers! I am currently doing my associates degree in Information Technology (IT) at the University of Belize.</p>
        <p>I previously went to OLOG High School in Belmopan and have my associates in Biology and Chemistry at the University of Belize.</p>
        <p>Current technologies that I work with include:</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>C++</li>
        </ul>
      </section>
      <footer>
          <a href='mailto:andres.hung@outlook.com' className='link'>Email</a>
          <Link href='https://github.com/andreshungbz' className='link'>GitHub Profile</Link>
      </footer>
    </main>
  )
}
