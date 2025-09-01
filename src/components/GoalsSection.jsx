import React from 'react'
import { Link } from "react-router-dom";
import growImg1 from '../assets/home/grow-img1.jpeg';
import growImg2 from '../assets/home/grow-img2.jpeg';
import growImg3 from '../assets/home/grow-img3.jpeg';
import growImg4 from '../assets/home/grow-img4.jpeg';

const GoalsSection = () => {

  const goals = [
    {
      title: "Prep for retirement",
      description:
        "Work with an advisor or a robo-advisor to get a personalized strategy in place.",
      image: growImg1,
      button: "Advice services",
      link: "/advice", // 👈 navigate here
    },
    {
      title: "Live in the moment",
      description: "We’ll help you save so you don’t have to sweat surprise expenses.",
      image: growImg2,
      button: "Cash management",
      link: "/cash",
    },
    {
      title: "Plan your estate",
      description:
        "Exclusively available to investors with $5 million in Vanguard funds or ETFs.",
      image: growImg3,
      button: "Estate planning",
      link: "/estate",
    },
    {
      title: "Save for school",
      description:
        "Tuition and other education expenses can be costly. Start planning now so you're prepared.",
      image: growImg4,
      button: "529 savings plan",
      link: "/529-plan",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="min-[992px]:text-5xl max-[767px]:text-[34px] font-bold text-center mb-10">
        Which goal can you check off your list?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {goals.map((goal, idx) => (
          <div key={idx} className="bg-white shadow rounded-md overflow-hidden">
            <img
              src={goal.image}
              alt={goal.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 justify-between">
              <h3 className="text-lg font-semibold mb-2">{goal.title}</h3>
              <p className="text-gray-600 text-sm mb-4 md:min-h-[64px] max-w-full">{goal.description}</p>
              <Link
                to={goal.link}
                className="mt-auto inline-block border border-black rounded-full px-4 py-2 text-sm font-medium hover:bg-black hover:text-white transition"
              >
                {goal.button}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default GoalsSection