import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid} = useParams();
  return (
    <div    className='text-center text-white text-3xl bg-gray-600'>User : {userid}</div>
  )
}

export default User