import React, { useState } from 'react'

export const Useeffect = () => {
    const [resourceType,setResourceType]=useState('posts')
  return (
    <>
        <div>
        <button onClick={setResourceType('posts')}>Posts</button>
        <button onClick={setResourceType('users')}>Users</button>
        <button onClick={setResourceType('comments')}>Comments</button>
    </div>
    <h1>{resourceType}</h1>
    </>
  )
}
