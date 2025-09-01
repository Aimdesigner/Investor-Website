import React from 'react'

const CmnCtaSec = ({ heading, button }) => {
    return (
        <>
            <div className="bg-black">
                <div className="container">
                    <div className="grid grid-flow-col min-[768px]:grid-cols-3 gap-4 lg:py-[50px] max-[767px]:flex max-[767px]:flex-col max-[767px]:px-5 max-[767px]:py-12">
                        <div className='col-span-2'>
                            <h2 className='text-4xl font-bold text-white max-w-[700px] max-[767px]:mb-10'>{heading}</h2>
                        </div>
                        <div>
                            <button className='inline-block min-[768px]:ml-22 max-[767px]:ml-0 px-10 py-6 bg-white rounded-full font-bold border-2 hover:bg-black hover:border-2 hover:border-white hover:text-white'>{button}</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CmnCtaSec