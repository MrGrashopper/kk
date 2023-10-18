import {motion} from 'framer-motion'
import {MemberProgress} from './memberProgress'
import TechnicalProgressBar, {
    ProgressProps
} from '../../components/technicalProgressBar'

type Props = {
    title: string
    task: string[]
    color: string
    progress: ProgressProps
}
export const Task = ({task, title, color, progress}: Props) => {
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
                <div className="px-6">
                    <MemberProgress steps={task} />
                </div>
                <div className="px-6 pb-9">
                    <TechnicalProgressBar
                        technique={progress.technique}
                        flexibility={progress.flexibility}
                        strength={progress.strength}
                    />
                </div>
            </div>
        </motion.div>
    )
}
