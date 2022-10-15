import React from 'react';
import styles from "../styles/Login.module.scss";
import Navbar from "../components/Navbar"
import Link from 'next/link';
import Register from "../pages/register"




const Login = () => {
    const showHidePassword = () => {
        if (typeof window != "undefined") {
            let show = document.querySelectorAll("passwordIcon");

        }
    }
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
                                    <div className={[styles.inputInnerWrapper, ""].join(" ")} id="inputInnerWrapper">
                                        <label htmlFor="">First Name</label>
                                        <input type="text" placeholder='' className={[styles.formInput, ""].join(" ")} />
                                    </div>
                                </div>
                                <div className={[styles.inputWrapper, ""].join(" ")}>
                                    <div className={[styles.inputInnerWrapper, ""].join(" ")} id="inputInnerWrapper">
                                        <label htmlFor="">Last Name</label>
                                        <input type="text" placeholder='' className={[styles.formInput, ""].join(" ")} />
                                    </div>
                                </div>
                            </div>
                            <div className={[styles.inputWrapper, ""].join(" ")}>
                                <div className={[styles.inputInnerWrapper, ""].join(" ")} id="inputInnerWrapper">
                                    <label htmlFor="">Email</label>
                                    <input type="email" placeholder='' className={[styles.formInput, ""].join(" ")} />
                                </div>

                            </div>
                            <div className={[styles.inputWrapper, ""].join(" ")}>
                                <div className={[styles.inputInnerWrapper, ""].join(" ")} id="inputInnerWrapper">
                                    <div className={[styles.inputAndIconWrapper, ""].join(" ")}>
                                        <div className={[styles.labelAndInput, ""].join(" ")}>
                                            <label htmlFor="">Password</label>
                                            <input type="password" placeholder='' className={[styles.formInput, ""].join(" ")} />
                                        </div>
                                        <div className={[styles.iconWrapper, ""].join(" ")}>
                                            <i className={[styles.passwordIcon, styles.passwordIcon1, "bx bx-show passwordIcon"].join(" ")} id="passwordIcon1" onClick={showHidePassword}></i>
                                            <i className={[styles.passwordIcon, styles.passwordIcon2, "bx bx-hide passwordIcon"].join(" ")} id="passwordIcon2" onClick={showHidePassword}></i>
                                        </div>
                                    </div>

                                </div>
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