import React from 'react'

function Volunteer({ volunteer_details }) {
    return (
        volunteer_details.map(volunteer_detail => {
            return (
                <div className='work-section my-4' key={volunteer_detail.id}>
                    <div className='d-flex flex-column '>
                        <div className='d-flex flex-row justify-content-between'>
                            <span className='company-name'>{volunteer_detail.organisation}</span>
                            <span className='year-passed'>{volunteer_detail.start_month} {volunteer_detail.start_year} - {volunteer_detail.end_month} {volunteer_detail.end_year}</span>
                        </div>
                    </div>
                    <div className='d-flex flex-column'>
                        <span className='position'>{volunteer_detail.volunteering_job}</span>
                        <span className='description'>
                            <ul>
                                {volunteer_detail.descriptions.map(description => {
                                    return <li key={description}>{description}</li>
                                })}
                            </ul>
                        </span>
                    </div>
                </div>
            )
        })
    )
}

export default Volunteer;