import { DarkMode, LightMode } from "@mui/icons-material";
import { useState } from "react";

export default function Theme(props: {iconOnly?: boolean}) {
    const { iconOnly=false } = props; // hide theme text
    const [themeState, setThemeState] = useState(document.body.getAttribute("data-theme") || "dark");

    const toggleTheme = () => {
        setThemeState(prev => prev==="light"?"dark":"light"); 
        // themeState when `user is logged in and <Theme /> is rendered in user-menu` is destroyed when user-menu dismounts.
        localStorage.setItem("theme", themeState==="light"?"dark":"light");
        document.body.setAttribute("data-theme", themeState==="light"?"dark":"light");
        
        // document.documentElement.style.setProperty("color-scheme", themeState==="light"?"dark":"light");
    };

    return (
        <a onClick={toggleTheme}>
            {
                themeState == "dark" ?  <LightMode /> : <DarkMode />
            }
            &nbsp;
            { iconOnly || "Theme"}
        </a>
    );
}
