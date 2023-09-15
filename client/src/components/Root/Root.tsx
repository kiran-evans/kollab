import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";

function Root () {
    return (
        <>
        <Nav />
        <Outlet />
        </>
    )
}

export default Root