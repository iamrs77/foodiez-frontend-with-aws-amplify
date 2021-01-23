import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import AutheticatedNewRouting from "./navigation/autheticatedNewRouting";
import routes from "./navigation/routes";
import ForgotPassword from "./components/ForgotPassword";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/forgot-password" component={() => <ForgotPassword/>} />
                    <Route path="/register" component={() => <Register/>} />
                    <Route path="/login" component={() => <Login/>} />
                    {routes.map((route, index) => {
                        return <AutheticatedNewRouting key={index} path={route.path} userComponents={route.userComponents} vendorComponents={route.vendorComponents}/>
                    })}
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
