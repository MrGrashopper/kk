import React, {useEffect, useState, useRef} from 'react'

export type ProgressProps = {
    coordination: number
    flexibility: number
    speed: number
    keepWhite?: boolean
}

const TechnicalProgressBar = ({
    coordination,
    flexibility,
    speed,
    keepWhite = false
}: ProgressProps) => {
    const [animatedTechnique, setAnimatedTechnique] = useState(0)
    const [animatedFlexibility, setAnimatedFlexibility] = useState(0)
    const [animatedStrength, setAnimatedStrength] = useState(0)
    const ref = useRef(null)

    const [hasAnimated, setHasAnimated] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true)
                    setTimeout(() => {
                        let start: number

                        const animate = (timestamp: number) => {
                            if (start === undefined) start = timestamp
                            const elapsed = timestamp - start

                            const t = Math.min(elapsed / 300, 1)

                            setAnimatedTechnique(Math.ceil(coordination * t))
                            setAnimatedFlexibility(Math.ceil(flexibility * t))
                            setAnimatedStrength(Math.ceil(speed * t))

                            if (t < 1) {
                                requestAnimationFrame(animate)
                            }
                        }

                        requestAnimationFrame(animate)
                    }, 200)
                }
            },
            {
                rootMargin: '0px',
                threshold: 0.1
            }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [coordination, flexibility, speed, hasAnimated])

    return (
        <div ref={ref} className="flex flex-col gap-2 mt-3">
            <label
                className={`ml-1 text-label ${
                    keepWhite ? '' : 'text-primary'
                }`}>
                Koordination
            </label>
            <progress
                className="progress bg-primary progress-secondary w-full"
                value={animatedTechnique}
                max="100"></progress>

            <label
                className={`ml-1 text-label ${
                    keepWhite ? '' : 'text-primary'
                }`}>
                Schnelligkeit
            </label>
            <progress
                className="progress bg-primary progress-secondary w-full"
                value={animatedFlexibility}
                max="100"></progress>

            <label
                className={`ml-1 text-label ${
                    keepWhite ? '' : 'text-primary'
                }`}>
                Beweglichkeit
            </label>
            <progress
                className="progress bg-primary progress-secondary w-full"
                value={animatedStrength}
                max="100"></progress>
        </div>
    )
}

export default TechnicalProgressBar
