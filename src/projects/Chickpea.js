import '../styles/ProjectDetails.css';
import Gallery from '../Gallery'

// importing images
import chickpea1 from "../assets/chickpea-images/chickpea1.png";
import chickpea2 from "../assets/chickpea-images/chickpea2.png";
import chickpea3 from "../assets/chickpea-images/chickpea3.png";
import chickpea4 from "../assets/chickpea-images/chickpea4.png";
import { useEffect } from 'react';
import { useState } from 'react';

function createImageArray(){
    let img_array = [];
    img_array.push({
        image: chickpea1,
        alt_text: "Screenshot of Chickpea's Account Information screen"
    });
    img_array.push({
        image: chickpea2,
        alt_text: "Screenshot of Chickpea's Cart screen"
    });
    img_array.push({
        image: chickpea3,
        alt_text: "Screenshot of Chickpea's API landing page, which includes documentation on how to interface with it"
    });
    img_array.push({
        image: chickpea4,
        alt_text: "Screenshot of Chickpea's landing page"
    });
    return img_array;
}

function ChickpeaDetails() {
    var images = createImageArray();
    const[computedHeight, setHeight] = useState(0);

    useEffect(() => {
        var descElement = document.getElementById('chickpea_desc');
        var computedStyle = window.getComputedStyle(descElement);
        setHeight(computedStyle.getPropertyValue('height'));
    }, []);

    return (
        <div className="project_details">
            <section id='chickpea_desc'>
                <h3>Chickpea</h3>
                <p className="project_duration">Feb 2021 - May 2021</p>
                <div className="description">
                    <p>Grocery Delivery Web App | School Project</p>
                    <p>Role: <strong>Full Stack</strong> (more weight on backend)</p>
                    <p>Used: Node.js, Express.js, React, Jest, MongoDB</p>
                    <h4>Responsibilities</h4>
                    <ul>
                        <li>Built CRUD operations for the app's database into its API</li>
                        <li>Integrated external packages for sessions, authentication, password hashing, and unit testing</li>
                        <li>Modeled EER diagram for the database</li>
                        <li>Created React components for user cart and checkout</li>     
                        <li>Designed company logo/website favicon</li>           
                    </ul>
                    <p>Detailed logs of my contributions to the project can be found at <a href="https://legumeslte.neocities.org/">my team's website</a>.</p>
                </div>
            </section>
            <section style={{height: computedHeight}}>
                <Gallery imageArray={images} />
            </section>
        </div>
    )
}

export default ChickpeaDetails;