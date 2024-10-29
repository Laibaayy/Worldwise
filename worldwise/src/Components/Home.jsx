import Nav from "./Nav"
import styles from "./Home.module.css"
import { NavLink } from "react-router-dom"
const Home = () => {
    return (
        <>
            <div className={styles.main}>

                <Nav />
                <section className={styles.sec}>
                    <h1 className={styles.h1}>You Travel The World.
                        <br />
                        WorldWise Keep Track Of Your Adventure
                    </h1>
                    <p className={styles.p}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />  Amet laborum quidem accusantium facilis id fuga enim, perferendis sed repellat quibusdam recusandae
                        eius impedit ab, hic magni repellendus repudiandae explicabo tenetur.</p>
                    <NavLink className="track" to="/login"  >Start Tracking Now</NavLink>
                </section>

            </div>
        </>
    )
}

export default Home
