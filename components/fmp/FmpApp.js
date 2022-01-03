import { useContext } from 'react'
import FmpContext from '../../context/FmpContext'

import Gender from './Gender'
import Horoscope from './Horoscope'
import Purpose from './Purpose'

export default function FmpApp() {

    const {
        showGender,
        showPurpose,
        showHoroscope
    } = useContext(FmpContext)

    return (
        <div className='grid justify-items-center ' >
            {showGender && <Gender />}
            {showHoroscope && <Horoscope />}
            {showPurpose && <Purpose />}
        </div>
    )
}

