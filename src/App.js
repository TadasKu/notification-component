import {useState} from 'react'
import NavigationBar from "./components/NavigationBar"
function App() {
  const defaultList = [
    {
      id:1,
      time:'12.08.21 - 15:49',
      summary:"testsssssssss",
      seen:0
    },
    {
      id:2,
      time:'12.08.21 - 15:50',
      summary:"test1",
      seen:0
    },
  ]
  const [Notifications, setNotifications] = useState(defaultList)
  const clearAll = () =>{
    setNotifications([])
    console.log(Notifications)
  }
  const makeAllSeen= () =>{
    if (Notifications!==null) {
      console.log(Notifications);
      setNotifications(Notifications.map(notification => notification.seen === 0 ? {...notification, seen:1} : notification))
    }
  }
  const deleteNotification = (id) =>{
    console.log(id);
    setNotifications(Notifications.filter(notification => notification.id !==id)) 
    setTimeout(function(){console.log(Notifications); }, 3000);
    
  }
  return (
    <div className="App">
       <NavigationBar Notifications={Notifications} onDelete={deleteNotification} onClearAll={clearAll}  onSeenAll={makeAllSeen}/>
    </div>
  );
}

export default App;
