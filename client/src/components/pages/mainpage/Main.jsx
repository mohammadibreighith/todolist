import React, { useLayoutEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import colors from '../../../styles/colors';
import Task from './task';
import * as service from '../../../utility/apiUtil';
import ReactLoading from 'react-loading';
import Header from './header';
import TodoListImg from '../../../drawable/43029.jpg'; // Tell webpack this JS file uses this image

const Wrapper = styled.div`
  margin: 4rem;
  display: flex;
`;
const AddTaskInput = styled.input`
  width: 100%;
  outline: 0;
  border-width: 0 0 2px;
  background-color: ${colors.white};
  font-size: 1.5rem;
  color: ${colors.darkGray};
  &::placeholder {
    color: ${colors.darkGray};
    opacity: 0.5;
  }
  animation-name: input;
  animation-duration: 0.3s;
  @keyframes input {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }
`;
const Loading = styled(ReactLoading)`
  margin: auto;
`;
const transform = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const TodoImg = styled.div`
  display: inline-block;
  width: 100%;
  bottom: 15%;
  text-align: center;
  animation: ${transform} 2s linear;
  > img {
    max-width: 45%;
  }
`;

const Main = () => {
  const [addNew, setAddNew] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([{}]);
  const [loading, setLoading] = useState(true);

  const deleteTask = async id => {
    try {
      await service.deleteTask(id);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  const updateTaskStatus = async id => {
    try {
      await service.updateTaskStatus(id);
      const taskIndex = tasks.findIndex(element => element.id === id);
      let newTasks = [...tasks];
      newTasks[taskIndex].achieved = true;
      setTasks(newTasks);
      console.log(tasks);
    } catch (error) {
      console.log(error);
    }
  };
  const _handleKeyDown = async event => {
    if (event.key === 'Enter') {
      if (newTask.length !== 0) {
        try {
          const { data } = await service.createTask(newTask);
          setTasks(tasks.concat(data));
          setNewTask('');
        } catch (error) {
          console.log(error);
        }
      } else console.log('no');
    }
  };
  async function fetchData() {
    const { data } = await service.getTasks();
    setTasks(data);
    setLoading(false);
  }
  useLayoutEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loading color={'#629d63'} height={'10%'} width={'10%'} />;
  }
  return (
    <>
      <Header showInput={() => setAddNew(true)} tasksCount={tasks.length} />
      <Wrapper>
        {addNew && (
          <AddTaskInput
            type="text"
            value={newTask}
            autoFocus
            onChange={event => setNewTask(event.target.value)}
            placeholder="What do you want to do today ? "
            onKeyDown={_handleKeyDown}
          />
        )}
      </Wrapper>
      {tasks.map(t => (
        <Task key={t.id} task={t} deleteTask={deleteTask} updateTaskStatus={updateTaskStatus} />
      ))}
      {tasks.length === 0 && (
        <TodoImg>
          <img src={TodoListImg} alt="TODOLIST" />
        </TodoImg>
      )}
    </>
  );
};

export default Main;
