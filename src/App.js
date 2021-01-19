import logo from './logo.svg';
import './App.css';
import RippleButton from './components/RippleButton';
import Form from './components/Form';

function App() {
  return <main>
    <h3>1. Ripple Button</h3>
    <RippleButton size="sm" color="#d50000">Small Button</RippleButton>
    <RippleButton>Default Button</RippleButton>
    <RippleButton size="lg" color="#00796b">Large Button</RippleButton>
    <hr />
    <h3>2. Valid Form</h3>
    <Form />
  </main>
}

export default App;
