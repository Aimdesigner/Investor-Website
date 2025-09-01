import React from 'react'
import CmnVideoSec from './CmnVideoSec'

const AdviceVideoSec = () => {

    const adviceVideoContent = {
        heading: "Empowering investors for 50 years and counting",
        para: `We stick to 4 principles designed to set investors up for success:
          goals, balance, costs, and discipline.`,
        btnTxt: "Why choose Vanguard",
        btmBtnLink: "Open transcript"
    }

    return (
        <>
            <CmnVideoSec adc={adviceVideoContent} />
        </>
    )
}

export default AdviceVideoSec