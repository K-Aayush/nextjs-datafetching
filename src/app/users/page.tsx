import React from 'react'
import type { Metadata } from 'next'
import GetAllUsers from '@/lib/getAllUsers'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Users',
}

const Users = async () => {
    const usersData: Promise<user[]> = GetAllUsers();

    const users = await usersData

    const content = (
        <section>
            <h2>
                <Link href="/">Back to Home</Link>
            </h2>
            <br />
            {users.map((user) => (
                <p key={user.id}>
                    <Link href={`/users/${user.id}`}>{user.name}</Link>
                </p>
            ))}
        </section>
    )


  return (
    content

    
    // <div>
    //     <h2>
    //         <Link href="/">Back to Home</Link>
    //     </h2>
    //     <br />
    //     {users.map((user) => (
    //         <p key={user.id}>
    //             <Link href={`/users/${user.id}`}>{user.name}</Link>
    //         </p>
    //     ))}
    // </div>
  )
}

export default Users