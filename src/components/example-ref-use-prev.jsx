import React, { useEffect, useRef, useState } from "react";

const ExampleRefUsePrev = () => {
    // Состояние
    const [count, setCount] = useState(0);
    const [, setToggle] = useState(false);
    // Ref, начальное значение равно состоянию
    const prevRef = useRef(count);

    // При изменении count меняем значение в Ref
    useEffect(() => {
        prevRef.current = count;
    }, [count]);

    // Получаем предыдущее значение
    const prevCount = prevRef.current;

    return (
        <div>
            <h1>
                Текущее значение: {count}, Предыдущее: {prevCount}
            </h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setToggle((p) => !p)}>Рендер</button>
        </div>
    );
};

export default ExampleRefUsePrev;
