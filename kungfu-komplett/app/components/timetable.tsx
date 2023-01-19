import React from 'react'

const Timetable = () => {
    return (
        <div className="overflow-x-auto mt-10">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Montags</th>
                        <th>Mittwochs</th>
                        <th>Samstags</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th></th>
                        <td>17:30 - 18:30 Kindertraining</td>
                        <td>17:00 - 18:00 Kindertraining</td>
                        <td>10:00 - 11:00 Tai Chi</td>
                    </tr>
                    <tr>
                        <th></th>
                        <td>19:00 - 20:00 Jeet Kune Do/Shaolin Anfänger</td>
                        <td>18:00 - 19:00 Tai Chi</td>
                        <td>11:00 - 12:00 Jeet Kune Do/Shaolin Anfänger</td>
                    </tr>

                    <tr>
                        <th></th>
                        <td>
                            20:00 - 21:00 Jeet Kune Do/Shaolin Fortgeschrittene
                        </td>
                        <td>19:30 - 20:30 Jeet Kune Do/Shaolin Anfänger</td>
                        <td>
                            12:00 - 13:00 Jeet Kune Do/Shaolin Fortgeschrittene
                        </td>
                    </tr>

                    <tr>
                        <th></th>
                        <td></td>
                        <td>
                            19:30 - 21:30 Jeet Kune Do/Shaolin Fortgeschrittene
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Timetable
