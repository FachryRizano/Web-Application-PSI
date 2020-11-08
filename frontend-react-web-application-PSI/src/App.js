import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';
import { BrowserRouter, Route } from "react-router-dom";

// App components
import Header from './components/Header';
import Login from './components/Login';
import Dashboard from'./components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path="/" render={ () => <Login /> } />
        <Route path="/dashboard" render={ () => <Dashboard user="Feldy Tanudjaja"/> } />
      </div>
    </BrowserRouter>
  );
}

export default App;
