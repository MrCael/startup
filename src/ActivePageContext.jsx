import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ActivePageContext = createContext();

export function ActivePageProvider({ children }) {
    const location = useLocation();

    // Initialize from localStorage if available, otherwise use current path
    const [activePage, setActivePage] = useState(
        localStorage.getItem("activePage") || location.pathname
    );

    // Whenever activePage changes, save it to localStorage
    useEffect(() => {
        localStorage.setItem("activePage", activePage);
    }, [activePage]);
  
    return (
        <ActivePageContext.Provider value={{ activePage, setActivePage }}>
            {children}
        </ActivePageContext.Provider>
    );
}

export function useActivePage() {
    return useContext(ActivePageContext);
}