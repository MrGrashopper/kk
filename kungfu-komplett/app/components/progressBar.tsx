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
                            <>
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
                                {props.martialArtsType === MaTypes.shaolin && (
                                    <li
                                        className={
                                            props.steps.length === i + 1
                                                ? 'step step-secondary text-xl'
                                                : 'step step-gold text-xl'
                                        }>
                                        {step}
                                    </li>
                                )}
                                {props.martialArtsType === MaTypes.taichi && (
                                    <li
                                        className={
                                            props.steps.length === i + 1
                                                ? 'step step-info '
                                                : 'step step-accent '
                                        }>
                                        {step}
                                    </li>
                                )}
                                {props.martialArtsType === MaTypes.kids && (
                                    <li
                                        className={
                                            props.steps.length === i + 1
                                                ? 'step step-success '
                                                : 'step step-accent '
                                        }>
                                        {step}
                                    </li>
                                )}
                            </>
                        )
                    })}
            </ul>
        </div>
    )
}

export default ProgressBar
