import React from 'react'
import type { Metadata } from 'next'
import GetAllUsers from '@/lib/getAllUsers'

export const metadata: Metadata = {
    title: 'Users',
}

const Users = () => {
    const usersData: Promise<user[]> = GetAllUsers()

  return (
    <div>Users</div>
  )
}

export default Users