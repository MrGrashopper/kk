import {motion} from 'framer-motion'
import {MemberProgress} from './memberProgress'

type Props = {
    title: string
    task: string[]
    color: string
}
export const Task = ({task, title, color}: Props) => {
    return (
        <motion.div
            initial={{y: '5%', opacity: 0.5}}
            animate={{y: 0, opacity: 1}}
            whileTap={{scale: 0.95}}>
            <h2 className={`text-xl font-bold text-primary text-center py-6`}>
                {title}
            </h2>
            <div
                className={`card bg-base-300 shadow-xl text-primary-content w-full border-t border-${color}`}>
                <div className="pb-3 px-3">
                    <MemberProgress steps={task} />
                </div>
            </div>
        </motion.div>
    )
}
