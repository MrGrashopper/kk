type Props = {
    tier: string
}

export const MemberProgress = ({tier}: Props) => {
    const steps = ['schwarz', 'grün', 'blau', 'gelb']
    const tierOrder = ['black', 'green', 'blue', 'yellow']

    const currentTierIndex = tierOrder.indexOf(tier)

    return (
        <div className="flex flex-row justify-center mt-6">
            <ul className="steps">
                {steps.map((step, index) => {
                    const isActiveStep = index <= currentTierIndex
                    return (
                        <li
                            style={{textAlign: 'left'}}
                            className={
                                isActiveStep
                                    ? 'step step-secondary text-xl'
                                    : 'step step-accent text-xl'
                            }>
                            {step}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
