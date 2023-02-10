import React from 'react';
import styled from 'styled-components';

const Layout = ({ children, p, m, style }) => {
  return (
    <StyledLayout style={style || {}} p={p} m={m}>
      {children}
    </StyledLayout>
  );
};

export default Layout;

const StyledLayout = styled.div`
  ${({ p }) => p && `padding: ${p};`}
  ${({ m }) => m && `margin: ${m};`}
`;
