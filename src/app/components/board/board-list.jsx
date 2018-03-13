"use strict";

import React from 'react';

import BoardItem from './board-item';

const BoardList = ({boards, actions}) => {
  return (
    <div className="row">
      <div className="board-list col-md-12">
        {
          boards.map((item, key) => {
            return (
              <BoardItem
                key={key}
                board={item}
                {...actions}
              />
            );
          })
        }
      </div>
    </div>
  );
}

export default BoardList;