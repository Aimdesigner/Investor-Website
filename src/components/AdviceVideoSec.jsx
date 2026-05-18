import React from 'react'
import CmnVideoSec from './CmnVideoSec'
import AdviceVideo from '../../src/assets/videos/AdviceVideo.mp4'
import AdviceVideoThumbnail from '../../src/assets/videos/advance-video-thumbnail.jpg'

const AdviceVideoSec = () => {

    const adviceVideoContent = {
        heading: "Empowering investors for 50 years and counting",
        para: `We stick to 4 principles designed to set investors up for success:
          goals, balance, costs, and discipline.`,
        btnTxt: "Why choose Vanguard",
        btmBtnLink: "Open transcript",
        video_link: AdviceVideo,
        video_thumbnail: AdviceVideoThumbnail
    }

    return (
        <>
            <CmnVideoSec adc={adviceVideoContent} />
        </>
    )
}

export default AdviceVideoSec