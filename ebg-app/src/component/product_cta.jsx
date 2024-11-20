import React from 'react';



export default function product_cta({product_cta_content}) {
    return (
    <>
        <div className="container mx-auto pb-20">
            {product_cta_content.map((item, index) => (
                <div key={index}>
                    <div className="flex flex-col-reverse lg:flex-row bg-[#F2F2F2] rounded-[20px]">
                        <div className='flex flex-col justify-between p-10 lg:px-20 lg:pt-20 lg:pb-10' >
                            <div className='lg:pb-0 pb-10'>
                                <p className='text-dark text-[24px] pb-2 font-bold'>{item.title}</p>
                                <p className=' text-dark font-medium  text-[24px] pt-5 pb-3'>{item.sub_title}</p>
                                <p>{item.text}</p>
                            </div>
                            <div className='pt-10'>
                                <p>{item.point1}</p>
                                <p className='py-3'>{item.point2}</p>
                                <p>{item.point3}</p>
                            </div>
                        </div>
                        <img src={item.image} alt=""  className='w-full lg:w-3/5 object-cover rounded-[20px]'/>
                    </div>
                </div>
            ))}
        </div>  
    </>
    )
}