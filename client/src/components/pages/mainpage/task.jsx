import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import colors from '../../../styles/colors';
import { CheckCircleFilled, MinusCircleFilled, InfoCircleFilled } from '@ant-design/icons';

const transform = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const Field = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  background-color: ${colors.white};
  padding: 20px;
  margin: 15px 50px 15px 50px;
  border: 0.3px solid #e0e0e0;
  border-radius: 15px;
  justify-content: space-between;
  animation: ${transform} 0.4s forwards;
`;
const Description = styled.div`
  font-size: 1.5rem;
  font-family: Montserrat;
  line-height: 17px;
  color: ${colors.darkGray};
  &.achieved {
    text-decoration: line-through;
    color: ${colors.mediumGray};
  }
`;

const DoneIcon = styled(CheckCircleFilled)`
  color: ${colors.green};
  font-size: 1.5rem;
  border: none;
  :focus {
    outline: 0;
  }
`;
const DeleteIcon = styled(MinusCircleFilled)`
  color: ${colors.pink};
  font-size: 1.5rem;
  margin-left: 50px;
  :focus {
    outline: 0;
  }
`;
const InfoIcon = styled(InfoCircleFilled)`
  margin-right: 10px;
  color: ${colors.pink};
  font-size: 0.9rem;
`;
const PendingStatus = styled.div`
  background-color: rgba(242, 153, 74, 0.2);
  padding: 0.1rem 1.3rem;
  font-size: 0.9rem;
  color: ${colors.secondoryOrange};
  border-radius: 25px;
`;
const AchievedStatus = styled.div`
  background-color: rgba(86, 204, 242, 0.2);
  padding: 0.1rem 1.3rem;
  font-size: 0.9rem;
  color: ${colors.blue};
  border-radius: 25px;
`;
const StatusBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;

const Task = ({ deleteTask, task, updateTaskStatus }) => {
  const [isAchieved, setIsAchieved] = useState(task.achieved);
  const updateTask = () => {
    updateTaskStatus(task.id);
    setIsAchieved(true);
  };
  return (
    <Field>
      <Description className={task.achieved ? 'achieved' : ''}>
        <InfoIcon className="icon" />
        {task.description}
      </Description>
      <StatusBar>
        {isAchieved ? (
          <AchievedStatus>Well Done</AchievedStatus>
        ) : (
          <PendingStatus>Pending</PendingStatus>
        )}
        <div>
          {!isAchieved && <DoneIcon onClick={() => updateTask()} />}
          <DeleteIcon onClick={() => deleteTask(task.id)} />
        </div>
      </StatusBar>
    </Field>
  );
};

export default Task;
