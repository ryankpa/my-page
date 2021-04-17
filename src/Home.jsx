import './App.css';
import React from 'react';

class Home extends React.Component {

    render() {
        return (
            <div className="content p-8 text-left">
                <div className="">
                    <h1 className="text-5xl font-bold fade-in mb-5 text-center">Welcome to my page!</h1>
                    <p className="pb-5 text-center">This site is still under construction!</p>
                </div>
                <div className="fade-in">
                    <h2 className="text-3xl text-white bg-gradient-to-r from-yellow-400 to-blue-300 p-5 rounded-md shadow-lg w-48">Who am I?</h2>
                    <p className="p-5">
                        My name is Ryan Kevin Atienza, and I'm a recent university graduate. I earned my B.S. in Computer Science 
                        from California State Polytechnic University, Pomona in May '21. Because of their "learn by doing" pedagogy,
                        I've done hands-on work on real-life projects like a <a href="https://chickpea.glitch.me" target="_blank" rel="noopener noreferrer"> mock grocery delivery web app </a> 
                        and <a href="https://fortepup.itch.io/" target="_blank" rel="noopener noreferrer"> a few small browser games</a>. My interests
                        are in web development with more preference towards frontend work (though I don't mind doing some work on the backend) and in 
                        game development. 
                    </p>
                    <p className="px-5">
                        Outside of programming software, I enjoy playing video games and creating digital art.
                    </p>
                </div>
            </div>
        );
    }

}

export default Home;