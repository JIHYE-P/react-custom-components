import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../components/Layout';

const Contents = styled.div`
  padding: 30px 60px;
  text-align: center;
  border-radius: 15px;
  box-sizing: border-box;
  user-select: none;
  display: flex;
  flex-direction: column;
  /* background: #edf2f0;
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12); */
  a {
    margin: 10px 0;
    font-size: 18px;
    &:hover {
      color: red;
    }
  }
`;
const Main = () => {
  return <Layout>
    <h1 style={{marginBottom: 30}}>React Custom Components</h1>
    <Contents>
      <Link to="/form">1. Form Components</Link>
      <Link to="/ripple">2. Ripple Button Components</Link>
    </Contents>
  </Layout>
}

export default Main;