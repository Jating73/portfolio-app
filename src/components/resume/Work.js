import React from 'react'

function Work({ work_details }) {
    return (
        work_details.map(work_detail => {
            return (
                <div className='work-section my-4' key={work_detail.id}>
                    <div className='d-flex flex-column '>
                        <div className='d-flex flex-row justify-content-between'>
                            <span className='company-name'>{work_detail.company_name}</span>
                            <span className='year-passed'>{work_detail.start_month} {work_detail.start_year} - {work_detail.end_month} {work_detail.end_year}</span>
                        </div>
                    </div>
                    <div className='d-flex flex-column'>
                        <span className='position'>{work_detail.position}</span>
                        <span className='description'>
                            <ul>
                                {work_detail.descriptions.map(description => {
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

export default Work
