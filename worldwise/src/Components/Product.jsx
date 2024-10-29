import Nav from "./Nav"
import styles from "./Product.module.css"
const Product = () => {
    return (
        <>
            <div className={styles.product}>
                <Nav />
                <section className={styles.sec}>
                    <div>
                        <img className={styles.img} src="https://i.pinimg.com/550x/dc/8e/02/dc8e0253d65eee2eb876cd397160459f.jpg" alt="" />
                    </div>
                    <div className={styles.div}><h1>About WorldWide</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A earum repellat soluta sunt aspernatur iusto unde sit pariatur ad dolore! Reprehenderit ipsa, dignissimos quasi nisi repellendus quam minima consectetur aliquam aspernatur illo ipsum laboriosam sint accusamus impedit nihil iure ullam ratione officiis. Tenetur quisquam suscipit eius odit, ratione reiciendis maxime facere iusto mollitia molestias consequuntur! <br /><br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam veniam tempore soluta tempora eum mollitia, quasi aperiam obcaecati, earum porro quis repudiandae, beatae similique temporibus suscipit pariatur adipisci voluptas ducimus nulla.</p>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Product
