import React from 'react';



export default function leftright_products({LRcontent}) {
    return (
    <>
        <div className="container mx-auto pb-10">
            {LRcontent.map((item, index) => (
                <div key={index}>
                    <div className={`flex flex-col  md:py-10  ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center `}>
                        <img src={item.img} alt="" className="w-full md:w-[45%]  h-full rounded-[20px]" />
                        <div className='w-full md:w-3/5 py-10  md:p-20'>
                            <p className='dark_grey text-2xl md:text-[40px] leading-none'>{item.title}</p>
                            <p className='pt-5'>{item.text}</p>
                            <p className='pt-5'>{item.text2}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>  
    </>
    )
}