import { createContext, useState, useEffect } from 'react'

export const FmpContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
    authReady: false
  })
  

export const FmpContextProvider = ({ children }) => {

    const [user, setUser] = useState("mahmut2")
    const [counter, setCounter] = useState(0)

    const context = { user, setUser, counter, setCounter}

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