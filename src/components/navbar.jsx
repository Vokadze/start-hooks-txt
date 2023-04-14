import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../router";

export const Navbar = () => {
    return (
        <div>
            {routes.map(({ path, title }) => (
                <p key={path}>
                    <Link to={path}>{title}</Link>
                </p>
            ))}
        </div>
    );
};
