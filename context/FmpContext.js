import { createContext, useState, useEffect } from 'react'

export const FmpContext = createContext(null)
  

export const FmpContextProvider = ({ children }) => {

    const [showGender, setShowGender] = useState(true)
    const [showPurpose, setShowPurpose] = useState(false)
    const [showHoroscope, setShowHoroscope] = useState(false)


    const context = { 
        showGender, setShowGender,
        showPurpose, setShowPurpose,
        showHoroscope, setShowHoroscope
    }

    //   useEffect(() => {
    //     // init netlify identity connection
    //     netlifyIdentity.init()
    //   }, [])

    return (
        <FmpContext.Provider value={context}>
            {children}
        </FmpContext.Provider>
    )
}

export default FmpContext