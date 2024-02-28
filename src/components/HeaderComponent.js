import React from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContextProvider'

const HeaderComponent = ({userName}) => {
    const {user:{isLoggedIn, setIsLoggedIn}} = useAppContext();
    return (
        <div>
            <header>
                <nav className = "navbar navbar-expand-md navbar-dark bg-dark">
                    <div style={{width:'100%'}}>
                        <p className = "navbar-brand">
                            Employee Management Application
                        </p>
                        <div style={{display: 'flex', justifyContent:"space-around", alignItems:"center",width:'100%'}}>
                        <div style={{float:'right',color:'white'}}> Welcome {userName.toUpperCase()} !!</div>
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