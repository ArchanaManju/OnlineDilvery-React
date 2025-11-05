import { createContext, useState } from "react";

const LoggedInUserContext = createContext({
    user: { name: "Guest", email: "" },
    setUser: () => {},
});

export const LoggedInUserProvider = ({ children }) => {
    const [user, setUser] = useState({ name: "Guest", email: "" });

    return (
        <LoggedInUserContext.Provider value={{ user, setUser }}>
            {children}
        </LoggedInUserContext.Provider>
    );
};

export default LoggedInUserContext;