import {motion} from 'framer-motion'
import TechnicalProgressBar, {
    ProgressProps
} from '../../components/technicalProgressBar'

type Props = {
    title: string
    task: string[]
    color: string
    image?: string
    progress: ProgressProps
}
export const TaskDefault = ({task, title, color, image, progress}: Props) => {
    return (
        <motion.div
            initial={{y: '5%', opacity: 0.5}}
            animate={{y: 0, opacity: 1}}
            whileTap={{scale: 0.95}}>
            <h2 className={`text-xl font-bold text-primary pt-6 pb-3`}>
                {title}
            </h2>
            <div
                className={`card bg-base-300 shadow-xl text-primary-content w-full border-t border-${color}`}>
                <div className="pb-3 px-6">
                    <div className="flex flex-row justify-center">
                        <ul className="w-full h-full py-6">
                            {task.map((step, index) => {
                                return (
                                    <li
                                        key={index}
                                        style={{
                                            textAlign: 'left',
                                            marginBottom: 6,
                                            marginTop: 6
                                        }}
                                        className="text-xl text-primary my-2">
                                        {step}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="pb-6">
                        <TechnicalProgressBar
                            technique={progress.technique}
                            flexibility={progress.flexibility}
                            strength={progress.strength}
                        />
                    </div>
                </div>
                {image && (
                    <div className="w-full carousel rounded-box">
                        <div className="carousel-item w-full h-auto">
                            <img src={image} className="w-full" alt="image" />
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    )
}
