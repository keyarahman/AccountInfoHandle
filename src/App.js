import "./App.css";
import { Switch, Route } from "react-router-dom";
import UserDashboard from "./pages/UserDashboard";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import RegisterPage from "./pages/AuthPages/RegisterPage";
import LogInPage from "./pages/AuthPages/LoginPage";
import AdminDashboard from "./pages/AdminDashboard";
import Profile from "./pages/Profile";
import UserListPage from "./pages/UserListPage";
import AccountListPage from "./pages/AccountListPage";
import AccountDetails from "./pages/AccountDetails";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LogInPage} />
        <Route exact path="/adminDashboard" component={AdminDashboard} />
        <Route exact path="/accountdetails/:id" component={AccountDetails} />
        <Route exact path="/adminDashboard" component={Profile} />
        <Route exact path="/userList" component={UserListPage} />
        <Route exact path="/accountList" component={AccountListPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/user" component={UserDashboard} />
        <Route exact path="/addUser" component={AddUser} />
        <Route exact path="/editUser/:id" component={EditUser} />
      </Switch>
    </div>
  );
}

export default App;
