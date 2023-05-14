const AddTask = (props) => {
    const doAddTask=()=>{
        const name = document.getElementById("task_desc").value;
        console.log(name);
        props.addTask(name);
    }
    return(
        <div>
            <h2 className="add-task-main">Add Task</h2>
            <div className="form-control">
                <label htmlFor="task_desc" className="label-text">Add your Task  </label>
                <input type="text" name="task_desc" id="task_desc" className="input-field" />
            </div>
            <div className="form-control">
                <button className="add-task-button" onClick={doAddTask}>Add Task</button>
            </div>
        </div>
    );
}

export default AddTask;