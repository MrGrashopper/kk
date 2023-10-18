type Props = {
    steps: string[]
}

export const MemberProgress = ({steps}: Props) => {
    return (
        <div className="flex flex-row justify-center">
            <ul className="steps steps-vertical w-full h-full pt-6">
                {steps.map((step, index) => {
                    return (
                        <li
                            key={index}
                            style={{
                                textAlign: 'left',
                                marginBottom: 6,
                                marginTop: 6
                            }}
                            className="step step-accent text-xl text-primary my-2">
                            {step}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
