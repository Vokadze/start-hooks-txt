import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

// Имитация API
export const myFakeApi = ({ id, param }) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id,
                param,
                items: [1, 2, 3, 4, 5]
            });
        }, 1000);
    });
};

// Дочерний компонент
const ChildCallback = ({ id, param }) => {
    const [values, setValues] = useState(null);

    const handleRequest = useCallback(() => {
        setValues(null);

        const requestParams = {
            id,
            param
        };

        myFakeApi(requestParams).then((r) => setValues(r));
    }, [id, param]);

    useEffect(() => {
        console.log("Request");
        handleRequest();
    }, [handleRequest]);

    return (
        <div>
            {values ? (
                <pre>{JSON.stringify(values, null, 2)}</pre>
            ) : (
                <div>Загрузка...</div>
            )}
        </div>
    );
};

ChildCallback.propTypes = {
    id: PropTypes.number,
    param: PropTypes.number
};

export default ChildCallback;
