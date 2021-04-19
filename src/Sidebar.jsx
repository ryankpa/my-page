import './App.css';
import React from 'react'
import { Link } from "react-router-dom";
import myIcon from './assets/icon.png';

class Sidebar extends React.Component {
    render(){
        return(
            <div className="min-h-screen absolute top-0 right-0 lg:relative lg:col-span-1">
                <nav id="sidebar" className="min-h-screen w-60 lg:w-full bg-yellow-400 p-8 shadow-xl">
                    <img className="rounded-full min-w-xs border-2 border-white p-2 m-auto" src={myIcon} alt="A drawing of myself that I made"></img>
                    <div className="text-2xl text-center font-medium tracking-wide font-sans pb-6">
                    Ryan Atienza
                    </div>
                    <ul className="text-2xl lg:text-lg text-center" id="navigation">
                        <li>
                            <Link to="/"><button>Home</button></Link>
                        </li>
                        <li>
                            <Link to="/about"><button>About</button></Link>
                        </li>
                        <li>
                            <Link to="/contact"><button>Contact</button></Link>
                        </li>
                    </ul>
                </nav>
                <button className="lg:hidden fixed bottom-0 right-0 p-2 bg-white rounded-lg">Toggle Sidebar</button>
            </div>
        );
    }
}

export default Sidebar;