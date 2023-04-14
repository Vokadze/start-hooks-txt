import MainPage from "../pages/mainPage";
import ExampleRefPage from "../pages/exampleRefPage";
import ExampleUseMemoPege from "../pages/exampleUseMemoPage";
import ExampleUseCallbackPage from "../pages/exampleUseCallbackPage";
import ExampleHOC from "../pages/exampleHOC";
import ExampleReactMemo from "../pages/ExampleReactMemo";
import ExampleCloneElement from "../pages/exampleCloneElement";
import ExampleChildren from "../pages/exampleChildren";

export const routes = [
    {
        path: "/",
        exact: true,
        component: MainPage,
        title: "Главная"
    },
    {
        path: "/use-ref",
        component: ExampleRefPage,
        title: "useRef()"
    },
    {
        path: "/use-memo",
        component: ExampleUseMemoPege,
        title: "useMemo()"
    },
    {
        path: "/use-callback",
        component: ExampleUseCallbackPage,
        title: "useCallback()"
    },
    {
        path: "/higher-order-components",
        component: ExampleHOC,
        title: "Higher-Order Components"
    },
    {
        path: "/react-memo",
        component: ExampleReactMemo,
        title: "React.memo()"
    },
    {
        path: "/react-clone-element",
        component: ExampleCloneElement,
        title: "React.cloneElement()"
    },
    {
        path: "/react-children",
        component: ExampleChildren,
        title: "React.Children"
    }
];
