// import { useContext } from 'react'
// import FmpContext from '../../context/FmpContext'

import Gender from './Gender'
import Horoscope from './Horoscope'
import Purpose from './Purpose'

export default function FmpApp() {

    // const user = useContext(FmpContext)
    // console.log(user)

    return (
        <div className='grid justify-items-center ' >
            {true && <Gender />}
            {true && <Horoscope />}
            {true && <Purpose />}
        </div>
    )
}