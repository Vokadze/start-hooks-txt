import React, { useState, useEffect } from "react";
import { fakeApiGetUser, fakeApiGetUserIds } from "../api/fake-api-users";

const Users = () => {
    const [userGUIDs, setUserGUIDs] = useState(null);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fakeApiGetUserIds().then((userGUIDs) => setUserGUIDs(userGUIDs));
    });

    const handleGetUser = () => {
        const index = users.length;
        const guid = userGUIDs.find((g, i) => i === index);

        fakeApiGetUser(guid).then((user) =>
            setUsers((prevUsers) => {
                return [...prevUsers, user];
            })
        );
    };

    return (
        <div>
            <h2>Пользователи</h2>
            {userGUIDs ? (
                <button className="btn btn-primary" onClick={handleGetUser}>
                    Получить пользователя
                </button>
            ) : (
                <div>Загрузка...</div>
            )}

            {users.length > 0 && (
                <div className="mt-3">
                    <h3>Пользовательские данные</h3>
                    {users.map(({ guid, name, email }) => (
                        <div key={guid}>
                            <h4>{name}</h4>
                            <p>
                                <b>Email: </b>
                                {email}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Users;
