import { useNavigate } from "react-router-dom"
import styles from "./Logoutuser.module.css"
import { useContext } from "react"
import { Authcontext } from "../Contexts/UserAuthContext"

const Logoutuser = () => {

    const navigating = useNavigate()
    const { user, logout } = useContext(Authcontext)
    const logouthandler = () => {
        logout()
        navigating("/")
    }


    return (
        <div className={styles.logout}>
            <img src={user.avatar} alt="" />
            <p>Welcome, {user.name}</p>
            <button onClick={logouthandler}>Logout</button>
        </div>
    )
}

export default Logoutuser