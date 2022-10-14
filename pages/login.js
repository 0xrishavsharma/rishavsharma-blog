import React from 'react';
import styles from "../styles/Login.module.scss";
import Navbar from "../components/Navbar"
import Link from 'next/link';
import Register from "../pages/register"

const Login = () => {
    return (
        <div className={[styles.container, ""].join(" ")}>
            <div className={[styles.wrapper, ""].join(" ")}>
                <div className={[styles.left, ""].join(" ")}>
                    <Navbar />
                    <div className={[styles.form, ""].join(" ")}>
                        <h3 className={[styles.subheading1, ""].join(" ")}>Continue your journey</h3>
                        <h1 className={[styles.heading].join(" ")}>Login using existing account</h1>
                        <span className={[styles.subheading2]}>Already a user? <Link href="/register"><a href=''>Register</a></Link> </span>
                        <form action="">
                            <div className={[styles.inputNameWrapper].join(" ")}>
                                <div className={[styles.inputWrapper, ""].join(" ")}>
                                    <label htmlFor=""></label>
                                    <input type="text" placeholder='' />
                                </div>
                                <div className={[styles.inputWrapper, ""].join(" ")}>
                                    <label htmlFor=""></label>
                                    <input type="text" placeholder='' />
                                </div>
                            </div>
                            <div className={[styles.inputWrapper, ""].join(" ")}>
                                <label htmlFor=""></label>
                                <input type="text" placeholder='' />
                            </div>
                            <div className={[styles.inputWrapper, ""].join(" ")}>
                                <label htmlFor=""></label>
                                <input type="text" placeholder='' />
                            </div>
                        </form>
                    </div>
                </div>
                <div className={[styles.right, ""].join(" ")}>

                </div>
            </div>
        </div >
    )
}

export default Login