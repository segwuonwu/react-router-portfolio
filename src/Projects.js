import React from 'react';


function Projects(props) {
    return (
        <div className="content">
            <div>
                <h1>This is the project page</h1>
            </div>
            <div>
                <h3>These are some of the projects I've worked on</h3>
                <div>
                    <img src='../public/Intropage.png' alt="project1"></img>
                </div>
                <div>
                    <img src="../public/gameover.png" alt="gameover"></img>
                </div>
            </div>
        </div>
    );
}

export default Projects;