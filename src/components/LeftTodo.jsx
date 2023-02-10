import React from 'react';
import styled from 'styled-components';

const LeftTodo = () => {
  return (
    <StyledLeftTodo
      style={{
        color: '#45cb9d',
        fontWeight: 700,
        fontSize: '16px',
      }}
    >
      할 일 N개 남음
    </StyledLeftTodo>
  );
};

const StyledLeftTodo = styled.div`
  color: rgb(69, 203, 157);
  font-weight: 700;
  font-size: 16px;
  border-bottom: 1px solid #e8e8e8;
  padding: 20px 28px;
`;
export default LeftTodo;
