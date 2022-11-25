import Image from 'next/image'
import React from 'react'
import styles from "../styles/Contactus.module.css"

function ContactUs() {
    return (
        <>
            <div className={styles.MainContainer}>
                <div className={styles.left}>
                    <div className={styles.text}>
                        <div className={styles.textSection}>
                            <span className={styles.header}>Get in Touch</span>
                            <p className={styles.Desc}>Yummygum is an Amsterdam-based design studio that speci
                                alVizes in digital products made by startups. </p>
                        </div>
                    </div>

                    <div className={styles.bodyd}>
                        <div className={styles.imageBtn}>
                            <BtnImg img="/loc-light.png" />
                            <BtnImg img="/mail-dark.png" />
                            <BtnImg img="/call-light.png" />
                        </div>
                        <div className={styles.inputconatainer}>
                            <EmailInput />
                        </div>
                    </div>

                </div>
                <div className={styles.right}>
                    <Image width={80} height={80}/>
                </div>
            </div>
        </>
    )
}

export default ContactUs

function BtnImg({ img }) {
    return (
        <>
            <button className={styles.locBtn}>
                <Image height={30} width={30} src={img} />
            </button>
        </>
    )
}

function EmailInput() {
    return (
        <>
            <div className={styles.Email}>
                <form >
                    <input className={styles.emailname} type="email" name='email' />
                    <textarea />
                    <button className={styles.EmailSubmit} >send</button>
                </form>
            </div>
        </>
    )
}