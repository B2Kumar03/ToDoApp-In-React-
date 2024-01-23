import React, { useState } from "react";
import TaskItem from './TaskItem.jsx'
import "./App.css";

// import TaskItem from "./components/TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);          //it is declared for manage the all add task
  const [formState, setFormState] = useState({     //it declare for manage form activity
    task: "", // string
    completed: false, // boolean
    taskAssignedTo: "", // string
  });

  function handleChange2(is,index){ //handleChange2 method is basically defined for delete and update the status using button 

    if(is=="status"){             //the handleChange2 is recived two value when `is` variable value is status means callign this function for update the status and when the vlue of `is` variable !status means for delecting is calling the method
       let newTask= tasks.map((ele,index1)=>{
          if(index1==index){
            if(ele.completed==false)
             ele.completed=true
            else{
              ele.completed=false
            }
             return ele
          }
          else{
            return ele
          }
        })
        setTasks(newTask)       //it basically update the new value of completed which is boolean value 
    }
    else{
      let newTask=tasks.filter((ele,index1)=>{ //it filter the value 
        return index1!=index   // for example i want to delete value index 1 ,the filter method not add the index1 in newTask array
      })

      setTasks(newTask)  //it adding the new value of tasks
    }
  }

  function handleChange(event) {    //it method handle the form `change event`
    // Implement logic to handle form changes
    let keyName=event.target.name;
    let value=event.target.name=='completed'?
    event.target.checked : event.target.value;
    setFormState({...formState, [keyName]: value})

  }



  function handleSubmit(event) {
    event.preventDefault();
    // Implement logic to handle form submission
    setTasks(
      [...tasks,formState]
    )
    console.log(tasks);
  }


  return (
    <div style={{border:"1px solid white", padding:"30px",backgroundColor:"#242430"}}>
      <div>
        <form onSubmit={handleSubmit}>
          <input name="task" type="text" placeholder="Add Task"  value={formState.task} onChange={handleChange}/>
          <label>
            Completed:
            <input name="completed" type="checkbox" checked={formState.completed} onChange={handleChange}/>
          </label>
          <select name="taskAssignedTo" value={formState.taskAssignedTo} onChange={handleChange}>
            <option value="">Select Assignee</option>
            <option value="Bruce">Bruce</option>
            <option value="Barry">Barry</option>
            <option value="Clark">Clark</option>
            <option value="Oliver">Oliver</option>
            <option value="Jina">Jina</option>
          </select>
          <button type="submit">Add Task</button>
        </form>



      </div>
      <hr />
      <h1>Task Item</h1>
      

      <div className="heading" style={{display:tasks.length==0 ?"none":"flex"}}>
        <div>Task</div>
        <div>AssignTo</div> 
        <div>Status</div>
        <div>Close</div>
      </div>


      {tasks.map((item, index) => (
        <TaskItem key={index} item={item} index={index} handleDelete={handleChange2}/>// it render the value of tasks on the UI
        ))}
     
    </div>
  );
}

export default App;