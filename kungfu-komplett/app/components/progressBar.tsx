import React from 'react'

interface ProgressProps {
    steps: string[]
}

const ProgressBar = (props: ProgressProps) => {
    return (
        <div className="flex flex-row justify-start">
            <ul className="steps w-full steps-vertical my-10">
                {props.steps &&
                    props.steps.map((step: string, i) => {
                        return (
                            <li
                                className={
                                    props.steps.length === i + 1
                                        ? 'step step-secondary mx-2'
                                        : 'step step-accent mx-2'
                                }>
                                {step}
                            </li>
                        )
                    })}
            </ul>
        </div>
    )
}

export default ProgressBar
