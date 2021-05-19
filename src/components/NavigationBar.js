import "./NavigationBar.css"
import {useState} from 'react'
import {useRef} from 'react'
import {FaBell} from "react-icons/fa"
const NavigationBar = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const showNotifications = () =>{
        setIsActive(!isActive);
    }
    return (
        <div className="navigation-bar">
            <div className="notification-bell"> 
                <div className="icon">
                    <FaBell onClick={showNotifications} className='bell' style={{color: !isActive ? "#aeb1b7" : 'white'}}/> <span style={{color: isActive ? "white" : '#aeb1b7' , cursor:'default'}}>0</span>
                </div>
                <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                    <ul>
                        <li style={{textAlign:'center'}}><h3>Notifications</h3> </li>
                    </ul>
                 </nav>
            </div>
        </div>
    )
}

export default NavigationBar
