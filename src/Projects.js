import React from 'react';
import gameover from '../public/img/gameover.png';

let gameOver = {
    gameOver: gameover
}

function Projects(props) {
    return (
        <div className="content">
            <div>
                <h1>My Projects</h1>
            </div>
            <div>
                <h3>These are some of the projects I've worked on</h3>
                <div>
                    <img src="" alt="project1" />
                    
                </div>
                <div>
                    <img src={gameOver.gameOver} alt="gameover" />
                </div>
            </div>
        </div>
    );
}

export default Projects;