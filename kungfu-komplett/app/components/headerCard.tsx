import {lalezar} from '../styles'
import ContactButton from './contactButton'
import {motion, useAnimation} from 'framer-motion'
import {useEffect} from 'react'
import {useInView} from 'react-intersection-observer'

interface CardProps {
    title: string
    description: string
    imgSrc: string
}

const headerCard = ({title, description, imgSrc}: CardProps) => {
    const controls = useAnimation()
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    useEffect(() => {
        if (inView) {
            controls.start({y: '5%', opacity: 1})
        }
    }, [controls, inView])
    return (
        <motion.div
            className="card mt-6 lg:card-side mb-12 bg-base-100 shadow-xl"
            initial={{opacity: 0.8}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}>
            <figure className="lg:w-4/6">
                <img src={imgSrc} alt="Album" />
            </figure>

            <div className="card-body lg:w-1/4">
                <div className="bg-white mx-auto py-12">
                    <h1 className="text-3xl text-primary text-center">
                        <motion.div
                            ref={ref}
                            initial={{y: '-5%', opacity: 0.5}}
                            animate={controls}
                            whileTap={{scale: 0.95}}
                            className={lalezar.className}>
                            {title}
                        </motion.div>
                    </h1>
                    <p className="text-xl mt-6">{description}</p>
                </div>
                <ContactButton />
            </div>
        </motion.div>
    )
}

export default headerCard
