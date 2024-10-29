import Sidebar from "./Sidebar"
import styles from "./Applayout.module.css";
import Map from "./Map";
const Applayout = () => {
    return (
        <div className={styles.app}>

            <Sidebar />

            <Map />
        </div>
    )
}

export default Applayout
