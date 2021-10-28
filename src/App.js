import "./App.css";
import { Switch, Route } from "react-router-dom";
import UserDashboard from "./pages/UserDashboard";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={UserDashboard} />
        <Route exact path="/addUser" component={AddUser} />
        <Route exact path="/editUser/:id" component={EditUser} />
      </Switch>
    </div>
  );
}

export default App;
