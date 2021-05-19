import "./NavigationBar.css"
import {useState} from 'react'
import {useRef} from 'react'
import {useEffect} from 'react'
import {FaBell} from "react-icons/fa"
import Notification from './Notification'
const NavigationBar = ({Notifications, onClearAll, onSeenAll, onDelete}) => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    function getUnseenCount(){
        if (Notifications!=null) {
           return Notifications.filter(item =>item.seen===0).length 
        }
        else return 0;
     };
    const showNotifications = () =>{
        setIsActive(!isActive);
        if(isActive===true && getUnseenCount() !==0){
            onSeenAll()
         }
    }
    const clearAll = () =>{
        setIsActive(!isActive);
        if(isActive===true){
           onClearAll()
        }
    }
    useEffect(() => {
        const pageClickEvent = (e) => {
            if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target) && e.target.localName!=='tspan') {
              showNotifications()
              }
        };
        if (isActive) {
            window.addEventListener('click', pageClickEvent);
          }
          return () => {
            window.removeEventListener('click', pageClickEvent);
          }
      }, [isActive]);
    return (
        <div className="navigation-bar">
            <div className="notification-bell"> 
                <div className="icon">
                    <FaBell onClick={showNotifications} className='bell' style={{color: !isActive ? "#aeb1b7" : 'white'}}/> <span style={{color: isActive ? "white" : '#aeb1b7' , cursor:'default'}}>{getUnseenCount()}</span>
                </div>
                <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                    <ul>
                        <li style={{textAlign:'center'}}><h3>Notifications</h3></li>
                        {Notifications !==null  && Notifications.map(notification => 
                        <li className={`${notification.seen===0 ? "not-seen" : "seen"}`} key={notification.id}><Notification info={notification} onDelete={onDelete}/></li>)}
                        {Notifications.length===0 && <li style={{textAlign:'center'}}><label>There are no notifications</label></li>}
                        <li style={{textAlign:'center'}}><label onClick={() =>clearAll()} className='clear-all-btn'>Clear All</label></li>
                    </ul>
                 </nav>
            </div>
        </div>
    )
}

export default NavigationBar
