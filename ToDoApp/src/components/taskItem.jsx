
import App from './App.jsx'

function TaskItem(props) {
    let item=props.item;
    
    return <div className="itembox">
      
          <div>{item.task}</div>
          <div>{item.taskAssignedTo}</div>
          <div><button style={{color:item.completed==true?"green":"yellow"}}>{item.completed==true?"Completed":"Pending"}</button></div>
          <div><button onClick={()=>handleDelete(props.index)}><i className="fa-solid fa-trash-can"></i></button></div>
    </div>;
  }
  
export default TaskItem;