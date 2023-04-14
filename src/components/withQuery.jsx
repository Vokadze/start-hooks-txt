import React, { useEffect, useState } from "react";
import { fakeApiGetUser } from "../api/fake-api-users";

// Наш Higher-Order Component
export const withQuery = (Component) => {
    return ({ userGuid }) => {
        const [user, setUser] = useState(null);
        const [error, setError] = useState(null);

        useEffect(() => {
            fakeApiGetUser(userGuid)
                .then((r) => {
                    setUser(r);
                })
                .catch((e) => setError(e));
        }, [userGuid]);

        if (error) return <div>{error}</div>;

        return user ? <Component {...user} /> : <div>Загрузка...</div>;
    };
};
