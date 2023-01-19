import React from 'react'

export enum MaTypes {
    jkd = 'JKD',
    shaolin = 'SHAOLIN',
    taichi = 'TAI_CHI',
    kids = 'KIDS',
}

interface ProgressProps {
    steps: string[]
    martialArtsType?: MaTypes
}

const ProgressBar = (props: ProgressProps) => {
    return (
        <div className="flex flex-row justify-start">
            <ul className="steps w-full steps-vertical my-5">
                {props.steps &&
                    props.steps.map((step: string, i) => {
                        return (
                            <>
                                {(props.martialArtsType === MaTypes.jkd ||
                                    props.martialArtsType === undefined) && (
                                    <li
                                        className={
                                            props.steps.length === i + 1
                                                ? 'step step-secondary mx-2'
                                                : 'step step-accent mx-2'
                                        }>
                                        {step}
                                    </li>
                                )}
                                {props.martialArtsType === MaTypes.shaolin && (
                                    <li
                                        className={
                                            props.steps.length === i + 1
                                                ? 'step step-secondary mx-2'
                                                : 'step step-gold mx-2'
                                        }>
                                        {step}
                                    </li>
                                )}
                                {props.martialArtsType === MaTypes.taichi && (
                                    <li
                                        className={
                                            props.steps.length === i + 1
                                                ? 'step step-info mx-2'
                                                : 'step step-accent mx-2'
                                        }>
                                        {step}
                                    </li>
                                )}
                                {props.martialArtsType === MaTypes.kids && (
                                    <li
                                        className={
                                            props.steps.length === i + 1
                                                ? 'step step-secondary mx-2'
                                                : 'step step-accent mx-2'
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
