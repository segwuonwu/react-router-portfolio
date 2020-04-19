import React from 'react';
import './App.css'

var phantom = {
    display: 'block',
    padding: '20px',
    height: '60px',
    width: '100%',
  }

function Footer(props) {
    return (
        <div>
            <div style={phantom}></div>
            <footer class="footer">
                <div>
                    <a href="https://github.com/segwuonwu">Github</a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/solomonegwuonwu/">Linkedin</a>
                </div>
                    <p>Made with <span role="img">❤️</span> by Solomon Egwuonwu</p>
                    <p>© Copright 2020</p>
            </footer>
        </div>
    );
}

export default Footer;