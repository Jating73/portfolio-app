import React from 'react'

function Projects({project_details}) {
    return (
        <>
            {project_details.map(project_detail => {
                return (
                    <div className='project-section' key={project_detail.id}>
                        <div className='d-flex flex-row justify-content-between my-4'>
                            <div className='d-flex flex-column'>
                                <span className='project-name'>
                                    {project_detail.app_name}
                                </span>
                                <span className='project-tech'>
                                    Technologies-
                                    {project_detail.techs.map((key, value) => {
                                        if(value < project_detail.techs.length - 1)
                                            return <span>{key}, </span>
                                        return <span>{key}</span>
                                    })}
                                </span>
                            </div>
                            <div>
                                <span className='year-passed'>{project_detail.start_year}-{project_detail.end_year}</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Projects
