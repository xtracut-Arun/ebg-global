import React from 'react';

export default function Productmilestone({
    title,
    discription,
    distance,
    mode,
    slogan,
    below_slogan,
    col_heading,
    col1_num,
    col1_metric,
    col1_text,
    col2_num,
    col2_metric,
    col2_text,
    col3_num,
    col3_metric,
    col3_text,
    col4_num,
    col4_metric,
    col4_text
}) {

    return (
        <>
            <div className="container mx-auto py-0 pt-20 md:py-20">
                <div className="text-center flex flex-col items-center">
                    <h1>{title}</h1>
                    <p className="md:w-[56%] text-[17px]">{discription}</p>
                </div>
                <div className="flex justify-center pt-20 pb-10">
                    <div className="rounded-full border-2 border-[#4841388c] flex items-center justify-center text-center w-64 h-64">
                        <div>
                            <p className="text-[#484138] relative text-7xl font-normal">
                                {distance} <span className="text-xl absolute bottom-2 ps-2"> km</span>
                            </p>
                            <p className="text-[#484138]">{mode}</p>
                        </div>
                    </div>
                </div>
                <p className="text-4xl text-center text-[#484138] pb-10">{slogan}</p>
                <div className="flex justify-center">
                    <p className="text-center md:w-[45%]">{below_slogan}</p>
                </div>
                <div className={`container w-fit my-10 mx-auto  flex flex-col md:flex-row  gap-10 md:gap-5 lg:gap-20 justify-center bg-[#E2E2E2] p-14 rounded-[50px]`}>
                    <p className="text-2xl md:w-[28%]">{col_heading || 'First things first:'}</p>
                    <div>
                        <p className="text-4xl text-[#484138]  text-nowrap">
                            {col1_num} <span className="text-lg">{col1_metric}</span>
                        </p>
                        <p>{col1_text}</p>
                    </div>
                    <div>
                        <p className="text-4xl text-[#484138] text-nowrap">
                            {col2_num} <span className="text-lg">{col2_metric}</span>
                        </p>
                        <p>{col2_text}</p>
                    </div>
                    <div className='w-1/5'>
                        <p className="text-4xl text-[#484138] text-nowrap">
                            {col3_num} <span className="text-lg">{col3_metric}</span>
                        </p>
                        <p>{col3_text}</p>
                    </div>
                    
                    <div>
                        <p className="text-4xl text-[#484138] text-nowrap">
                            {col4_num} <span className="text-lg">{col4_metric}</span>
                        </p>
                        <p>{col4_text}</p>
                    </div>
                    
                </div>
            </div>
        </>
    );
}
