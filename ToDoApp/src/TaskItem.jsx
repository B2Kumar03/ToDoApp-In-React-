
function TaskItem(props) {
    let handleChange2=props.handleDelete
    let item=props.item;
    
    return <div className="itembox">
      
          <div>{item.task}</div>
          <div>{item.taskAssignedTo}</div>
          <div><button onClick={()=>handleChange2("status",props.index)} style={{color:item.completed==true?"green":"yellow"}}>{item.completed==true?"Completed":"Pending"}</button></div>
          <div><button onClick={()=>handleChange2("delete",props.index)} style={{color:"red"}}><i className="fa-solid fa-trash-can"></i></button></div>
    </div>;
  }
  
export default TaskItem;