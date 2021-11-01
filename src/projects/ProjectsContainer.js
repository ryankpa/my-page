import '../styles/Projects.css'

import ChickpeaDetails from "./Chickpea";
import FroggierDetails from './Froggier';

function Projects() {
    return (
        <div className="projects">
            <h2>Projects</h2>
            <section>
                <ChickpeaDetails />
                <FroggierDetails />
            </section>
        </div>
    );
}

export default Projects;