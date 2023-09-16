'use client'
import {motion, useAnimation} from 'framer-motion'
import {useEffect} from 'react'
import {useInView} from 'react-intersection-observer'
import Link from 'next/link'

type Props = {
    link: string
    text: string | undefined
    inverse?: boolean
}

export const MotionButton = ({link, text, inverse}: Props) => {
    const controls = useAnimation()
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    useEffect(() => {
        if (inView) {
            setTimeout(() => {
                controls.start({y: '-5%', opacity: 1})
            }, 100)
        }
    }, [controls, inView])

    return (
        <motion.div
            ref={ref}
            initial={{y: '5%', opacity: 0.5}}
            animate={controls}
            whileTap={{scale: 0.95}}>
            <Link href={link} target={inverse ? '_blank' : undefined}>
                <button
                    className={
                        inverse
                            ? 'btn btn-accent border-white/10'
                            : 'btn btn-secondary border-white/10'
                    }>
                    {text}
                </button>
            </Link>
        </motion.div>
    )
}
