import React from "react";


function Card(props){
    console.log("props",props);
    
    return(
        <>
            <h1 className='bg-green-400  p-4 rounded-xl text-black  mb-4 mt-4'>{props.name}</h1>
            <h1   className='bg-green-400  p-4 rounded-xl text-black  mb-4'> Tailwind  test</h1>
            
            <div className="flex flex-col rounded-xl  p-4"
            style={{
            border: '0.88px solid',
    
            backdropFilter: 'saturate(180%) blur(14px)',
            background: ' #ffffff0d',
            }}
        >
            <div className="mb-4">
            <img
                src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
                alt="nft-gif"
                width="400"
                height="400"
                className="rounded-xl"
            />
            </div>
            <div className="flex flex-col  rounded-b-xl py-4 ">
            <div className="flex justify-between">
                <h1 className="font-RubikBold "> </h1>
                <h1 className="font-RubikBold "> </h1>
                <h1 className="font-bold font-RubikBold">Price</h1>
            </div>
            <div className="flex  justify-between font-mono">
                <p>#345</p>
                <p>0.01</p>
            </div>
            </div>
        </div>
        </>
    )
}
export default Card