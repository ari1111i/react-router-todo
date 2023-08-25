import React, { useState } from 'react';
import { styled } from 'styled-components'

function Modal({ task, onClose, onUpdate, onDelete }) {
  const [newTitle, setNewTitle] = useState(task.title);
  const [newDate, setNewDate] = useState(task.date);

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleDateChange = (e) => {
    setNewDate(e.target.value);
  };

  const handleUpdateClick = () => {
    onUpdate(newTitle, newDate);
    onClose();
  };

  const handleDeleteClick = () => {
    onDelete();
    onClose();
  };

  return (
    <Dives>
      <Input type="text" placeholder='Переименуйте запись' value={newTitle} onChange={handleTitleChange} />
      <Input type="date" value={newDate} onChange={handleDateChange} />
      <Button onClick={handleUpdateClick}>Save</Button>
      <Btn2 onClick={handleDeleteClick}>Delete</Btn2>
      <Btn3 onClick={onClose}>Cancel</Btn3>
    </Dives>
  );
}
const Input = styled('input')`
  flex: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-left: 10px;
`
const Button = styled('button')`
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 30px;
  margin-top: 10px;
&:hover{
  background-color: #0056b3;
}
`
const Btn2 = styled('button')`
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #dc3545;
  color: #fff;
  margin-left: 20px;
&:hover{
  background-color: #951f2b;
}
`
const Btn3 = styled('button')`
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #40dc35;
  color: #fff;
  margin-left: 20px;
&:hover{
  background-color: #2c9625;
}
`
const Dives = styled('div')`
  padding-left: 40px;
  margin-left: 120px;
`

export default Modal;
