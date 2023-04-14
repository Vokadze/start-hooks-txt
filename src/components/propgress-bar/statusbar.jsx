import React, { useState } from "react";
import "./style.css";
import StatutusItem from "../propgress-bar/status-item";
import PropTypes from "prop-types";

const Statusbar = ({ children, value, onChange }) => {
    const countChildren = React.Children.count(children);

    if (!countChildren) {
        return <div>Нет элементов</div>;
    }

    return (
        <div>
            <div className="wrapper">
                <ul className="step-progress">
                    {React.Children.map(children, (child) => {
                        if (child.type === StatutusItem) {
                            return React.cloneElement(child, {
                                isDone: child.props.value <= value,
                                onClick: onChange
                            });
                        }
                        return null;
                    })}
                </ul>
            </div>
        </div>
    );
};

Statusbar.propTypes = {
    children: PropTypes.array.isRequired,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func
};

const SomeComponent = () => {
    const [value, setValue] = useState(1);

    const handleChangeValue = (nextValue) => {
        setValue(nextValue);
    };

    return (
        <Statusbar value={value} onChange={handleChangeValue}>
            <StatutusItem value={1}>Шаг 1</StatutusItem>
            <StatutusItem value={2}>Шаг 2</StatutusItem>
            <StatutusItem value={3}>Шаг 3</StatutusItem>
            <StatutusItem value={4}>Шаг 4</StatutusItem>
            <StatutusItem value={5}>Шаг 5</StatutusItem>
        </Statusbar>
    );
};

export default SomeComponent;
