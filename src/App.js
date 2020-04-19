import React, {useState} from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';
import About from './About';
import Projects from './Projects'
import Footer from './Footer'

const posts = [
    {
      title: "Most popular niches that drive traffic and make money",
      body: "The following niches are the most popular ones, so they have great traffic and income power. They’re a bit broad, but you can find an adequate micro-niche within them once you find your passion and figure out a way to improve people’s lives."
    },
    {
      title: "The OB Nurse by Pioneer Woman",
      body: "Seriously, the first time I read this post I laughed until I cried. Really. Every time I read it I laugh….and then I think about it during church and I laugh again. Read it."
    }
  ]

function App(props) {
    const [post, setPost] = useState(posts);

    return (
        <Router>
            <div>
                <nav className="App-nav">
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/blog">Blog</Link></li> 
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                    </ul >
                </nav>
                    <Route exact path="/" component={Home}/>
                    <Route path="/blog" render={() => <Blog posts={post}/>}/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/projects" component={Projects}/>
            </div>
            <div>
                <Footer />
            </div>
        </Router>
       
    );
}

export default App;