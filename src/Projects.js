import React from 'react';
import intropage from './img/project2.png';
import gameover from './img/gameover.png';

function Projects(props) {
    return (
        <div className="content">
            <div>
                <h1>My Projects</h1>
            </div>
            <div>
                <h3>These are some of the projects I've worked on</h3>
                <div className="img1">
                    <img src={intropage} alt="project1" />
                    
                </div>
                <div className='img2'>
                    <img src={gameover} alt="gameover" />
                </div>
            </div>
        </div>
    );
}

export default Projects;