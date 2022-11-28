import Image from 'next/image'
import React from 'react'
import styles from "../styles/TestiMonials.module.css"
import Circles from './Circles'

function Testimonials() {
    return (
        <>
         <Circles
        zIndex={0}
        backgroundColor="#C2EDCE"
        height={250}
        top={"551vh"}
        width={250}
        right={5}
        left="83%"
        opacity={0.6}
      />
       <Circles
        zIndex={0}
        backgroundColor="#6FB3B8"
        height={150}
        top={"560vh"}
        width={150}
        right={5}
        left="72%"
        opacity={0.6}
      />
            <div className={styles.MAinContainer}>
                <div className={styles.Container}>

                    <div className={styles.Upper}>
                        <span className={styles.testimonials}>testimonials</span>
                        <span className={styles.header}>Don't trust us ,but trust
                            our customers
                        </span>
                        <p className={styles.desc}>A testimonial is an honest endorsement or review from a customer describing how a product or service
                            met their expectations or resolved their problems. Effective testimonials are about creating trust with
                            new customers, this social proof can help new visitors </p>
                    </div>

                    <div className={styles.lower}>
                        <TestimonialsCard />
                        <TestimonialsCard />
                        <TestimonialsCard />
                    </div>
                </div>

            </div>
            <Circles
        zIndex={0}
        backgroundColor="#6FB3B8"
        height={350}
        top={"610vh"}
        width={350}
        borderRadius=" 0 100pc 0 0"
        opacity={0.6}
      />
        </>
    )
}

export default Testimonials

const TestimonialsCard = () => {
    return (
        <>
            <div className={styles.TestimonialCard}>
                <div className={styles.Card}>
                    <span className={styles.CardHeader}>Help us improve our
                        productivity</span>
                    <p className={styles.CardDesc}>Lorem •psum dolor Sit amet. consectet juhfd ue ujuj u
                        r ad.p•sctngelit. sed do e•usmod tempor efvyefvy yyuh
                        inc•dldunt ut labore etdolore magna efuyhh uebfj h
                        aliqua. Ut enim
                        -</p>
                    <div className={styles.ImgText}>
                        <Image height={40} width={40} src="/man.jpg" alt="customer" className={styles.custImg} />
                        <p className={styles.Name}>namw name</p>
                    </div>
                </div>
            </div>
        </>
    )
}