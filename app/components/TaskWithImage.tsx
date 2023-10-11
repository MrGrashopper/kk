import {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'

type CombinedTaskProps = {
    title: string
    task: string[]
    images: {src: string; alt: string}[]
    color: string
}

export const TaskWithImage = ({
    title,
    task,
    images,
    color
}: CombinedTaskProps) => {
    const [isModalOpen, setModalOpen] = useState(false)
    const [currentImage, setCurrentImage] = useState(null)

    const openModal = image => {
        setCurrentImage(image)
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false)
    }

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
                <div className="flex justify-between">
                    <div className="task-content flex-grow px-6 pt-9">
                        <p className="text-xl text-primary">{task}</p>
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="relative h-[50vh] w-full mx-auto mt-9 mb-6 rounded cursor-pointer"
                                onClick={() => openModal(image)}>
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="absolute inset-0 h-full w-full object-cover rounded"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                                    <span className="flex justify-center items-center w-12 h-12 text-primary border border-4 border-primary rounded-full text-4xl">
                                        <b>+</b>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <AnimatePresence>
                    {isModalOpen && (
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}>
                            <div className="fixed top-0 left-0 w-full h-full bg-opacity-50 bg-accent flex items-center justify-center z-50">
                                <div className="bg-white p-4 rounded relative">
                                    <img
                                        src={currentImage?.src}
                                        alt={currentImage?.alt}
                                        className="object-contain h-[90vh] mx-auto"
                                    />
                                    <button
                                        className="absolute top-2 w-9 h-9 right-2 text-primary bg-accent border border-accent rounded-full"
                                        onClick={closeModal}>
                                        X
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    )
}
