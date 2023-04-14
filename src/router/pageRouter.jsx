import React from "react";
import { Route, Switch } from "react-router-dom";
import { routes } from "./index";

const PageRouter = () => {
    return (
        <Switch>
            {routes.map((rout) => (
                <Route key={rout.path} {...rout} />
            ))}
        </Switch>
    );
};

export default PageRouter;
