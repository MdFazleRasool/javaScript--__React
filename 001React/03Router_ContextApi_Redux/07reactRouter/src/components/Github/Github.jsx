//import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

let url = `https://api.github.com/users/hiteshchoudhary`;


function Github() {
    const data = useLoaderData();
    //const [data , setData]  = useState([]);
    // useEffect(() => {
    //     fetch(url)
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data);
    //         setData(data);
    //     })
    // },[data,url])
  return (
    <div  className='text-center m-4 bg-gray-600 text-white p-4 text-4xl'>
        Github  Followers :  {data.followers}
        <img src = {data.avatar_url} alt ="Git Picture " width={300} />
    </div>
  )
}

export default Github;

export const githubInfoLoader  = async () => {
  const response  = await fetch(url);
  return response.json();
}