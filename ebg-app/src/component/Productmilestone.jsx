import React from 'react';


export default function Productmilestone({title, discription, distance, mode, slogan ,col1_num,col1_metric,col1_text, col2_num,col2_metric,col2_text, col3_num,col3_metric,col3_text, col4_num,col4_metric,col4_text}) {
    return (
        <>
        <div className="container  mx-auto py-0 pt-20 md:py-40 ">
            <div className="text-center">
            <h1>{title }</h1>
            <p>{discription}</p>
            </div>
            <div className="flex justify-center py-20">
                <div className="rounded-full border-2  flex items-center justify-center text-center w-64 h-64">
                    <div>
                        <p className='text-[#484138] relative text-7xl font-normal'>{distance} <span className='text-xl absolute bottom-2'> km</span> </p>
                        <p className='text-[#484138]'>{mode}</p>
                    </div>
                </div>
            </div>
            <p className='text-4xl text-center text-[#484138] '>{slogan}</p>
            <div className="container my-20 mx-auto  flex flex-col md:flex-row gap-10 md:gap-20 w-fit justify-between bg-[#E2E2E2] p-14 rounded-[50px]">
                <p className='text-2xl'>First things first:</p>
                <div>
                    <p className='text-4xl text-[#484138]'>{col1_num} <span className='text-lg'>{col1_metric}</span></p>
                    <p>{col1_text}</p>
                </div>
                <div>
                    <p className='text-4xl text-[#484138]'>{col2_num} <span className='text-lg'>{col2_metric}</span></p>
                    <p>{col2_text}</p>
                </div>
                <div>
                    <p className='text-4xl text-[#484138]'>{col3_num} <span className='text-lg'>{col3_metric}</span></p>
                    <p>{col3_text}</p>
                </div>  
                <div>
                    <p className='text-4xl text-[#484138]'>{col4_num} <span className='text-lg'>{col4_metric}</span></p>
                    <p>{col4_text}</p>
                </div>
            </div>
        </div>

        <div>
            
        </div>
        
        </>
    );
}