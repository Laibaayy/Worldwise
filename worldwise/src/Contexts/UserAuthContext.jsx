import { createContext } from "react"
import PropTypes from "prop-types"
import { useReducer } from "react"

const Authcontext = createContext()


const initialstate = {
    user: null,
    isauthorized: false
}
function reducer(state, action) {
    switch (action.type) {
        case "login":
            return { ...state, isauthorized: true, user: action.payload }
        case "logout":
            return { ...state, isauthorized: false, user: null }
        case "default":
            throw new Error("Uknown case")
    }
}

const UserAuthContext = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialstate)
    const { user, isauthorized } = state
    const fakeuser = {
        name: "Laiba",
        email: "laiba@gmail.com",
        password: "laibaa",
        avatar: "https://i.pravatar.cc/300?u=zz"
    }


    const userrfunc = (email, pass) => {
        if (email === fakeuser.email && pass === fakeuser.password) {

            return dispatch({ type: "login", payload: fakeuser })
        }
        else {
            console.log(email, fakeuser.email, pass, fakeuser.password);
        }
    }

    const logout = () => {
        dispatch({ type: "logout" })
    }


    return (
        <Authcontext.Provider value={{ fakeuser, user, isauthorized, userrfunc,logout }}>
            {children}
        </Authcontext.Provider>
    )
}
UserAuthContext.propTypes = {
    children: PropTypes.node.isRequired,
};
export { UserAuthContext, Authcontext }



