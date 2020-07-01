import React from 'react'

function About({ heroText, about, mission }) {
    return (
        <div className="about">
            <div className="about-content">
                <div className="heading-wrapper mb-md">
                    <h1 className="heading-primary">{heroText}</h1>
                </div>
                <div className="paragraph regular-text">
                    <h4 className="heading-secondary">{about.title}</h4>
                    <p className="description">{about.text}</p>
                </div>
                <div className="paragraph regular-text">
                    <h4 className="heading-secondary">{mission.title}</h4>
                    <p className="description">{mission.text}</p>
                </div>
            </div>
        </div>

    )
}

export default About
