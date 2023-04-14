import React from "react";
import UserMeta from "../components/hoc-with-query";
import { withEditUserPhone } from "../components/withEditUserPhone";
import { withQuery } from "../components/withQuery";

const WithQueryUserMeta = withQuery(UserMeta);
const WithQueryEdit = withQuery(withEditUserPhone(UserMeta));

const ExampleHOC = () => {
    return (
        <>
            <h1 className="mb-5">Higher-Order Components</h1>
            <h2>withQuery</h2>
            <WithQueryUserMeta userGuid="F1CD23D2-5330-4219-27AD-D3EEBBCEE1EA" />
            <UserMeta />
            <h2>withQuery & withEditUserPhone</h2>
            <WithQueryEdit userGuid="F1CD23D2-5330-4219-27AD-D3EEBBCEE1EA" />
        </>
    );
};

export default ExampleHOC;
