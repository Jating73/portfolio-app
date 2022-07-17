import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import ProjectItem from '../ProjectItem';

function Projects({ project_details, hosted_projects }) {

    const [key, setKey] = useState('projects');

    return (
        <>
            <Tabs
                activeKey={key}
                onSelect={(k) => setKey(k)}>
                <Tab eventKey='projects' title="Projects" >
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
                                                if (value < project_detail.techs.length - 1)
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
                </Tab>
                <Tab eventKey='hosted-projects' title="Netlify Projects">
                    <div className='row g-3'>
                        {hosted_projects.map(project => {
                            return (
                                <div className='col-lg-6 col-md-12 col-sm-12' key={project.id}>
                                    <ProjectItem project={project} />
                                </div>
                            )
                        })}
                    </div>
                </Tab>
            </Tabs>
        </>
    )
}

export default Projects
