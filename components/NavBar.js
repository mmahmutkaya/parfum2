import Link from 'next/link'
import React from 'react'


export default function NavBar() {
    return (
        <div id='NavBar' className='gap-x-2 bg-gray-400 mb-3 rounded flex items-center justify-center'>
            <Link href="/">
                <a>Ana Sayfa</a>
            </Link>
            <Link href="/fmp/">
                <a>Parfümümü Bul</a>
            </Link>
        </div>
    )
}
