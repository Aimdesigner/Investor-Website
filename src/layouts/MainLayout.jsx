import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import Login from '../components/Login';
import OpenAccount from '../components/OpenAccount';

const MainLayout = ({ children }) => {
    const [showLogin, setShowLogin] = useState(false);
    const [showOpenAccount, setShowOpenAccount] = useState(false);
    return (
        <div>
            {showLogin && <Login onClose={() => setShowLogin(false)} />}
            {showOpenAccount && <OpenAccount onClose={() => setShowOpenAccount(false)} />}
            <Header setShowLogin={setShowLogin} setShowOpenAccount={setShowOpenAccount} />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout