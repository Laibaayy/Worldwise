import { createContext, useCallback, useEffect, useReducer } from "react";
import PropTypes from 'prop-types';

let initialstate = {
    cityy: [],
    currentcity: {},
    isloading: false,
    error: null
}
function reducer(state, action) {
    switch (action.type) {
        case "loading":
            return { ...state, isloading: true }
        case "Cities/loaded":
            return { ...state, isloading: false, cityy: action.payload, error: null }
        case "Current/city/loaded":
            return { ...state, isloading: false, currentcity: action.payload, error: null }
        case "Create/city/loaded":
            return { ...state, isloading: false, cityy: [...state.cityy, action.payload], error: null, currentcity: action.payload }
        case "Delete/city/loaded":
            return { ...state, isloading: false, cityy: state.cityy.filter(prev => prev.id !== action.payload), error: null }
        case "End":
            return { ...state, isloading: false, error: action.payload }

        default:
            throw new Error("Not A Case")
    }
}
const WorldwiseContext = createContext()

const Worldwiseprovider = ({ children }) => {
    // const [cityy, setcityy] = useState([])
    // const [currentcity, setcurrentcity] = useState({})
    // const [isloading, setisloading] = useState(true)
    // const [error, setError] = useState(null);
    const [state, dispatch] = useReducer(reducer, initialstate)
    const { cityy, currentcity, isloading, error } = state

    useEffect(() => {

        async function mydata() {
            dispatch({ type: "loading" })
            try {

                const res = await fetch(`http://localhost:9000/cities`)
                const data = await res.json();
                dispatch({ type: "Cities/loaded", payload: data })

                console.log(data);
            }
            catch (err) {
                dispatch({ type: "End", payload: err.message })
            }
        }
        mydata()
    }, [])

    const Alldetail = useCallback(async function Alldetail(id) {
        if (id === currentcity.id) return;
        dispatch({ type: "loading" })
        try {
            const res = await fetch(`http://localhost:9000/cities/${id}`)
            const data = await res.json();
            dispatch({ type: "Current/city/loaded", payload: data })
            console.log(data);
        }
        catch (err) {
            dispatch({ type: "End", payload: err.message })
        }

    }, [currentcity.id])


    async function Createcity(city) {
        dispatch({ type: "loading" })
        try {
            const res = await fetch(`http://localhost:9000/cities`, {
                method: "POST",
                body: JSON.stringify(city),
                headers: { "Content-Type": "application/json" }
            });
            const data = await res.json();
            dispatch({ type: "Create/city/loaded", payload: data })
            // setcityy(cities => [...cities, data])
            console.log(data);
        }
        catch (err) {
            dispatch({ type: "End", payload: err.message })

        }

    }


    async function DeleteCity(id) {
        dispatch({ type: "loading" })
        try {

            const res = await fetch(`http://localhost:9000/cities/${id}`, {
                method: "DELETE",
            });
            const data = await res.json();
            dispatch({ type: "Delete/city/loaded", payload: id })
            // setcityy(cities => cities.filter(prev => prev.id !== id))
            console.log(data);
        }
        catch (err) {
            dispatch({ type: "End", payload: err.message })

        }

    }



    return (
        <WorldwiseContext.Provider value={{ cityy, DeleteCity, isloading, Alldetail, currentcity, error, Createcity }}>
            {children}
        </WorldwiseContext.Provider>
    )
}
export { Worldwiseprovider, WorldwiseContext }


Worldwiseprovider.propTypes = {
    children: PropTypes.node.isRequired
};



