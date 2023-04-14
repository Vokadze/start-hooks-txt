import React, { useMemo, useState } from "react";

function myLoop(n) {
    console.time("Выполнялось: ");
    let i = 0;
    do {
        i++;
    } while (i !== n);
    console.timeEnd("Выполнялось: ");
    return i;
}

const ExampleUseMemoFeb = () => {
    // В JS большие числа для удобства можно разделять с помощью "_"
    const [value, setValue] = useState(1_000_000_000);
    const [anotherState, setAnotherState] = useState(1);

    const computedResult = useMemo(() => {
        return myLoop(value);
    }, [value]);

    return (
        <div>
            <div>
                Вычисленный результат: <b>{computedResult}</b>
                <p>
                    value: <b>{value}</b>
                </p>
            </div>
            <div>
                <button onClick={() => setValue((v) => v + 1000)}>
                    Increment
                </button>
                <button onClick={() => setValue((v) => v - 1000)}>
                    Decrement
                </button>
            </div>
            <hr />
            <div>
                {anotherState}
                <p>
                    <button onClick={() => setAnotherState((p) => p + 1)}>
                        Обновить
                    </button>
                </p>
            </div>
            <hr />
        </div>
    );
};

export default ExampleUseMemoFeb;
