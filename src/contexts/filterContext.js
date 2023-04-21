import { useContext, createContext, useState } from "react";

const FilterContext = createContext();

export const useFilter = () => useContext(FilterContext);

export const FilterProvider = ({ children }) => {
    const statusFilters = Object.freeze({
        all: "All",
        active: "Active",
        completed: "Completed",
    })
    
    const [status, setStatus] = useState(statusFilters.all);

    return (
        <FilterContext.Provider value={{ status, setStatus, statusFilters }}>
            {children}
        </FilterContext.Provider>
    )
}