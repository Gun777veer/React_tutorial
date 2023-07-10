import React from 'react'
import { Link } from 'react-router-dom'

export const Main = () => {
  return (
    <div><h1>All of the hooks</h1>
    <Link to='/usestate'>UseState Hook</Link>
    <Link to='/useeffect'>UseEffect Hook</Link>
    </div>
  )
}
