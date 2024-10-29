import { NavLink } from "react-router-dom"
import styles from "./Appnavigation.module.css"
const Appnavigation = () => {
    return (
        <>
            <div className={styles.appnav}>
                <NavLink className={styles.city} to="cities" >Cities</NavLink>
                <NavLink className={styles.city} to="countries" >Countries</NavLink>
            </div>

        </>
    )
}

export default Appnavigation