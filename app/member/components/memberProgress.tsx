type Props = {
    steps: string[]
}

export const MemberProgress = ({steps}: Props) => {
    return (
        <div className="flex flex-row justify-center">
            <ul className="steps steps-vertical">
                {steps.map((step, index) => {
                    return (
                        <li
                            key={index}
                            style={{textAlign: 'left'}}
                            className="step step-accent text-xl text-primary">
                            {step}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
