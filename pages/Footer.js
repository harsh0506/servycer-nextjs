import React from 'react'
import Image from 'next/image'
import styles from "../styles/Footer.module.css"
import Link from 'next/link'

function Footer() {
    return (
        <>
            <div className={styles.Footer}>
                <div className={styles.Innercontainer}>
                    <div className={styles.Top}>

                        <div className={styles.Logo}>
                            <span className={styles.logotext} >sERVYCER</span>
                            <Image height={200} style={{ objectFit: "contain" }} width={200} src="/logo.jpeg" className={styles.LogoImg} alt="logo" />
                        </div>

                        <div className={styles.LocationContainer}>

                        </div>

                        <div className={styles.Details}>
                            <HoriSec img="/call.png" text={"+91 1212121222"} />
                            <HoriSec img="/mail.png" text={"hdhdhd@gmail.com"} />
                            <HoriSec img="/location.png" text={"2-b,fef niw ,ewnfei , nfof 234234"} />
                        </div>

                    </div>

                    <div className={styles.Bottom}>
                        <SocialMedia add="" img="/tt.png" />
                        <SocialMedia add="" img="/insta.png" />
                        <SocialMedia add="" img="/in.png" />
                        <SocialMedia add="" img="/fb.png" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer


function HoriSec({ img, text }) {
    return (
        <>
            <div className={styles.Phone}>
                <Image style={{ objectFit: "contain" }} height={24} width={34} src={img} alt="phone" />
                <span className={styles.PhoneNumber} >{text}</span>
            </div>
        </>
    )
}

function SocialMedia({add , img}) {
    return (
        <>
            <button className={` ${styles.locBtn} ${styles.btnColor}`}>
                <Link href={add}>
                    <Image style={{ objectFit: "contain" }} height={30} width={30} src={img} className={styles.Image_Byn} alt="btn" />
                </Link>
            </button>
        </>
    )
}
