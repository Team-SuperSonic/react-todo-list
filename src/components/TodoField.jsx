import React from 'react';
import styled from 'styled-components';

const TodoField = () => {
  return (
    <StyledInputBlock>
      <input type="text" />
    </StyledInputBlock>
  );
};

export default TodoField;

const StyledInputBlock = styled.div`
  background: #f5fafd;
  height: 140px;
  padding: 26px 24px 0px;
  position: absolute;
  width: 100%;
  bottom: 0;
  border-radius: 0px 0px 14px 14px;

  & > input {
    width: 100%;
    padding: 8px 8px;
    font-size: 16px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    outline: none;
  }
`;
