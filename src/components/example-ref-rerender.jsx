import React, { useEffect, useRef, useState } from "react";

const ExampleRefRerender = () => {
    const renderCount = useRef(0);
    const [state, toggleState] = useState(true);

    // Изменение состояния для вызова рендера
    const toggle = () => {
        toggleState(!state);
    };

    useEffect(() => {
        // При каждом рендере будет вызвана
        // функция и счетчик будет увеличен
        renderCount.current += 1;
    });

    return (
        <div>
            <h2>Количество рендеров</h2>
            <p>Было рендеров: {renderCount.current}</p>
            <p>
                <button onClick={toggle}>Update state</button>
            </p>
        </div>
    );
};

export default ExampleRefRerender;
