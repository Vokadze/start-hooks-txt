import React, { useState } from "react";
import ChildCallback from "./example-use-callback-requets-callback";

const mockParam1 = { id: 1, param: 2 };
const mockParam2 = { id: 2, param: 3 };

// Родительский компонент, который будет передавать props в дочерний компонент
const ExampleUserCallbackUseEffectDeps = () => {
    const [childProps, setChildProps] = useState(mockParam1);
    const handleSwitchChildProps = () => {
        if (childProps === mockParam1) {
            setChildProps(mockParam2);
        } else {
            setChildProps(mockParam1);
        }
    };

    return (
        <div>
            <button onClick={handleSwitchChildProps}>Обновить</button>
            <hr />
            <ChildCallback {...childProps} />
        </div>
    );
};

export default ExampleUserCallbackUseEffectDeps;
