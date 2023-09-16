type Props = {
    title: string
    desc: string
}
const HighlightBox = ({title, desc}: Props) => {
    return (
        <div className="mx-3 lg:mx-10 py-12">
            <div className="card w-full">
                <div className="card-body items-center">
                    <h3 className="card-title text-center">{title}</h3>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default HighlightBox
