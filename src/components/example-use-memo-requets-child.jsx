import React, { useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
// import { myFakeApi } from "./example-use-memo-requets-api";

const myFakeApi = ({ id, param }) => {
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
const ChildMemo = ({ id, param }) => {
    const [values, setValues] = useState(null);

    // Мемоизируем параметр запроса
    const requestParams = useMemo(() => {
        return {
            id,
            param
        };
    }, [id, param]);

    // Вызываем когда обновяться параметры
    useEffect(() => {
        console.log("Request");
        myFakeApi(requestParams).then((r) => setValues(r));
    }, [requestParams]);

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

ChildMemo.propTypes = {
    id: PropTypes.number,
    param: PropTypes.number
};

export default ChildMemo;
