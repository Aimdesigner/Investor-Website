import React from 'react'
import MultipleLinkSection from './MultipleLinkSection'

const AdvanceMultipleLinkSection = () => {
    const amlsOtherData = {
       heading: "Investment products to support your financial strategy",
       para: "We offer a wide range of options to build your portfolio.",
       btnTxt: "View all funds",
       btmExtraBtnTxt: "Review fees and commissions"
    }
    const amlsLinkData = [
        {
            linkTitle: "Mutual funds",
            links: "/"
        },
        {
            linkTitle: "ETFs",
            links: "/"

        },
        {
            linkTitle: "Money market funds",
            links: "/"

        },
        {
            linkTitle: "Stocks",
            links: "/"
        }, {
            linkTitle: "CDs",
            links: "/"
        },
        {
            linkTitle: "Bonds",
            links: "/" 
        }
    ]

    return (
        <div className='amls_sec'><MultipleLinkSection ald={amlsLinkData} aod={amlsOtherData}   /></div>
    )
}

export default AdvanceMultipleLinkSection