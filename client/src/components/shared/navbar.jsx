import React from 'react';
import styled from 'styled-components';
import Colors from '../../styles/colors';

const Wrapper = styled.div`
  width: 100%;
  margin: 0rem;
  padding: 0;
  background-color: ${Colors.green};
`;
const Header = styled.div`
  padding: 0.625rem 1.25rem;
  font-size: 2rem;
  letter-spacing: 0.5rem;
  text-align: center;
  font-weight: bold;
  color: ${Colors.white};
`;
const NavBar = () => {
  return (
    <Wrapper>
      <Header>TO-DO-LIST</Header>
    </Wrapper>
  );
};

export default NavBar;
