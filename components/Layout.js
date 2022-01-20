import React from 'react'
import Header from './Header'
import NavBar from './NavBar'

export default function Layout({ children }) {
    return (
        <div id='Layout' className="grid min-h-screen gap-2 bg-indigo-200 auto-rows-max">
            <Header />
            <NavBar />
            <div id='Layout-Children' className="bg-blue-500">
                {children}
            </div>
        </div>
    )
}
