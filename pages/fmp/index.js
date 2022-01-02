import { useContext } from 'react'
import FmpContext from '../../context/FmpContext'

import FmpApp from '../../components/fmp/FmpApp'

const Fmp = () => {

    const {counter} = useContext(FmpContext)

    return (
        <div className='grid justify-items-center ' >
            <p>{counter}</p>
            <FmpApp />
        </div>
    )
}

export default Fmp
