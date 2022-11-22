import React from 'react'
import styles from "../styles/HomePage.module.css"
import { MdRoom } from 'react-icons/md';
import Image from 'next/image';
function HomePage() {
    return (
        <>
            <div className={styles.ParentContainer}>
                <div className={styles.innerContainer}>
                    <div className={styles.Navigationcontainer}>
                        <div className={styles.logo}>
                            <span className={styles.logoText}>servycer</span>
                        </div>
                        <div className={styles.rightside}>
                            <MdRoom className={styles.LocationIcon} />
                            <span className={styles.PNo}>+91 1234567890</span>
                            <span className={styles.Register}>Register</span>
                            <span className={styles.TalkToUs}>Talk to Us</span>
                        </div>
                    </div>

                    <div className={styles.Body}>
                        <div className={styles.BackImage}>
                            <Image width={1200} height={594} src="/home.jpg" />
                        </div>
                        <div className={styles.containerdown}>

                        </div>
                        <div className={styles.hoveringContainer}>
                            <p className={styles.HeaderText}>
                                Start Your Journey Towards FINANCIAL prospirity
                            </p>
                            <p className={styles.DesText}>
                                hrsh hedfh duenu uhuemjuh iuhnwdjoqwj juhf
                                efujn; iuhennnifiensfdje fijfe n jew'b efhifhie j'e
                                jefbjfjfjenjk iijhefe jkehf mef  iefkekenf
                            </p>
                            <div className={styles.Buttons}>
                                <MdRoom className={styles.LocationIcon2} />
                                <button className={styles.cta}>Get In Touch</button>
                                <MdRoom className={styles.LocationIcon} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HomePage