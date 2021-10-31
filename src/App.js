import "./App.css";
import { Switch, Route } from "react-router-dom";
import UserDashboard from "./pages/UserDashboard";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import RegisterPage from "./pages/AuthPages/RegisterPage";
import LogInPage from "./pages/AuthPages/LoginPage";
import Dashboard from "./pages/Dashboard";

import UserListPage from "./pages/UserListPage";
import AccountListPage from "./pages/AccountListPage";
import AccountDetails from "./pages/AccountDetails";
import personalAccount from "./pages/PersonalAccount";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LogInPage} />
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/accountdetails/:id" component={AccountDetails} />
        <Route exact path="/userList" component={UserListPage} />
        <Route exact path="/accountList" component={AccountListPage} />
        <Route exact path="/personalAccount/:id" component={personalAccount} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/user" component={UserDashboard} />
        <Route exact path="/addUser" component={AddUser} />
        <Route exact path="/editUser/:id" component={EditUser} />
      </Switch>
    </div>
  );
}

export default App;
