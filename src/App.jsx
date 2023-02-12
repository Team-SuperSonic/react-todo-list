import Date from "./components/Date";
import LeftTodo from "./components/LeftTodo";
import Layout from "./components/Layout";
import styled from "styled-components";
import ActionButton from "./components/ActionButton";
import { useEffect, useState } from "react";
import TodoField from "./components/TodoField";
import TodoItem from "./components/TodoItem";

function App() {
  //* ------------------
  //* State
  //* ------------------
  const [isWriteMode, setIsWriteMode] = useState(false);

  //? 투두 입력 필드
  const [todoField, setTodoField] = useState("");

  //? 투두 아이템 리스트
  const [todos, setTodos] = useState([]);

  // { id: 1, todo: "할일 입니다2" }

  //* ------------------
  //* Handlers
  //* ------------------
  const onWrite = () => {
    setIsWriteMode(!isWriteMode);
  };

  const onCancelWrite = () => {
    setIsWriteMode(!isWriteMode);
  };

  //? 투두 생성
  const onCreateTodo = () => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        todo: todoField,
      },
    ]);

    setTodoField("");
    setIsWriteMode(false);
  };

  //? 투두 삭제
  const onRemoveTodo = (idx) => {
    setTodos(
      todos.filter((_, index) => {
        return index !== idx;
      })
    );
  };

  //* ------------------
  //* Render
  //* ------------------
  return (
    <StyledWrapper className="App">
      <Layout p="28px 28px 0" m="0 0 24px 0">
        <Date />
      </Layout>

      {todos.length > 0 && <LeftTodo todoCount={todos.length} />}

      {/* //!TODO ITEMS */}
      <Layout p="9px 28px 0px">
        <StyledTodoItemList>
          {todos.map((todo, idx) => (
            <li key={todo.id}>
              <TodoItem
                todo={todo.todo}
                onRemoveTodo={onRemoveTodo}
                idx={idx}
              />
            </li>
          ))}
        </StyledTodoItemList>
      </Layout>
      {/* //! BOTTOM */}
      {isWriteMode && (
        <TodoField
          todoField={todoField}
          setTodoField={setTodoField}
          onCreateTodo={onCreateTodo}
        />
      )}
      <ActionButton
        isWriteMode={isWriteMode}
        onWrite={onWrite}
        onCancel={onCancelWrite}
      />
    </StyledWrapper>
  );
}

export default App;

const StyledWrapper = styled.div`
  width: 480px;
  height: 75vh;
  background: white;
  border-radius: 14px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 2px 5px 16px -6px #8f8f8f;
`;

const StyledTodoItemList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  & > li {
    padding: 10px 0px;
  }
`;
