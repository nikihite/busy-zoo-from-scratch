import './App.css';
import Shrek from './Shrek';
import Admin from './Admin';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

export function App() {
  return (
    <Router className="App">
      <Link to="./Admin">Admin</Link>
      <Routes>
        <Route path='/' element={<Shrek/>}>SHREK</Route>
        <Route path='/admin' element={<Admin/>}>ADMIN</Route>
      </Routes>
    </Router>
  );
}

export default App;