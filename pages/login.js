import React, { useState } from 'react';
import styles from "../styles/Login.module.scss";
import Navbar from "../components/Navbar"
import Link from 'next/link';
import Register from "../pages/register"


const Input = (props) => {
    // console.log(props)
    return (
        <div className={[styles.inputInnerWrapper, ""].join(" ")} id="inputInnerWrapper">
            <div className={[styles.labelAndInput].join(" ")}>
                <label htmlFor="">{props.name}</label>
                <input type={props.type} placeholder='' className={[styles.formInput, ""].join(" ")} onChange={(e) => props.setInputValue(e.target.value)} />
            </div>
            <i class={[styles.inputIcon, props.iconClass].join(" ")}></i>
        </div>
    )
}


const Login = () => {
    const [inputValue, setInputValue] = useState("")
    // console.log(inputValue)
    const showPassword = () => {
        if (typeof window != "undefined") {
            let show = document.getElementById("passwordIcon1");
            let hide = document.getElementById("passwordIcon2");
            let passwordInput = document.getElementById("passwordInput")
            show.style.display = "none";
            hide.style.display = "block";
            passwordInput.type = "text";

        }
    }
    const hidePassword = () => {
        if (typeof window != "undefined") {
            let hide = document.getElementById("passwordIcon2");
            let show = document.getElementById("passwordIcon1");
            let passwordInput = document.getElementById("passwordInput")
            hide.style.display = "none";
            show.style.display = "block";
            passwordInput.type = "password";
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

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
                        <form onSubmit={handleSubmit}>
                            <div className={[styles.inputNameWrapper].join(" ")}>
                                <div className={[styles.inputWrapper, ""].join(" ")}>
                                    <Input type="text" name="First Name" setInputValue={setInputValue} iconClass="bx bxs-user-detail inputIcon" />
                                </div>
                                <div className={[styles.inputWrapper, ""].join(" ")}>
                                    <Input type="text" name="Last Name" setInputValue={setInputValue} iconClass="bx bxs-user-detail inputIcon" />
                                </div>
                            </div>
                            <div className={[styles.inputWrapper, ""].join(" ")}>
                                <Input type="email" name="Email" setInputValue={setInputValue} iconClass="bx bxs-envelope inputIcon" />
                            </div>
                            <div className={[styles.inputWrapper, ""].join(" ")}>
                                <div className={[styles.inputInnerWrapper, ""].join(" ")} id="inputInnerWrapper">
                                    <div className={[styles.inputAndIconWrapper, ""].join(" ")}>
                                        <div className={[styles.labelAndInput, ""].join(" ")}>
                                            <label htmlFor="">Set Password</label>
                                            <input type="password" placeholder='' className={[styles.formInput, ""].join(" ")} id="passwordInput" />
                                        </div>
                                        {/* <Input type="password" name="Set Password" /> */}
                                        <div className={[styles.iconWrapper, ""].join(" ")}>
                                            <i className={[styles.passwordIcon, styles.passwordIcon1, "bx bx-show passwordIcon"].join(" ")} id="passwordIcon1" onClick={showPassword}></i>
                                            <i className={[styles.passwordIcon, styles.passwordIcon2, "bx bx-hide passwordIcon"].join(" ")} id="passwordIcon2" onClick={hidePassword}></i>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className={[styles.inputAndBtn, ""].join(" ")}>
                                <div className={[styles.inputWrapper, ""].join(" ")}>
                                    <div className={[styles.inputInnerWrapper, styles.inputInnerWrapperFile, ""].join(" ")} id="inputInnerWrapper">
                                        <label htmlFor="avatarField">Upload photo</label>
                                        <input type="file" placeholder='' style={{ display: "none" }} className={[styles.formInput, ""].join(" ")} id="avatarField" />
                                    </div>
                                </div>
                                <div className={[styles.inputBtnWrapper, ""].join(" ")}>
                                    <button className={[styles.inputBtn, " "].join(" ")} disabled="">
                                        Create Account
                                    </button>
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