import React, { useState } from 'react'
import Education from './resume/Education';
import Programming from './resume/Programming';
import Projects from './resume/Projects';
import Work from './resume/Work';

function Resume() {

    const education_details = [
        {
            "id": 1,
            "university_name":"National Insititute of Technology, Jamshedpur",
            "unviversity_degree":"Master of Computer Applications",
            "start_year": 2018,
            "end_year": 2021
        },
        {
            "id": 2,
            "university_name":"Panjab Univeristy, Chandigarh",
            "unviversity_degree":"Bachelor of Computer Applications",
            "start_year": 2015,
            "end_year": 2018
        },
        {
            "id": 3,
            "university_name":"Central Board of Secondary Education.",
            "unviversity_degree":"High School Education",
            "start_year": 2014,
            "end_year": 2015
        }
    ];

    const work_details = [
        {
            "id:": 1,
            "company_name": "Jugnoo",
            "position": "Associate Software Engineer",
            "start_month": "July",
            "start_year": "2021",
            "end_month":"",
            "end_year": "Present",
            "descriptions": [
                "Develop and maintain Backend for apps and web panels",
                "Setting up applications and deploying them on the cloud (AWS).",
                "Writing and optimizing APIs and Database Queries.",
                "Debugging production issues.",
                "Solely responsible for the delivery platform(Fatafat and Menus).",
                "Created OPEN APIs and documentation with multiple levels of security.",
                "Integrating various third-party solutions like payment gateways, customer KYC, marketing modules, etc.",
                "Mentoring juniors, actively performing code reviews and discussions.",
                "Actively participating in providing solutions for new features with managers and clients."
            ]
        },
        {
            "id:": 2,
            "company_name": "Jugnoo",
            "position": "Software Engineer Intern",
            "start_month": "January",
            "start_year": "2021",
            "end_month":"June",
            "end_year": "2021",
            "descriptions": [
                "Develop and maintain Backend for apps and web panels",
                "Setting up applications and deploying them on the cloud (AWS).",
                "Writing and optimizing APIs and Database Queries.",
                "Debugging production issues.",
                "Solely responsible for the delivery platform(Fatafat and Menus).",
                "Created OPEN APIs and documentation with multiple levels of security.",
                "Integrating various third-party solutions like payment gateways, customer KYC, marketing modules, etc.",
                "Mentoring juniors, actively performing code reviews and discussions.",
                "Actively participating in providing solutions for new features with managers and clients."
            ]
        },
        {
            "id:": 3,
            "company_name": "Career Dreams Education",
            "position": "Software Developer Intern",
            "start_month": "December",
            "start_year": "2020",
            "end_month":"March",
            "end_year": "2021",
            "descriptions": [
                "Develop and maintain Intern Management System from Scratch",
                "Making optimal Database Model using MySQL",
                "Writing Complex Database Queries.",
                "Debugging issues.",
                "Taking Interviews, Mentoring juniors, actively performing code reviews and discussions.",
            ]
        },
    ];

    const programming_details = [
        {
            "id": 1,
            "language": "NodeJS",
            "percentage": "80"
        },
        {
            "id": 2,
            "language": "ReactJS",
            "percentage": "75"
        },
        {
            "id": 3,
            "language": "Javascript",
            "percentage": "90"
        },
        {
            "id": 4,
            "language": "C++",
            "percentage": "85"
        },
        {
            "id": 5,
            "language": "HTML",
            "percentage": "90"
        },
        {
            "id": 6,
            "language": "CSS",
            "percentage": "85"
        },
        {
            "id": 7,
            "language": "Bootstrap",
            "percentage": "90"
        },
        {
            "id": 8,
            "language": "PHP",
            "percentage": "75"
        },
        {
            "id": 9,
            "language": "MySQL",
            "percentage": "80"
        },
        {
            "id": 10,
            "language": "MongoDB",
            "percentage": "80"
        },
        {
            "id": 11,
            "language": "GIT",
            "percentage": "85"
        },
    ];

    const project_details = [
        {
            "id": 1,
            "app_name":"E-Commerce",
            "techs": [
                "ReactJS", "NodeJS", "ExpressJS", "MongoDB",  "HTML5", "CSS3", "Bootstrap"
            ]
        },
        {
            "id": 2,
            "app_name":"Weather App",
            "techs": [
                "NodeJS", "ExpressJS", "HTML5", "CSS3"
            ]
        },
        {
            "id": 3,
            "app_name":"Book Publication",
            "techs": [
                "ReactJS", "HTML5", "CSS3", "Javascript", "Bootstrap"
            ]
        },
        {
            "id": 4,
            "app_name":"Hotel Booking",
            "techs": [
                "ReactJS", "NodeJS", "ExpressJS", "MongoDB"
            ]
        },
        {
            "id": 5,
            "app_name":"Appointment Booking",
            "techs": [
                "ReactJS", "Bootstrap"
            ]
        },
    ];

    const volunteer_details = [
        {
            "id": 1,
            "volunteering_job": "DIGITAL MEDIA MARKETING INTERN",
            "organisation": "Hamari Pahchan NGO",
            "start_month": "June",
            "start_year": "2020",
            "end_month": "July",
            "end_year": "2020",
            "description": [
                "Creating Posters For NGO.",
                "Help in Raising Funds for the NGO.",
                "Creating Social Awareness Regarding Illiterate Women"
            ]
        },
        {
            "id": 2,
            "volunteering_job": "JOINT CORE",
            "organisation": "CULFEST-CULTURAL FEST OF NIT JAMSHEDPUR",
            "start_month": "August",
            "start_year": "2018",
            "end_month": "July",
            "end_year": "2019",
            "description": [
                "Responible for managing different Fests and Activities.",
                "Team Management",
                "Guiding Juniors to work properly"
            ]
        }
    ];

    const [education, setEducation] = useState(true);
    const [work, setWork] = useState(false);
    const [projects, setProjects] = useState(false);
    const [programming, setProgramming] = useState(false);

    function setAllFalse(){
        setEducation(false);
        setWork(false);
        setProgramming(false);
        setProjects(false);
    }

    function changeState(functionName, value){
        setAllFalse();
        functionName(value)
    }

    return (
        <div className='resume-section d-flex flex-column' id='resume'>
            <span className='resume-heading text-center'>Resume</span>
            <span className='resume-sub-heading text-center'>My Formal Bio Details</span>
            <div className='row inner-section my-2'>
                <div className='col-lg-4 col-md-4 col-sm-12 left d-flex flex-row px-0'>
                    <div className='d-flex flex-column bg-new text-white'>
                        <span className='icon-span'>
                            <i className="fa fa-user-graduate"></i>
                        </span>
                        <span className='icon-span'>
                            <i className="fa fa-briefcase"></i>
                        </span>
                        <span className='icon-span'>
                            <i className="fa fa-laptop-code"></i>
                        </span>
                        <span className='icon-span'>
                            <i className="fas fa-tasks"></i>
                        </span>
                    </div>
                    <div className='d-flex flex-column bg-white'>
                        <span className={education ? "resume-option-items selected" : "resume-option-items"} onClick={() => {changeState(setEducation, true)}}>Education</span>
                        <span className={work ? "resume-option-items selected" : "resume-option-items"} onClick={() => {changeState(setWork, true)}}>Work</span>
                        <span className={programming ? "resume-option-items selected" : "resume-option-items"} onClick={() => {changeState(setProgramming, true)}}>Programming</span>
                        <span className={projects ? "resume-option-items selected" : "resume-option-items"} onClick={() => {changeState(setProjects, true)}}>Projects</span>
                    </div>
                </div>
                <div className='col-lg-8 col-md-8 col-sm-12 right bg-white'>
                    {education && <Education education_details={education_details}/>}
                    {work && <Work work_details={work_details}/>}
                    {programming && <Programming programming_details={programming_details}/>}
                    {projects && <Projects project_details={project_details}/>}
                </div>
            </div>
        </div>
    )
}

export default Resume
