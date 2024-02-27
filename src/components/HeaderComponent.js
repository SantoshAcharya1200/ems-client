import React from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContextProvider'

const HeaderComponent = () => {
    const {user:{isLoggedIn, setIsLoggedIn}} = useAppContext();
    return (
        <div>
            <header>
                <nav className = "navbar navbar-expand-md navbar-dark bg-dark">
                    <div >
                        <p className = "navbar-brand">
                            Employee Management Application
                        </p>
                        <div style={{display: 'flex', justifyContent:"space-around", alignItems:"center"}}>
{isLoggedIn &&(<>
                        <Link to="/attendance">Attendance Menu</Link>
                        <Link to="/employees">Employee Menu</Link>
                        <button onClick={()=>{setIsLoggedIn(false);  
                            localStorage.removeItem("santosh_login");
}}>Logout</button></>)}
                        </div>
                    </div>

                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent