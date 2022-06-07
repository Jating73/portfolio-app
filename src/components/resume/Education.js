import React from 'react'

function Education({ education_details }) {
    return (
        <>
            {education_details.map(education_detail => {
                return (
                    <div className='education-section my-4' key={education_detail.id}>
                        <div className='d-flex flex-column '>
                            <div className='d-flex flex-row justify-content-between'>
                                <span className='university'>{education_detail.university_name}</span>
                                <span className='year-passed'>{education_detail.start_year}-{education_detail.end_year}</span>
                            </div>
                        </div>
                        <div className='d-flex flex-column'>
                            <span className='degree'>{education_detail.unviversity_degree}</span>

                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Education
