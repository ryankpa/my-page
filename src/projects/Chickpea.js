import '../styles/ProjectDetails.css';
// importing images
import chickpea1 from "../assets/chickpea-images/chickpea1.png";
import chickpea2 from "../assets/chickpea-images/chickpea2.png";
import chickpea3 from "../assets/chickpea-images/chickpea3.png";

function ChickpeaDetails() {
    return (
        <div className="project_details">
            <section>
                <h3>Chickpea Grocery Delivery Web App</h3>
                <p>School Project</p>
                <p>February 2021 - May 2021</p>
                <p><em>Role: Full Stack</em> (more weight on backend)</p>
                <p>Used: Node.js, Express.js, React, Jest, MongoDB</p>
                <h4>Summary of Responsibilities</h4>
                <ul>
                    <li>Built CRUD operations for the app's database into its API</li>
                    <li>Integrated external packages for sessions, authentication, password hashing, and unit testing</li>
                    <li>Modeled EER diagram for the database</li>
                    <li>Created React components for user cart and checkout</li>     
                    <li>Designed company logo/website favicon</li>           
                </ul>
                <p>Detailed logs of my contributions to the project can be found at <a href="https://legumeslte.neocities.org/">my team's website</a>.</p>
            </section>
            <section>
                <img src={chickpea1} 
                alt="Screenshot of Chickpea's Account Information screen" />
                <img src={chickpea2} 
                alt="Screenshot of Chickpea's Cart screen" />
                <img src={chickpea3} 
                alt="Screenshot of Chickpea's API landing page, which includes documentation on how to interface with it" />
            </section>
        </div>
    )
}

export default ChickpeaDetails;