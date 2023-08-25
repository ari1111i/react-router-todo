import React, { useState } from "react";
import Modal from "./Modal";
import { styled } from 'styled-components'


function Task({ task, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleModalClose = () => {
    setEditing(false);
  };

  const handleUpdateClick = (newTitle, newDate) => {
    onUpdate(task.id, newTitle, newDate);
    setEditing(false);
  };

  const handleDeleteClick = () => {
    onDelete(task.id);
  
  };

  return (
    <Div>
      <DivTitle>{task.title}</DivTitle>
      <DivDate>{task.date}</DivDate>
      <DivBtn>
      <Btn onClick={() => handleEditClick(task)}>Edit</Btn>
      <Btn2 onClick={handleDeleteClick}>Delete</Btn2>
      </DivBtn>
      {editing && (
        <Modal
          task={task}
          onClose={handleModalClose}
          onUpdate={handleUpdateClick}
          onDelete={handleDeleteClick}
        />
      )}
    </Div>
  );
}
const Div = styled('div')`
  background-color: #ffffff;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const DivTitle = styled('div')`
  font-weight: bold;
`
const DivDate = styled('div')`
  color: #666;
`
const DivBtn = styled('div')`
  display: flex;
  gap: 10px;
`
const Btn = styled('button')`
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #ffc107;
  color: #fff;
  margin-left: 20px;
&:hover{
  background-color: #d6aa26;
}
`
const Btn2 = styled('button')`
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #dc3545;
  color: #fff;
&:hover{
  background-color: #951f2b;
}
`

export default Task;
