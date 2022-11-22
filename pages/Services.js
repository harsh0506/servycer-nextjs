import React from 'react'
import Image from "next/image"
import styles from "../styles/services.module.css"
function Services() {
    return (
        <>
            <div className={styles.Maincontainer}>
                <div className={styles.backimg}>
                    <Image className={styles.img} height={600} width={1700} src="/triangle.png" />
                </div>
                <div className={styles.text}>
                        <span className={styles.heaader}>Our services</span>
                        <p className={styles.desc}>jhfabfbka fef efenf eij ejepwojmemamf,a'fpelpe;'da,,</p>
                    </div>
                <div className={styles.cardcontainer}>
                  
                    <div className={styles.cards}>
                        <div className={styles.card1}>
                            <Image className={styles.estate} width={30} height={30} />
                            <p className={styles.headerTextCard}>REAL ESTATE</p>
                            <p className={styles.cardDesc}>wdhowd whoid j
                                dwdk iwjdw iwjjo ow
                                dkndefn</p>
                        </div>

                        <div className={styles.card2}>
                            <Image className={styles.estate} width={30} height={30} />
                            <p className={styles.headerTextCard}>CONSULTING</p>
                            <p className={styles.cardDesc}>wdhowd fkfkkf whoid j
                                dwdk iwjdw iwjjo ow
                                dkndefn</p>
                        </div>

                        <div className={styles.card3}>
                            <Image className={styles.estate} width={30} height={30} />
                            <p className={styles.headerTextCard}>INVESTMENT</p>
                            <p className={styles.cardDesc}>wdhowd whoid j
                                dwdk iwjdw iwjjo ow
                                dkndefn</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Services