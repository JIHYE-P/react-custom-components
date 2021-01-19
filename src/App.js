import logo from './logo.svg';
import './App.css';
import RippleButton from './components/RippleButton';

function App() {
  return <main>
    <RippleButton size="sm" color="#d50000">Small Button</RippleButton>
    <RippleButton>Default Button</RippleButton>
    <RippleButton size="lg" color="#00796b">Large Button</RippleButton>
  </main>
}

export default App;
