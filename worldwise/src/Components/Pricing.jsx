import Nav from "./Nav"
import styles from "./Pricing.module.css"

const Pricing = () => {
    return (
        <>
            <section className={styles.pricepage}>
                <Nav />
                <section>
                    <div>
                        <h1>Simple Pricing Just $9/Month</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia harum repellat minus natus iste dolore neque sequi, fugit consectetur architecto similique corrupti officiis vero nemo culpa aliquid ullam praesentium alias.</p>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                </section>

            </section>

        </>
    )
}

export default Pricing
