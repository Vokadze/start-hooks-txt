import React from "react";
import ExampleUseMemoFeb from "../components/example-use-memo-feb";
import ExampleUseMemoUseEffectDeps from "../components/example-use-memo-requets";

const ExampleUseMemoPage = () => {
    return (
        <>
            <h1>useMemo()</h1>
            <ExampleUseMemoFeb />
            <ExampleUseMemoUseEffectDeps />
        </>
    );
};

export default ExampleUseMemoPage;
