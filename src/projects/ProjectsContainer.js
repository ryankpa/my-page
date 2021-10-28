import '../styles/Projects.css'

import ChickpeaDetails from "./Chickpea";

function Projects() {
    return (
        <div className="projects">
            <h2>Projects</h2>
            <section>
                <ChickpeaDetails />
                <ChickpeaDetails />
            </section>
        </div>
    );
}

export default Projects;