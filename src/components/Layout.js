import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 980px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Layout = ({children, ...props}) => {
  return <Section {...props}>
    {children} 
  </Section>
}

export default Layout;