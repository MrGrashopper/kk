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
            <div className="card bg-base-300 shadow-xl text-primary-content w-full">
                <h2
                    className={`text-xl text-primary text-center pt-6 pb-3 border-t border-${color}`}>
                    {title}
                </h2>
                <div className="pb-3 px-3">
                    <MemberProgress steps={task} />
                </div>
            </div>
        </motion.div>
    )
}
