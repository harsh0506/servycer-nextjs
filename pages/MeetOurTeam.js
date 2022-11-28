import Image from 'next/image'
import React from 'react'
import styles from "../styles/MeetOurTeam.module.css"
import Circles from './Circles'
function MeetOurTeam() {
    return (
        <>
        <Circles
        zIndex={0}
        backgroundColor="#90C5B4"
        height={150}
        top={"451vh"}
        width={150}
        right={5}
        left="72%"
        opacity={0.6}
      />
            <div className={styles.MainContainer}>
                <div className={styles.container}>
                    <div className={styles.HEader}>
                        <span className={styles.headerText}>Meet our team </span>
                        <p className={styles.desc}>To be the company our customers want us to be, it takes an eclecticgroup of
                            passionate operators. Get to know the people leading the way at Untitled.</p>
                    </div>
                    <div className={styles.BodyOf}>
                        <UserCard />
                        <UserCard />
                        <UserCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MeetOurTeam

const UserCard = () => {
    return (
        <>
            <div className={styles.UseCard}>
                <Image width={270} height={270} src="/man.jpg" className={styles.Imagestyles} alt="director"/>
                <div className={styles.texts}>
                    <span className={styles.name}>Ankur jain</span>
                    <span className={styles.position}>sr. developer</span>
                </div>
            </div>
        </>
    )
}