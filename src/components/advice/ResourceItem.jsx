import React from 'react'
import { Link } from "react-router-dom";
import resorceImg1 from '../../assets/advices/wwo-ioyo-aspot-dont-wait-phlife-as.jpeg';
import resorceImg2 from '../../assets/advices/vg20250723-smiling-woman-on-phone.jpeg';
import resorceImg3 from '../../assets/advices/wwo-aspot-investing-should-be-easy-phlife-gi.jpeg';


const ResourceItem = () => {


    const resorceItems = [
        {
            title: "Prep for retirement",
            description:
                "Work with an advisor or a robo-advisor to get a personalized strategy in place.",
            image: resorceImg1,
            button: "Advice services",
            link: "/advice", // 👈 navigate here
        },
        {
            title: "Live in the moment",
            description: "We’ll help you save so you don’t have to sweat surprise expenses.",
            image: resorceImg2,
            button: "Cash management",
            link: "/cash",
        },
        {
            title: "Plan your estate",
            description:
                "Exclusively available to investors with $5 million in Vanguard funds or ETFs.",
            image: resorceImg3,
            button: "Estate planning",
            link: "/estate",
        },
        
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6">

            {resorceItems.map((item, index) => (

                <div key={index} className="bg-white shadow rounded-md overflow-hidden">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4 justify-between">
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm mb-4 md:min-h-[64px] max-w-full">{item.description}</p>
                        <Link
                            to={item.link}
                            className="mt-auto inline-block border border-black rounded-full px-4 py-2 text-sm font-medium hover:bg-black hover:text-white transition"
                        >
                            {item.button}
                        </Link>
                    </div>
                </div>

            ))}
        </div>
    )
}

export default ResourceItem