import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent'

const App = () => {
  return (
<>
 <HeaderComponent/>
 <Outlet/>
</>
    )
}

export default App