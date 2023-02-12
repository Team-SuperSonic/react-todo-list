import React from "react";
import styled from "styled-components";
import { RiDeleteBin6Line } from "react-icons/ri";

const TodoItem = ({ todo, onRemoveTodo, idx }) => {
  return (
    <StyledTodoItem>
      {todo}
      <span>
        <button onClick={() => onRemoveTodo(idx)}>
          <RiDeleteBin6Line />
        </button>
      </span>
    </StyledTodoItem>
  );
};

export default TodoItem;

const StyledTodoItem = styled.div`
  color: #333;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  & > span > button {
    color: #f55757;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
  }
`;
