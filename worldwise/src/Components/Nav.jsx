import { NavLink } from "react-router-dom"
import styles from "./Nav.module.css"
import Logo from "./Logo"
const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <div>
                    <Logo />

                </div>
                <div className={styles.justify}>

                    <li>
                        <NavLink to="/Pricing"  >Pricing</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Product"  >Product</NavLink>
                    </li>
                    <li>
                        <NavLink className="Link" to="/login"  >Login</NavLink>
                    </li>
                </div>
            </ul>
        </nav>
    )
}

export default Nav
