import React from "react";
import {
    ExampleFileInput,
    ExampleFocusInput
} from "../components/example-ref-file";
import ExampleRefUsePrev from "../components/example-ref-use-prev";
import ExampleRefRerender from "../components/example-ref-rerender";

const ExampleRefPage = () => {
    return (
        <>
            <h1>useRef()</h1>
            <ExampleFileInput />
            <hr />
            <ExampleFocusInput />
            <hr />
            <ExampleRefUsePrev />
            <hr />
            <ExampleRefRerender />
        </>
    );
};

export default ExampleRefPage;
