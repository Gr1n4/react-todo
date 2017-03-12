"use strict";

import React from 'react';

import TaskItem from '../containers/task-item';

const TaskList = ({tasks, actions}) => {
  console.log('tasks', tasks);
  console.log('actions', actions);
  return (
    <div className="row">
      <div className="task-list col-md-12">
        {
          tasks.map((item, index) => {
            return (
              <TaskItem
                key={index}
                task={item}
                {...actions}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default TaskList;