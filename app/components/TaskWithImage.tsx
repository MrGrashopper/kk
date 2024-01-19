'use client'
import {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'

interface ImageType {
    src: string
    alt: string
}

type CombinedTaskProps = {
    title: string
    task: string[]
    images: ImageType[]
    color: string
}

export const TaskWithImage = ({
    title,
    task,
    images,
    color
}: CombinedTaskProps) => {
    const [isModalOpen, setModalOpen] = useState(false)
    const [currentImage, setCurrentImage] = useState<ImageType | null>(null)

    const openModal = (image: ImageType) => {
        setCurrentImage(image)
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false)
    }

    return (
        <>
            <motion.div
                className="mb-20"
                initial={{y: '5%', opacity: 0.5}}
                animate={{y: 0, opacity: 1}}
                whileTap={{scale: 0.95}}>
                <h2 className={`text-xl font-bold text-primary pt-6 pb-3`}>
                    {title}
                </h2>
                <div
                    className={`hero card bg-base-300 shadow-xl text-primary-content w-full border-t border-${color}`}
                    style={{
                        backgroundImage: `url(${images[0]?.src})`,
                        backgroundSize: 'cover',
                        height: '100%'
                    }}>
                    <div className="hero-overlay bg-opacity-70 rounded"></div>
                    <div className="flex justify-between w-full">
                        <div className="task-content flex-grow px-6 py-9 flex flex-col">
                            <p className="text-xl text-white mb-4 mr-6">
                                {task}
                            </p>
                        </div>
                        <div className="absolute top-2 right-2">
                            <div
                                className="relative h-[35px] w-[35px] rounded cursor-pointer"
                                onClick={() => openModal(images[0])}>
                                <svg
                                    height="35px"
                                    width="35px"
                                    fill="#FFFFFF"
                                    viewBox="0 0 24 24">
                                    <g>
                                        <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.49,18.99L19.08,20.41L14.13,15.45L13.73,15.14C12.59,15.92 11.11,16.5 9.5,16.5A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            {isModalOpen && (
                <AnimatePresence>
                    <div className="fixed top-0 left-0 w-full h-full bg-opacity-50 bg-accent flex items-center justify-center z-50">
                        <div className="bg-white p-4 rounded relative">
                            <img
                                src={currentImage?.src}
                                alt={currentImage?.alt}
                                className="object-contain h-[90vh] mx-auto"
                            />
                            <button
                                className="absolute top-2 w-9 h-9 right-2 text-white bg-accent border border-accent rounded-full"
                                onClick={closeModal}>
                                X
                            </button>
                        </div>
                    </div>
                </AnimatePresence>
            )}
        </>
    )
}
