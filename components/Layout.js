import React from 'react'
import Header from './Header'
import NavBar from './NavBar'

export default function Layout({ children }) {
    return (
        <div id='Layout' className="min-h-screen p-10">
            <Header />
            <NavBar />
            <div id='Layout-Children'>
                {children}
            </div>
        </div>
    )
}
