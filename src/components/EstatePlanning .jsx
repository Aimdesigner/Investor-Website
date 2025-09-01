import TabbedContent from "../components/TabbedContent";
import estateImg from "../assets/estate/estate.jpg";
import familyImg from "../assets/estate/family.jpg";

const EstatePlanning = () => {
  const estateTabs = [
    {
      title: "Wealth and estate planning",
      heading: "Comprehensive estate planning solutions",
      description: "Through tailored consultations, our team of wealth planning professionals...",
      image: estateImg,
      points: [
        "Estate plan analysis for tax efficiency.",
        "Gifting and charitable strategies.",
        "Estate law consultation.",
        "Trusted advisor collaboration."
      ],
    },
    {
      title: "Family legacy planning",
      heading: "Build your legacy",
      description: "Plan for smooth wealth transfer to your loved ones...",
      image: familyImg,
      points: [
        "Legacy planning tailored to your family needs.",
        "Support for charitable donations.",
        "Minimize tax burden for heirs.",
      ],
    }
  ];

  return <TabbedContent heading="Comprehensive estate planning solutions that grow with you" tabs={estateTabs} />;
};

export default EstatePlanning;
