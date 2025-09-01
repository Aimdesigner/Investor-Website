import React from 'react'
import { Link } from "react-router-dom";
import { ChevronRight } from 'lucide-react';

const MultiLinks = ({ ald }) => {
    return (
        <>
            {
                ald.map((ald, index) => (
                    <div key={index} className="flex justify-between link_div text-gray-400  border-t-2 bg-gray-50 border-t-gray-300 hover:border-t-black hover:bg-gray-200 py-5 px-5 text-xl hover:text-black hover:font-semibold">
                        <Link to={ald.links} className=''>{ald.linkTitle}</Link>
                        <span className='translate-x-[-10px] hover:translate-x-0'><ChevronRight /></span>
                    </div>
                )

                )
            }

        </>
    )
}

export default MultiLinks