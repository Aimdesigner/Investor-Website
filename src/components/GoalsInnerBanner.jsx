import React from 'react'

const GoalsInnerBanner = ({bnrImg,mainHeading,subText,button}) => {
    return (

        <div className="w-full h-full bg-cover bg-center flex items-cenetr justify-start min-[768px]:px-12 min-[768px]:py-[112px] max-[767px]:px-5 max-[767px]:py-12" style={{ backgroundImage: `url(${bnrImg})` }}>

            <div className="container ">
                {mainHeading}
                {subText}                
                {button}
            </div>

        </div>

    )
}

export default GoalsInnerBanner