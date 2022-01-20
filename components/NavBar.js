import Link from 'next/link'
import React from 'react'


export default function NavBar() {
    return (
        <div id='NavBar' className='flex items-center justify-center mb-3 bg-gray-400 rounded'>
            <Link href="/">
                <a>Ana Sayfa</a>
            </Link>
            <Link href="/fmp/">
                <a>Parfümümü Bul</a>
            </Link>
        </div>
    )
}
