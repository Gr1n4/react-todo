"use strict";

import React from 'react';

const TaskInput = ({addTask}) => {
  let taskInput;

  return (
  <div className="row">
    <div className="col-md-6">
      <form className="form-group" onSubmit={(e) => addTask(taskInput, e)}>
        <label htmlFor="">New Task</label>
        <div className="input-group">
          <input type="text" className="form-control" ref={(e) => taskInput = e}/>
          <span className="input-group-btn">
          <button className="btn btn-default" type="submit">Add</button>
        </span>
        </div>
      </form>
    </div>
  </div>
  );
}

export default TaskInput;
