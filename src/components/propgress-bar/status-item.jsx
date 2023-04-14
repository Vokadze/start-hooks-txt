import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const StatutusItem = ({ children, isDone, onClick, value }) => {
    const styleClassName = `step-progress-item ${
        isDone ? "is-done" : "current"
    }`;
    const handleClick = () => {
        onClick && onClick(value);
    };

    return (
        <div className={styleClassName} onClick={handleClick}>
            <strong>{children}</strong>
        </div>
    );
};

StatutusItem.propTypes = {
    children: PropTypes.string.isRequired,
    isDone: PropTypes.bool,
    onClick: PropTypes.func,
    value: PropTypes.number.isRequired
};

export default StatutusItem;
