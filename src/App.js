import { Route } from 'react-router-dom';
import Form from './pages/Form';
import Ripple from './pages/Ripple';
import Main from './pages/Main';

function App() {
  return <>
    <Route path="/" exact>
      <Main />
    </Route>
    <Route path="/form">
      <Form />
    </Route>
    <Route path="/ripple">
      <Ripple />
    </Route>
  </>
}

export default App;
