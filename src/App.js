import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent'
import { useAppContext } from './context/AppContextProvider';

const App = () => {
  const { user: { name} } = useAppContext();
  return (
<>
 <HeaderComponent userName={name}/>
 <Outlet/>
</>
    )
}

export default App