import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function ProtectedRoutes () {
    // User Oauth
    useEffect(()=>{
        // will check if user is authenticated
        console.log("protected ...")
    } ,[])
    return (<Outlet/>)
}