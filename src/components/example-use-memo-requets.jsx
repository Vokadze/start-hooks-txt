import React, { useState } from "react";
// import PropTypes from "prop-types";
import ChildMemo from "../components/example-use-memo-requets-child";

// Имитация API
// const myFakeApiMemo = ({ id, param }) => {
//    return new Promise((resolve) => {
//        setTimeout(() => {
//            resolve({
//                id,
//                param,
//                items: [1, 2, 3, 4, 5]
//            });
//        }, 1000);
//    });
// };

// Параметры, которые будем менять
const mockParam1 = { id: 1, param: 2 };
const mockParam2 = { id: 2, param: 3 };

// Родительский компонент, который будет передавать props в дочерний компонент
const ExampleUseMemoUseEffectDeps = () => {
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
            <ChildMemo {...childProps} />
        </div>
    );
};

export default ExampleUseMemoUseEffectDeps;

// const ChildMemo = ({ id, param }) => {
//    const [values, setValues] = useState(null);

//    // Мемоизируем параметр запроса
//    const requestParams = useMemo(() => {
//        return {
//            id,
//            param
//        };
//    }, [id, param]);

//    // Вызываем когда обновяться параметры
//    useEffect(() => {
//        console.log("Request");
//        myFakeApiMemo(requestParams).then((r) => setValues(r));
//    }, [requestParams]);

//    return (
//        <div>
//            {values ? (
//                <pre>{JSON.stringify(values, null, 2)}</pre>
//            ) : (
//                <div>Загрузка...</div>
//            )}
//        </div>
//    );
// };

// ChildMemo.propTypes = {
//    id: PropTypes.string,
//    param: PropTypes.string
//    // myFakeApiMemo: PropTypes.func
// };
