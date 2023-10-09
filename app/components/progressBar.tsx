import React from 'react'

export enum MaTypes {
    jkd = 'JKD',
    shaolin = 'SHAOLIN',
    taichi = 'TAI_CHI',
    kids = 'KIDS'
}

interface ProgressProps {
    steps: string[]
    martialArtsType?: MaTypes
}

const ProgressBar = (props: ProgressProps) => {
    return (
        <div className="flex flex-row justify-start">
            <ul className="steps w-full h-full steps-vertical">
                {props.steps &&
                    props.steps.map((step: string, i) => {
                        return (
                            <React.Fragment key={i}>
                                {(props.martialArtsType === MaTypes.jkd ||
                                    props.martialArtsType === undefined) && (
                                    <li
                                        style={{textAlign: 'left'}}
                                        className={
                                            props.steps.length === i + 1
                                                ? 'step step-secondary text-xl my-2'
                                                : 'step step-accent text-xl my-2'
                                        }>
                                        {step}
                                    </li>
                                )}
                            </React.Fragment>
                        )
                    })}
            </ul>
        </div>
    )
}

export default ProgressBar
