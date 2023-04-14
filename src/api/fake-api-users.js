export const userStorage = [
    {
        name: "Sarah Sullivan",
        phone: "1-976-631-1449",
        email: "fringilla.purus.mauris@protonmail.com",
        address: "2660 Fringilla Av.",
        list: "5",
        numberrange: "3",
        region: "São Paulo",
        country: "Germany",
        postalZip: "15305",
        guid: "F1CD23D2-5330-4219-27AD-D3EEBBCEE1EA"
    },
    {
        name: "Lydia Jefferson",
        phone: "(635) 846-4521",
        email: "nec@aol.net",
        address: "910-5133 Egestas Rd.",
        list: "9",
        numberrange: "5",
        region: "Comunitat Valenciana",
        country: "Spain",
        postalZip: "91625",
        guid: "AF8B35D3-AF7B-D696-DD95-CFD9EE754F9B"
    },
    {
        name: "Kelly Woodard",
        phone: "(612) 769-6347",
        email: "non.massa@google.ca",
        address: "340-7610 Nam Rd.",
        list: "13",
        numberrange: "6",
        region: "KwaZulu-Natal",
        country: "Brazil",
        postalZip: "716870",
        guid: "926E4374-DD7E-CE41-7427-488FA9226870"
    },
    {
        name: "Wang Hickman",
        phone: "1-938-364-6946",
        email: "dignissim.tempor.arcu@outlook.com",
        address: "Ap #279-8699 Non St.",
        list: "3",
        numberrange: "0",
        region: "Sachsen-Anhalt",
        country: "United States",
        postalZip: "57707",
        guid: "8C0C9789-C89A-F071-16D3-6E446B1321E2"
    },
    {
        name: "Jada Manning",
        phone: "1-846-832-5887",
        email: "vivamus.molestie@yahoo.edu",
        address: "633-4424 Donec Rd.",
        list: "1",
        numberrange: "5",
        region: "Gyeonggi",
        country: "India",
        postalZip: "02828",
        guid: "58989C35-BEAD-6EAE-7D36-CABA9AB3E14A"
    }
];

export const fakeApiGetUserIds = () => {
    return new Promise((resolve) => {
        const userIds = userStorage.map(({ guid }) => guid);
        setTimeout(() => {
            resolve(userIds);
        }, 2000);
    });
};

export const fakeApiGetUser = (guid) => {
    return new Promise((resolve, reject) => {
        const user = userStorage.find((user) => user.guid === guid);
        if (user) {
            setTimeout(() => {
                resolve({ ...user });
            }, 500);
        } else {
            reject(new Error("User not found"));
        }
    });
};
