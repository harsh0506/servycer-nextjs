import Image from 'next/image'
import React from 'react'
import styles from "../styles/TestiMonials.module.css"

function Testimonials() {
    return (
        <>
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