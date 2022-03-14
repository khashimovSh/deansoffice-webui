import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import  LoginPage from './pages/loginpage/LoginPage';
import { Dashboard } from './pages/dashboard/dashboard';
import {Student} from "./pages/student/Student";


function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage}/>
          <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/student" component={Student}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
