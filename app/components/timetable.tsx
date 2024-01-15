import React from 'react'

const Timetable = () => {
    return (
        <div className="overflow-x-auto py-6 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 py-12">
                <div className="stats stats-vertical shadow-xl">
                    <h3 className="text-xl text-base-100 bg-accent text-center py-3">
                        Montags
                    </h3>
                    <div className="stat">
                        <div className="stat-title">17:30 - 18:30</div>
                        <div className="stat-value text-2xl">
                            Kindertraining
                        </div>
                        <div className="stat-desc">Gemischt</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">19:00 - 20:00</div>
                        <div className="stat-value text-2xl">Tai Chi Chuan</div>
                        <div className="stat-desc">Gemischt</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">20:00 - 21:30</div>
                        <div className="stat-value text-2xl">
                            Jeet Kune Do | Shaolin
                        </div>
                        <div className="stat-desc">Gemischt</div>
                    </div>
                </div>
                <div className="stats stats-vertical shadow-xl">
                    <h3 className="text-xl text-base-100 bg-accent text-center py-3">
                        Mittwochs
                    </h3>
                    <div className="stat">
                        <div className="stat-title">17:00 - 18:00</div>
                        <div className="stat-value text-2xl">
                            Kindertraining
                        </div>
                        <div className="stat-desc">Gemischt</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title">19:30 - 21:00</div>
                        <div className="stat-value text-2xl">
                            Jeet Kune Do | Shaolin
                        </div>
                        <div className="stat-desc">Fortgeschritten</div>
                    </div>
                </div>
                <div className="stats stats-vertical shadow-xl">
                    <h3 className="text-xl text-base-100 bg-accent text-center py-3">
                        Samstags
                    </h3>
                    <div className="stat">
                        <div className="stat-title">10:00 - 11:00</div>
                        <div className="stat-value text-2xl">Tai Chi Chuan</div>
                        <div className="stat-desc">Gemischt</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">11:00 - 12:00</div>
                        <div className="stat-value text-2xl">
                            Jeet Kune Do | Shaolin
                        </div>
                        <div className="stat-desc">Anfänger</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">12:00 - 13:00</div>
                        <div className="stat-value text-2xl">
                            Jeet Kune Do | Shaolin
                        </div>
                        <div className="stat-desc">Fortgeschritten</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timetable
