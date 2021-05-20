import {useReducer} from 'react'
import NavigationBar from "./components/NavigationBar"
function App() {
  const defaultList = [
    {
      id:1,
      time:'12.08.21 - 15:49',
      summary:"test",
      seen:0
    },
    {
      id:2,
      time:'12.08.21 - 15:50',
      summary:"test1",
      seen:0
    },
  ]
  const [Notifications, setNotifications] = useReducer(notificatonReducer, defaultList);
  function notificatonReducer(state, product) {
    switch(product.type) {
      case 'makeAllSeen':
        return state.map(notification => notification.seen === 0 ? {...notification, seen:1}: {...notification, seen:1});
      case 'deleteByID':
        return state.filter(notification => notification.id !==product.id);
      case 'clearAll':
        return [];
      default:
        return state;
  }}
  const clearAll = () =>{
    setNotifications({type:"clearAll"})
  }
  const makeAllSeen= () =>{
    if (Notifications!==null) {
      setNotifications({type:"makeAllSeen"})
    }
  }
  const deleteNotification = (id) =>{
    setNotifications({id, type:"deleteByID"})
  }
  return (
    <div className="App">
       <NavigationBar Notifications={Notifications} onDelete={deleteNotification} onClearAll={clearAll}  onSeenAll={makeAllSeen}/>
    </div>
  );
}

export default App;
