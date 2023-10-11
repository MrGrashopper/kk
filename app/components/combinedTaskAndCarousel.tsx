import {useState} from 'react'
import {useSwipeable} from 'react-swipeable'
import {motion, AnimatePresence} from 'framer-motion'

interface CombinedTaskProps {
    title: string
    task: string[]
    images: {src: string; alt: string}[]
    color: string
}

export const CombinedTaskAndCarousel = ({
    title,
    task,
    images,
    color
}: CombinedTaskProps) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleNext = () => {
        setCurrentIndex(prevIndex =>
            prevIndex + 1 === task.length + images.length ? 0 : prevIndex + 1
        )
    }

    const handlePrevious = () => {
        setCurrentIndex(prevIndex =>
            prevIndex - 1 < 0 ? task.length + images.length - 1 : prevIndex - 1
        )
    }

    const handlers = useSwipeable({
        onSwipedLeft: () => handleNext(),
        onSwipedRight: () => handlePrevious(),
        trackMouse: true
    })

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
                <div className="relative h-auto" {...handlers}>
                    <AnimatePresence mode="wait">
                        {currentIndex === 0 ? (
                            <motion.div
                                key="text"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                className="task-content flex-grow px-6 py-9">
                                <p className="text-xl text-primary">{task}</p>
                            </motion.div>
                        ) : (
                            images &&
                            images.length > 0 &&
                            currentIndex > 0 && (
                                <motion.img
                                    key={currentIndex}
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                    src={images[currentIndex - 1].src}
                                    alt={images[currentIndex - 1].alt}
                                    className="h-[70vh] object-cover mx-auto mt-9 mb-6 rounded"
                                />
                            )
                        )}
                    </AnimatePresence>
                </div>
                <div className="flex justify-between items-center p-4">
                    {currentIndex === 1 ? (
                        <button
                            onClick={handlePrevious}
                            className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                            <span className="text-secondary">&#10094;</span>
                        </button>
                    ) : (
                        <div className="w-10 h-10"></div>
                    )}

                    {currentIndex === 0 ? (
                        <button
                            onClick={handleNext}
                            className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                            <span className="text-secondary">&#10095;</span>
                        </button>
                    ) : (
                        <div className="w-10 h-10"></div>
                    )}
                </div>
            </div>
        </motion.div>
    )
}
