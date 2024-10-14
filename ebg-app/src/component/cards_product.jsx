import React from 'react';



export default function cardsproduct({cardsproduct}) {
    return(
        <>
            <div className="container mx-auto grid grid-cols-2 gap-5">
                {cardsproduct.map((item, index) => (
                    <div key={index} className='bg-pink rounded-2xl ' >
                        <img src={item.img} alt="" className='rounded-2xl h-52 w-full object-cover' />
                        <div className="px-10">
                            <p className='text-[#7F90A5] py-4'>{item.value}</p>
                            <p className='text-[#2D3540] pb-10'>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}