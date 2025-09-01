import React from 'react'
import CmnCtaSec from '../components/cmnCtaSec';

const AdviceCmnCtaCon = {
    heading: "Unsure whether you need a financial advisor? Take our quiz to see.",
    button: "Check out our guide"
}

const AdviceCmnCtaSec = () => {
    return (
        <>
            <CmnCtaSec heading={AdviceCmnCtaCon.heading} button={AdviceCmnCtaCon.button} />
        </>
    )
}

export default AdviceCmnCtaSec