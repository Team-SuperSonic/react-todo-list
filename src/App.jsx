import Date from './components/Date';
import LeftTodo from './components/LeftTodo';
import Layout from './components/Layout';
import styled from 'styled-components';
import ActionButton from './components/ActionButton';
import { useState } from 'react';
import TodoField from './components/TodoField';

function App() {
  const [isWriteMode, setIsWriteMode] = useState(false);

  const onWrite = () => {
    setIsWriteMode(!isWriteMode);
  };

  const onCancelWrite = () => {
    setIsWriteMode(!isWriteMode);
  };

  return (
    <StyledWrapper className="App">
      {/* CONTENT */}
      {/* Date */}
      <Layout p="28px 28px 0" m="0 0 24px 0">
        <Date />
      </Layout>
      {/* LEFT_TODO */}
      <LeftTodo />
      {isWriteMode && <TodoField />}
      <ActionButton isWriteMode={isWriteMode} onWrite={onWrite} onCancel={onCancelWrite} />
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
