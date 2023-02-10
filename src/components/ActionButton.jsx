import React from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import styled from 'styled-components';

const ActionButton = ({ isWriteMode, onWrite, onCancel }) => {
  return (
    <>
      <StyledButton onClick={isWriteMode ? onWrite : onCancel} theme={isWriteMode ? 'cancel' : 'write'}>
        <BsFillPlusCircleFill />
      </StyledButton>
    </>
  );
};

export default ActionButton;

const StyledButton = styled.button`
  line-height: 0.6;
  padding: 0;
  border: none;
  outline: none;
  background: none;
  font-size: 84px;
  color: rgb(69, 203, 157);
  position: absolute;
  bottom: -32px;
  left: 50%;
  transform: ${({ theme }) => (theme === 'write' ? `translateX(-50%)` : `translateX(-50%) rotateZ(45deg)`)};
  background: white;
  border-radius: 84px;
  cursor: pointer;
  color: ${({ theme }) => (theme === 'write' ? `rgb(69, 203, 157)` : `red`)} !important;
`;
