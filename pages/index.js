// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'





import { useContext } from 'react'
import FmpContext from '../context/FmpContext'


export default function Home() {

  const { counter } = useContext(FmpContext)

  return (

    <div className='' >merhaba</div>

  )
}
