import {motion} from 'framer-motion'
import {MemberProgress} from './memberProgress'
import {lalezar} from '../../styles'

type Props = {
    title: string
    task: string[]
}
export const Task = ({task, title}: Props) => {
    return (
        <motion.div
            initial={{y: '5%', opacity: 0.5}}
            animate={{y: 0, opacity: 1}}
            whileTap={{scale: 0.95}}>
            <div className="card bg-base-300 shadow-xl text-primary-content w-full py-12">
                <h2 className="text-xl text-secondary text-center">{title}</h2>
                <MemberProgress steps={task} />
            </div>
        </motion.div>
    )
}
