import React from 'react';

function ScheduleDetails(props) {
    return (
        <>
            <table>
                <thead>
                    <tr className="table100-head">
                        <th className="column1">Date</th>
                        <th className="column2">Location</th>
                        <th className="column3">Speaker</th>
                        <th className="column4">Price</th>
                        <th className="column6">Link</th>
                    </tr>
                </thead>

                <tbody>
                    {props.schedules.map(s=>
                        <tr key={s.id}>

                            <td>{s.date}</td>
                            <td>{s.location}</td>
                            <td>{s.speakerName}</td>
                            <td>{s.price}</td>
                            <td>{s.linkPDF}</td>
                        </tr>)}
                </tbody>
            </table>
        </>
    );
}

export default ScheduleDetails;