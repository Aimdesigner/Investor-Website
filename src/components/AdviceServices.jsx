import TabbedContent from "../components/TabbedContent";
import digitalImg from "../assets/advices/wwo-typ-da-hero-phlife-gi-desktop.jpeg";
import personalImg from "../assets/advices/wwo-aspot-pa-phlife-gi-desktop.jpeg";
import personalAdvisorSelect from "../assets/advices/wwo-aspot-financial-advice-phlife-gi.jpeg";
import wealthManagement from "../assets/advices/wwo-aspot-wm-man-and-woman-phlife-gi.jpeg";

const AdviceServices = () => {
    const adviceTabs = [
        {
            title: "Digital Advisor",
            heading: "Vanguard Digital Advisor®",
            subInfo: `$1002 minimum to qualify. Annual advisory fee: Approximately $15-$16 per $10,000 invested.3`,
            description: "A robo-advisor is an automated digital platform that provides financial planning and investment management services. Our robo-advisor gives you:",
            image: digitalImg,
            points: [
                "Automated investing with both funds and ETF-based portfolios.",
                "Guidance on saving for retirement.",
                "Options to add custom goals to your plan.",
                "Debt strategies to pay off debt faster.",
                <>No advisory fees for the first 90 days.<sup>1</sup></>
            ],
            button: { label: "Learn more", link: "/digital-advisor" }
        },
        {
            title: "Personal Advisor",
            heading: "Vanguard Digital Advisor®",
            subInfo: `$50,000 minimum to qualify.
Annual advisory fee: Approximately $30-$31 per $10,000 invested.3`,
            description: "A hybrid advisor combines automated investment management with access to human financial advisors for personalized guidance. This hybrid service offers you:",
            image: personalImg,
            points: [

                "Access to professional financial advisors.",
                "Ongoing personal financial planning and automated investing options.",
                "Support for tax strategies, withdrawals, debt management, and other planning topics."
            ],
            button: { label: "Learn more", link: "/digital-advisor" }
        },

        {
            title: "Personal Advisor Select",
            heading: "Vanguard Personal Advisor Select™",
            subInfo: `$500,000 minimum to qualify.
                      Annual advisory fee: No more than $30 per $10,000 invested.4`,
            description: "A personal financial advisor is a professional who provides customized financial guidance and planning based on an individual's specific goals and financial situation. With this option, you'll experience:",
            image: personalAdvisorSelect,
            points: [

                "Custom investment and financial planning strategies.",
                "A dedicated Certified Financial Planner™ (CFP®).",
                "A personalized plan based on 30+ data points specific to you.",
                "A tax strategy that addresses Social Security, Roth conversions, and account withdrawal order in the context of your spending needs and legacy goals."
            ],
            button: { label: "Learn more", link: "/digital-advisor" }
        },

        {
            title: "Wealth Management",
            heading: "Vanguard Personal Advisor Wealth Management™",
            subInfo: `$5M+ minimum to qualify.
Annual advisory fee: No more than $30 per $10,000 invested.<sup>4</sup>`,
            description: "Wealth management is a comprehensive financial service that combines investment advice, estate planning, tax services, and other financial strategies to grow and protect an individual's wealth. To support the complexity of your higher wealth, you'll receive:",
            image: wealthManagement,
            points: [
                "All the benefits of Personal Advisor Select.",
                "Advice from a dedicated CFP professional.",
                "Exclusive investing solutions, including private equity and closed funds.",
                "Wealth and estate planning. "
            ],
            button: { label: "Learn more", link: "/digital-advisor" }
        },
    ];

    return <TabbedContent heading="Compare our advice services" tabs={adviceTabs} />;
};

export default AdviceServices;
