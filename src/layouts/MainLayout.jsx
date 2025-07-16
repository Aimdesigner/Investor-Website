import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer'

const MainLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout