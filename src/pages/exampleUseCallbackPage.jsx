import React from "react";
import ExampleUserCallbackUseEffectDeps from "../components/example-use-callback-requets";
import Users from "../components/users";

const ExampleUseCallbackPage = () => {
    return (
        <>
            <h1>useCallback()</h1>
            <ExampleUserCallbackUseEffectDeps />
            <Users />
        </>
    );
};

export default ExampleUseCallbackPage;
