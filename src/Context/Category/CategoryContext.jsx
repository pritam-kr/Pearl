import axios from "axios";
import { useContext, createContext, useState, useEffect } from "react";

const CategoryContext = createContext(null);

const CategoryContextProvider = ({ children }) => {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const {data: {categories}} = await axios.get('/api/categories')
                setCategory(categories)
        }
            catch (error) {
                console.log(error)
            }
        })()
    }, [])


    return (
        <CategoryContext.Provider value={{ category }}>{children}</CategoryContext.Provider>
    );
};




const useCategoryContext = () => useContext(CategoryContext)

export { useCategoryContext, CategoryContextProvider }