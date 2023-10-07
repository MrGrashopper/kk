import {motion} from 'framer-motion'
import Link from 'next/link'

type Props = {
    tier: string
    link: string
    access: boolean
    color: string
}

export const Card = ({tier, link, access, color}: Props) => {
    return (
        <motion.div
            initial={{y: '5%', opacity: 0.5}}
            animate={{y: 0, opacity: 1}}
            whileTap={{scale: 0.95}}>
            <Link href={access ? link : '/member'}>
                <div
                    className={`card md:w-80 lg:w-72 xl:w-96 bg-base-300 shadow-xl text-primary-content border ${color} ${
                        access ? '' : 'opacity-30'
                    }`}>
                    <div className="card-body">
                        <h2 className="card-title text-primary">{tier}</h2>
                        <p className="text-primary">
                            {access
                                ? 'Stufe freigeschaltet'
                                : 'Stufe nicht freigeschaltet'}
                        </p>
                        <div className="card-actions justify-end mt-6"></div>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}
