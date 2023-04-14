import React from "react";
import ParentChild from "../components/example-react-memo-serializw";

const ExampleReactMemo = () => {
    return (
        <>
            <h1>React.memo()</h1>
            <h2>Потомок родитель</h2>
            <ParentChild />
        </>
    );
};

export default ExampleReactMemo;
