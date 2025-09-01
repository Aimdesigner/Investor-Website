import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer, open, onClick }) => {
    return (
        <div className={`faq-items border-t py-5 ${open? "border-t-3 border-t-red-700" : ""}`}>
            <button className='faq-questions w-full flex justify-between items-center text-left font-bold text-[23px] ' onClick={onClick}>
                {question} <span>{open ? <ChevronUp /> : <ChevronDown />}</span>
            </button>

            <AnimatePresence>
                {
                    open && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className='overflow-hidden text-gray-700' >
                            <div className="py-5">{answer}</div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    )
}

export default FAQItem