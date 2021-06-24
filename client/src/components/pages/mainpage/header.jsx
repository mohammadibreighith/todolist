import React from 'react';
import styled from 'styled-components';
import colors from '../../../styles/colors';
import { PlusSquareOutlined } from '@ant-design/icons';

const Wrapper = styled.div`
  margin: 2rem;
  padding: 0;
  display: flex;
  justify-content: space-between;
`;
const TaskHeaderWrapper = styled.div`
  padding: 0.625rem 1.25rem;
  font-size: 2.5rem;
  letter-spacing: 0.2rem;
  font-weight: bold;
  color: ${colors.darkGray};
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  > span {
    color: ${colors.pink};
  }
`;
const AddNewTask = styled.div`
  background-color: ${colors.purple};
  padding: 1rem 1rem;
  font-size: 1.5rem;
  height: fit-content;
  cursor: pointer;
  color: ${colors.white};
  box-shadow: 0 0 5px -1px rgba(0, 0, 0, 0.2);
  font-family: 'Times New Roman', Times, serif;
  border-style: outset;
  border-color: ${colors.purple};
  border-radius: 7px;
  &:active {
    border-style: none;
  }
`;
const AddTaskIcon = styled(PlusSquareOutlined)`
  font-size: 1.5rem;
  color: ${colors.white};
`;
const Header = props => {
  return (
    <Wrapper>
      <TaskHeaderWrapper>
        You've got <span>{props.tasksCount} Tasks</span>
      </TaskHeaderWrapper>
      <AddNewTask onClick={props.showInput}>
        <AddTaskIcon /> Add New
      </AddNewTask>
    </Wrapper>
  );
};

export default Header;
