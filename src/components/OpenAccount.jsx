import React from 'react';
import { Link } from "react-router-dom";

const OpenAccount = ({ onClose }) => {
    return (
        <>

            <div className="fixed inset-0 z-50 bg-white pt-0 pb-8 overflow-auto">
                <header className="top-0 left-0 w-full z-50 transition-all duration-300 border-b border-b-gray-200">
                    <div className="container py-2 px-4">
                        <div className="flex items-center gap-4">
                            <Link to="/" className="text-3xl font-bold text-red-700">Vanguard</Link>
                            <p className="text-neutral-700 border-l pl-2 ml-2 ">Personal investors</p>
                        </div>
                    </div>

                </header>

                <div className="container px-8">
                    <div className="flex justify-end items-center py-4 mb-6 ">

                        <button onClick={onClose} className="text-sm font-semibold border px-3 py-1 rounded hover:bg-black hover:text-white ">Quit ✕</button>
                    </div>
                    <h2 className="text-2xl font-bold text-center mb-8">Setting up your new account</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="border p-6 rounded-lg bg-green-50 flex flex-col items-center">
                            <img src="/img-add-account.png" alt="Add Account" className="w-48 mb-4" />
                            <h3 className="text-lg font-bold mb-2">Add to your accounts</h3>
                            <p className="text-sm text-gray-600 text-center mb-4">
                                Already have a Vanguard account or need online access? Log in or verify a few details to get started.
                            </p>
                            <button className="border border-black px-4 py-2 rounded-full font-semibold">Add to my accounts</button>
                        </div>

                        <div className="border p-6 rounded-lg bg-yellow-50 flex flex-col items-center">
                            <img src="/img-open-investment.png" alt="Open Investment" className="w-48 mb-4" />
                            <h3 className="text-lg font-bold mb-2">Open an investment account</h3>
                            <p className="text-sm text-gray-600 text-center mb-4">
                                New to Vanguard? Choose how you’d like to start investing with us and get started with online access.
                            </p>
                            <button className="border border-black px-4 py-2 rounded-full font-semibold">Get started</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OpenAccount;
