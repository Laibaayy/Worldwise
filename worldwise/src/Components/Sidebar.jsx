import { Outlet } from "react-router-dom";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";
import Appnavigation from "./Appnavigation";
const Sidebar = () => {
    return (
        <>
            <div className={styles.sidebar}>
                <Logo />
                <section>
                    <Appnavigation />
                    <Outlet />
                </section>
                <footer>
                    <p>
                        &copy; CopyRight {new Date().getFullYear()} by WorldWise Inc.
                    </p>
                </footer>
            </div>
        </>
    )
}

export default Sidebar
