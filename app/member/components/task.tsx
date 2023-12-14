import {motion} from 'framer-motion'
import {MemberProgress} from './memberProgress'

type Props = {
    title: string
    subTitle?: string
    task: string[]
    color: string
}
export const Task = ({task, title, color, subTitle}: Props) => {
    return (
        <motion.div
            initial={{y: '5%', opacity: 0.5}}
            animate={{y: 0, opacity: 1}}
            whileTap={{scale: 0.95}}>
            <div className=" pt-6 pb-3">
                {' '}
                <h2 className={`text-xl font-bold text-primary`}>{title}</h2>
                {subTitle && <h3 className="text-primary">{subTitle}</h3>}
            </div>
            <div
                className={`card bg-base-300 shadow-xl text-primary-content w-full border-t border-${color}`}>
                <div className="px-6 pb-6">
                    <MemberProgress steps={task} />
                </div>
            </div>
        </motion.div>
    )
}
