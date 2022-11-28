import Image from 'next/image'
import React from 'react'
import styles from "../styles/Contactus.module.css"

function ContactUs() {

    const [EmailCompVisible, setEmailVisible] = React.useState(true)
    const [PhoneCompVisible, setPhoneVisible] = React.useState(false)
    const [LocationCompVisible, setLoCVisible] = React.useState(false)

    let comp 

    if (EmailCompVisible === true) {
        comp =  <EmailInput />
    }
    else if (PhoneCompVisible === true) {
        comp = <PhoneInput />
    }
    else {
        comp =  <PhoneInput />
    }


console.log("ojeoj3ssase")
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
                        <BtnImg bg={"#388087"} onClick={() => {
                            setPhoneVisible(false)
                            setLoCVisible(true)
                            setEmailVisible(false)
                        }} img="/loc-light.png" width={25} />
                        <BtnImg bg={"#B9E7C9"}
                            onClick={() => {
                                setPhoneVisible(false)
                                setLoCVisible(false)
                                setEmailVisible(true)
                            }}
                            img="/mail-dark.png" />
                        <BtnImg bg={"#388087"}
                            onClick={() => {
                                setPhoneVisible(true)
                                setLoCVisible(false)
                                setEmailVisible(false)
                            }}
                            img="/call-light.png" />
                    </div>
                    <div className={styles.inputconatainer}>
                        {comp}
                    </div>
                </div>

            </div>
            <div className={styles.right}>
                <Image width={580} alt="contactusImageVector" height={580} src="/ContactUsPic.png" />
            </div>
        </div>
    </>
)

                        }
export default ContactUs

function BtnImg({ img, width, bg , onClick}) {
    return (
        <>
            <button onClick={onClick} className={` ${styles.locBtn} ${styles.btnColor}`}>
                <Image style={{ objectFit: "contain" }} height={30} width={30} src={img} className={styles.Image_Byn} alt="btn" />
            </button>
        </>
    )
}

function EmailInput() {
    return (
        <>
            <div className={styles.Email}>
                <form className={styles.formEMail}>
                    <input placeholder='enter your email address' className={styles.emailname} type="email" name='email' />
                    <textarea placeholder='enter message' className={styles.Ask} />
                    <button className={styles.EmailSubmit} >send</button>
                </form>
            </div>
        </>
    )
}

function PhoneInput() {
    return (
        <>
            <div className={styles.Phone}>
                <form className={styles.formPhone}>
                    <textarea placeholder='enter your message' className={styles.AskPhone} />
                    <button className={styles.PhoneSubmit} >send</button>
                </form>
            </div>
        </>
    )
}