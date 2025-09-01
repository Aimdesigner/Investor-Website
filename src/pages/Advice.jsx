import React from 'react'
import GoalsInnerBanner from '../components/GoalsInnerBanner'
import goalsBanner1 from '../assets/advices/aspot-man-hiking-woods-phlife-gi.jpeg';
import GoalsInnerBannerBtmInfo from '../components/GoalsInnerBannerBtmInfo';
import AdviceServices from '../components/AdviceServices';
import AdviceCmnCtaSec from '../components/AdviceCmnCtaSec';
import AdviceComparison from '../components/AdviceComparison';
import AdvanceFAQSec from '../components/AdvanceFAQSec';
import Resources from '../components/advice/Resources';


const AdvanceBanner =

{
  image: goalsBanner1,
  Main_Heading: (

    <h1 className="min-[768px]:text-6xl max-[767px]:text-[39px] font-bold leading-tight mb-6 text-white md:w-[518px]">
      Compare investment advice
    </h1>

  ),

  sub_text: (<p className='sub_text min-[768px]:text-2xl max-[767px]:text-[20px] md:w-[520px] text-white mb-[40px]'>Financial planning services tailored to investors' needs.</p>),
  small_tetx: '*Estimate for illustrative purposes only. Total dollars held by Americans in savings accounts is extrapolated based on results of Vanguard Savings Study, March 2025. For more information see vanguard.com/cashplus.',
  button: (
    <button className="bg-white text-black font-bold py-5 px-10 rounded-full shadow-lg border-2 border-white hover:border hover:bg-black hover:text-white hover:border-2 hover:border-white transition">
      Compare services
    </button>
  ),
}
const AdvanceInnerBannerBtmInfo = {
  Main_Heading: 'Personalized investment advice',
  info_para: "Vanguard advisors provide personalized financial planning and investment management to help clients reach their financial goals. They create tailored plans, manage diversified portfolios using low-cost funds, and offer ongoing support to adjust strategies as clients' needs or market conditions change.",
}

const Advice = () => {
  return (
    <>
      <GoalsInnerBanner bnrImg={AdvanceBanner.image} mainHeading={AdvanceBanner.Main_Heading} subText={AdvanceBanner.sub_text} button={AdvanceBanner.button} />
      <GoalsInnerBannerBtmInfo mainHeading={AdvanceInnerBannerBtmInfo.Main_Heading} infoPara={AdvanceInnerBannerBtmInfo.info_para} />
      <AdviceServices />
      <AdviceCmnCtaSec />
      <AdviceComparison />
      <AdvanceFAQSec/>
      <Resources/>
    </>
  )
}

export default Advice