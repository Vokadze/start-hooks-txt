import React, { useEffect, useState, useMemo, useCallback } from "react";
import PropTypes from "prop-types";

const Parent = () => {
    const [count, setCount] = useState(0);

    const handleCount = useCallback(() => {
        setCount((c) => c + 1);
    }, []);

    const user = useMemo(
        () => ({
            name: "Sarah Sullivan",
            phone: "1-976-631-1449",
            email: "fringilla.purus.mauris@protonmail.com",
            address: "2660 Fringilla Av."
        }),
        []
    );
    return (
        <div>
            <h2>Count: {count}</h2>
            <div>
                <Children onIncrement={handleCount} user={user} />
            </div>
        </div>
    );
};

const Children = ({ user, onIncrement }) => {
    useEffect(() => {
        console.log("render");
    });

    return (
        <div>
            {user.name}
            <div>
                <button className="btn btn-primary" onClick={onIncrement}>
                    +
                </button>
            </div>
        </div>
    );
};

Children.propTypes = {
    user: PropTypes.object.isRequired,
    onIncrement: PropTypes.func
};

export default Parent;
