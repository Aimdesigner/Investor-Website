import { React, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import FAQItem from '../../components/Faq/FAQItem';

const FAQ = ({ title, faqs }) => {
    const [showAll, setShowAll] = useState(false);
    const [openIndex, setOpenIndex] = useState(0);
    const visibleFaqs = showAll ? faqs : faqs.slice(0, 4);

    return (
        <>
            <h2 className="text-4xl font-bold text-left mb-10">{title}</h2>

            <AnimatePresence mode="wait">
                <motion.div
                    key={showAll ? "all" : "limited"}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className='overflow-hidden'
                >

                    {
                        visibleFaqs.map((faq, index) => (
                            <FAQItem key={index} question={faq.question} answer={faq.answer} open={openIndex === index} onClick={() => setOpenIndex(openIndex === index ? null : index)} />
                        ))
                    }
                </motion.div>
            </AnimatePresence>
            <button className="mt-4 text-blue-600 font-semibold"
                onClick={() => { setShowAll(!showAll); setOpenIndex(0) }}>
                {showAll ? `Show Less` : `Show All (${faqs.length})`}
            </button>

        </>
    )
}

export default FAQ