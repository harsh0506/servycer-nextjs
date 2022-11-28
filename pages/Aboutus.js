import React from 'react'
import Image from "next/image"
import styles from "../styles/AboutUS.module.css"
import Circles from './Circles'

function Aboutus() {
    return (
        <>


<Circles
        zIndex={0}
        backgroundColor="#C2EDCE"
        height={400}
        top={"241vh"}
        width={400}
        right={5}
        left="74%"
        opacity={0.6}
        borderRadius=" 100pc 0 0 0"
      />
      <Circles
        zIndex={0}
        backgroundColor="#6FB3B8"
        height={250}
        top={"257vh"}
        width={250}
        right={5}
        left="62%"
        opacity={0.6}
      />


            <div className={styles.Maincontainer}>
                <div className={styles.Container}>
                    <div className={styles.left}>
                        <div className={styles.textBox}>
                            <span className={styles.about_us_text}>about us</span>
                            <p className={styles.header}>Looking to find
                                and hire great
                                talent?</p>
                            <p className={styles.desc}>
                                jdwnw wdjnwdw djwdwdowjnw wniwwndwno wno owdiw
                                dwdjidjwniiwjnd ennkenn3ei joe3m jo3mdw fefn rgn ri
                                jrm ljrfip
                            </p>
                            <button className={styles.ctaBtn}>
                                get in contact
                            </button>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.rightImage}>
                            <Image style={{zIndex:1}} height={600} width={600} src="/aboutus.png" />
                        </div>
                    </div>
                </div>

                <Circles
        zIndex={0}
        backgroundColor="#90C5B4"
        height={150}
        top={"281vh"}
        width={150}
        right={5}
        left="4%"
        opacity={0.6}
     
      />

                <div className={styles.cultureSection}>
                    <div className={styles.CultureContainer}>
                        <div className={styles.CultureHeader}>
                            <span className={styles.Culture}>Our Culture</span>
                        </div>
                        <div className={styles.CultureCards}>
                            <Card />
                            <Card />
                            <Card />
                        </div>

                    </div>
                </div>

                <div className={styles.ValuesSection}>
                    <div className={styles.ValueContainer}>
                        <div className={styles.ValueeLeft}>
                            <Image width={380} height={500} src="/team.jpg" className={styles.imgGroup} />
                        </div>
                        <div className={styles.ValueeRight}>
                            <div className={styles.ValuesConatinerText}>
                                <span className={styles.headerVlaues}> values</span>
                                <ValuesCard />
                                <ValuesCard />
                            </div>
                            <Circles
        zIndex={0}
        backgroundColor="#90C5B4"
        height={150}
        top={"415vh"}
        width={150}
        right={5}
        left="83%"
        opacity={0.6}
        borderRadius=" 100pc 0 0 0"
      />
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}

export default Aboutus

function Card() {
    return (
        <>
            <div className={styles.CardContainer}>
                <div className={styles.imgofCard}>
                    <div className={styles.imageContainer}>
                        <Image height={50} width={50} alt="f" />
                    </div>
                </div>
                <div className={styles.texts}>
                    <span className={styles.headerTextOfCard}>flexible and understanding</span>
                    <p className={styles.DescTextOfCard} >With regrg rgg rg efehbv efbueyf eyhfefu
                        spns NY nd Miyni.effuefe hebfebf hebfuief
                        have the to build</p>
                </div>
            </div>

        </>
    )
}

const ValuesCard = () => {
    return (
        <>
            <div className={styles.valuesCard}>
                <span className={styles.valueNumber}>01</span>
                <span className={styles.headerValusText}>highly helpable</span>
                <p className={styles.descValuesText}>hfvefyewfewvkwfe feugf efbieufiue eufhe
                    dfbefej ejfbef jefie ekfn </p>
            </div>
        </>
    )
}