import { useState, useEffect } from 'react'

import { FmpContextProvider } from '../context/FmpContext'
import Layout from '../components/Layout'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {

  return (
    <FmpContextProvider >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FmpContextProvider >
  )
}

export default MyApp
