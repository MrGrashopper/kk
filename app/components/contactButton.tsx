import {motion, useAnimation} from 'framer-motion'
import {useEffect} from 'react'
import {useInView} from 'react-intersection-observer'
import Link from 'next/link'

const ContactButton = () => {
    const controls = useAnimation()
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    useEffect(() => {
        if (inView) {
            controls.start({y: '-5%', opacity: 1})
        }
    }, [controls, inView])

    return (
        <div className="mx-auto max-w-screen-md items-center text-center pt-6 pb-12">
            <motion.div
                ref={ref}
                initial={{y: '5%', opacity: 0.5}}
                animate={controls}
                whileTap={{scale: 0.95}}>
                <Link href="/training/contact">
                    <button className="btn btn-lg btn-secondary">
                        Starte jetzt dein Training
                    </button>
                </Link>
            </motion.div>
        </div>
    )
}

export default ContactButton
