import React from 'react'

const About = () => {
    return (<>
        <div>
            <h4>About this app <span role="img" aria-label="think">💭</span> </h4>
            <hr />
            <span>
                This app uses react framework and react router.
                <br />
                It can:
                <ul>
                    <li>Create todo task</li>
                    <li>Show the current list of todo tasks</li>
                    <li>Delete the tasks</li>
                    <li>Saves the unattended(not deleted) tasks to be retrieved for next time :)</li>
                </ul>
            </span>
        </div>
    </>
    )
}

export default About
