import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="">
      <div>Home</div>
      <Link href="/users">Users</Link>
    </main>
  )
}
