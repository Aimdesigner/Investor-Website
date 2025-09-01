import React from 'react'

const GoalsInnerBannerBtmInfo = ({ mainHeading, infoPara }) => {
    return (

        <>
            <section className='max-[767px]:px-5 max-[767px]:py-12'>
                <div className="container">
                    <div className="grid grid-flow-col min-[778px]:grid-cols-2 max-[776px]:flex max-[776px]:flex-col max-[776px]:grid-cols-1 max-[776px]:grid-rows-2 gap-4 lg:py-[50px]">
                        <div>
                            <h2 className='text-4xl font-bold mb-5 max-w-[450px]'>{mainHeading}</h2>
                        </div>
                        <div>
                            <p className='text-xl'>{infoPara}</p>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}

export default GoalsInnerBannerBtmInfo