import '../styles/ProjectDetails.css';
import Gallery from '../Gallery';
import { useEffect } from 'react';
import { useState } from 'react';

import froggier from '../assets/froggier-images/froggier.png';

function createImageArray(){
    let img_array = [];
    img_array.push({
        image: froggier,
        alt: "Collection of Froggier screenshots; includes its main menu and gameplay"
    });
    return img_array;
}

function FroggierDetails() {
    var FroggierImages = createImageArray();
    const[computedHeight, setHeight] = useState(0);

    useEffect(() => {
        var descElement = document.getElementById('froggier_desc');
        var computedStyle = window.getComputedStyle(descElement);
        setHeight(computedStyle.getPropertyValue('height'));
    }, []);
    return(
        <div className='project_details'>
            <section id='froggier_desc'>
                <h3>Froggier</h3>
                <p className="project_duration">Apr 2021 - May 2021</p>
                <div className='description'>
                    <p>Clone of classic game Frogger | School Project</p>
                    <p>Role: <strong>Game Developer</strong></p>
                    <p>Used: Godot</p>
                    <h4>Responsibilities</h4>
                    <ul>
                        <li>Implemented frog's grid movement mechanics</li>
                        <li>Defined collision shapes and masks for objects</li>
                        <li>Assisted with building the collision logic</li>
                        <li>Added Reaper enemy's steering functionality</li>
                        <li>Created one-page design for general level design/progression</li>
                    </ul>
                    <p>Play the game on <a href="https://fortepup.itch.io/froggier">itch.io</a>! (only supports keyboard controls).</p>
                </div>
            </section>
            <section style={{height: computedHeight}}>
                { /* NOTE: figure out way to fix the way froggier screenshots are presented */ }
                <Gallery imageArray={FroggierImages}/>
            </section>
        </div>
    );
}

export default FroggierDetails;