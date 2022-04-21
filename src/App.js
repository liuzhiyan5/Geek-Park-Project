import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import { AuthRoute } from "@/components/AuthRoute";

import Login from "@/pages/Login";
import GeekLayout from "@/pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/home" />} />
          <AuthRoute path="/home" component={GeekLayout}></AuthRoute>
          <Route path="/login" component={Login}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
