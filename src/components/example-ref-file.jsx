import React, { useRef, useState } from "react";

export const ExampleFileInput = () => {
    const inputRef = useRef(null);
    const [isValueSet, setIsValueSet] = useState(false);

    const handleSend = () => {
        const file = inputRef.current.files;
        console.log(file);
    };

    return (
        <div>
            <h2>Получения доступа к потомку</h2>
            <label htmlFor="file">Выберите файл</label>
            <input
                ref={inputRef}
                type="file"
                onChange={() => setIsValueSet(true)}
            />
            <button onClick={handleSend} disabled={!isValueSet}>
                Отправить файл
            </button>
        </div>
    );
};

export const ExampleFocusInput = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <h2>Действия с DOM-элементом</h2>
            <input ref={inputRef} type="text" />
            <button onClick={handleClick}>Фокус</button>
        </div>
    );
};
