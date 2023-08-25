import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Task from './Task';
import { styled } from 'styled-components'


function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [searchParams] = useSearchParams();
  const sortParam = searchParams.get('sort');
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {

  }, [sortParam]);

  const completedTasks = tasks.filter(task => task.completed);
  const remainingTasks = tasks.filter(task => !task.completed);

  const handleTaskUpdate = (taskId, newTitle, newDate) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, title: newTitle, date: newDate } : task
    );
    setTasks(updatedTasks);
  };

  const handleTaskDelete = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {

    const newTask = {
      id: tasks.length + 1,
      title: inputValue,
      date: '2023-08-24', 
      completed: false,
    };


    setTasks([...tasks, newTask]);
    setInputValue('');
  };

  return (
    <Div>
      <P>
      Todo-App
      </P>
      <DivSummary>
        <DivSummaryItem>Total number of tasks: {tasks.length}</DivSummaryItem>
        <DivSummaryItem>Completed tasks: {completedTasks.length}</DivSummaryItem>
        <DivSummaryItem>Tasks left: {remainingTasks.length}</DivSummaryItem>
      </DivSummary>
      <DivTask>
        <InputTask
          type="text"
          placeholder="Введите новую задачу"
          value={inputValue}
          onChange={handleInput}
        />
        <Button onClick={handleAddTask}>Add task</Button>
      </DivTask>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onUpdate={handleTaskUpdate}
          onDelete={handleTaskDelete}
        />
      ))}
    </Div>
  );
}
const Div = styled('div')`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f8f8f8;
  font-family: Arial, sans-serif;
  
`
const DivSummary = styled('div')`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`
const DivSummaryItem = styled('div')`
  font-weight: bold;
`
const DivTask = styled('div')`
  display: flex;
  gap: 10px;
  align-items: center;
`
const InputTask = styled('input')`
  flex: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`
const Button = styled('button')`
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
&:hover{
  background-color: #0056b3;
}
`
const P = styled('p')`
  justify-content: center;
  display: flex;
  align-items: center;
  font: bold;
  font-family: Arial, sans-serif;
  font-size: 25px;
`

export default TodoList;
