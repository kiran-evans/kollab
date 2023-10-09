import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";

function Root () {
    return (
        <>
        <Header />
        <main>
            <Outlet />
        </main>
        </>
    )
}

export default Root