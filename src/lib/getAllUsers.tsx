import React from 'react'

const GetAllUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  if(!response.ok) throw new Error('failed to fetch data')

  return (
    response.json()
  )
}

export default GetAllUsers