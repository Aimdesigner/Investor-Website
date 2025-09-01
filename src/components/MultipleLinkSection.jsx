import React from 'react'
import { Link } from "react-router-dom";

import MultiLinks from './MultiLinks';

const MultipleLinkSection = ({ald, aod}) => {
    return (
        <>
            <div className="container  py-16 px-4 sm:py-0 sm:px-0 max-[767px]:pt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="">
                        <h3 className='text-3xl md:text-4xl font-bold leading-snug mb-[24px]'>
                            {aod.heading}
                        </h3>
                        <p className='mb-8 text-gray-600 text-lg'>{aod.para}</p>
                        <div className="mb-8">
                            <button className="bg-black text-white font-bold py-5 px-10 rounded-full shadow-lg shadow-lg border-2 border-black hover:bg-white hover:text-black hover:border-2 hover:border-black transition">
                                {aod.btnTxt}
                            </button>
                        </div>
                        <div className="mb-10 sm:mb-0">
                            <Link className='text-blue-600 font-medium hover:text-blue-500'>{aod.btmExtraBtnTxt}</Link>
                        </div>

                    </div>
                    <div className="">
                        <MultiLinks ald={ald} />

                    </div>
                </div>
            </div>
        </>
    )
}

export default MultipleLinkSection;