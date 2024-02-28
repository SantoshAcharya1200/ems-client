import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext({})

const AppContextProvider = ({children}) => {
    const localLoginStatus = localStorage.getItem("santosh_login")
    const loginInit = localLoginStatus === "true" ? true: false;
    const [isLoggedIn, setIsLoggedIn] = useState(loginInit)
    const [name,setName]=useState('')
  return (
    <AppContext.Provider value={{
        user:{isLoggedIn, setIsLoggedIn,name,setName}
    }}>
        {children}
    </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)

export default AppContextProvider