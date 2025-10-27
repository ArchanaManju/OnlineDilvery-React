import { createContext } from "react";

const LoggedInUserContext = createContext({
    name: "Guest",
    email: "",
})

export default LoggedInUserContext;