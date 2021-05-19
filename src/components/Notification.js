import "./Notification.css"
import { ReactComponent as X } from '../Svgs/X.svg';
import { ReactComponent as ArrowNotSeen } from '../Svgs/arrow-notseen.svg';
import { ReactComponent as ArrowSeen } from '../Svgs/arrow-seen.svg';
const Notification = ({info, onDelete}) => {

    return (
        <div className='Notification'>
          <label>{info.time}</label><br/> 
          <div className='grid-container'>
          <div className="summary">
            <span className={`${info.seen===0 ? 'not-seen' : ''}`}  >{info.summary}</span>
          </div> 
          <div className='arrow-btn'>{info.seen ===0 && <ArrowNotSeen style={{cursor:'pointer'}}/>} {info.seen ===1 && <ArrowSeen style={{cursor:'pointer'}}/>}
          </div>
          <div className='delete-btn'><X onClick={ () => onDelete(info.id)} style={{cursor:'pointer'}}/></div>
          </div>
        </div>
    )
}

export default Notification
