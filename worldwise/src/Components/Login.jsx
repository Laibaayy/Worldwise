import styles from "./Login.module.css"
import { useContext, useState, useEffect } from "react"
import Nav from "./Nav"
import { Authcontext } from "../Contexts/UserAuthContext"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [useremail, setuseremail] = useState("laiba@gmail.com")
    const [userpassword, setuserpassword] = useState("laibaa")
    const { userrfunc, isauthorized } = useContext(Authcontext)
    const navigatee = useNavigate()
    const loginhandler = (e) => {
        e.preventDefault();
        if (useremail && userpassword) {
            userrfunc(useremail, userpassword);

        } else {
            console.log("Missing email or password");
        }
        console.log("Login attempted");
    };

    useEffect(() => {
        if (isauthorized) return navigatee("/app", { replace: true })
    }, [isauthorized, navigatee])




    return (
        <>
            <section className={styles.login}>
                <Nav />
                <form action="" onSubmit={loginhandler}>
                    <div>
                        <label htmlFor="">Email Address: </label>
                        <input type="email" name="email" id="email" value={useremail} onChange={(e) => { setuseremail(e.target.value) }} placeholder="example@gmail.com" />
                    </div>
                    <div>
                        <label htmlFor="">Password: </label>
                        <input type="password" name="pass" id="pass" value={userpassword} onChange={(e) => { setuserpassword(e.target.value) }} placeholder="****" />
                    </div>
                    <button >Login</button>
                </form>
            </section>
        </>
    )
}

export default Login
