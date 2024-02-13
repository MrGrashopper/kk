export const MemberShowcase = () => {
    return (
        <div className="container mx-auto mb-12">
            <div className="mx-3 md:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="mockup-phone">
                    <div className="camera"></div>
                    <div className="display">
                        <div className="artboard artboard-demo phone-1">
                            <img src="phone.png" alt="phone-member-1" />
                        </div>
                    </div>
                </div>
                <div className="mockup-phone">
                    <div className="camera"></div>
                    <div className="display">
                        <div className="artboard artboard-demo phone-1">
                            <img src="phone-2.png" alt="phone-member-2" />
                        </div>
                    </div>
                </div>
                <div className="mockup-phone">
                    <div className="camera"></div>
                    <div className="display">
                        <div className="artboard artboard-demo phone-1">
                            <img src="phone-3.png" alt="phone-member-3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
