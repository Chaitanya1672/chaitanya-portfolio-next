import { redirect } from 'next/navigation'
import React from 'react'

const Home = () => {
  redirect('/open-source')
  return <div>Home</div>
}

export default Home
