import splash_full from './assets/splash_full.png'
import splash_mobile from './assets/splash_mobile.png'
import './styles/LandingPage.css';

function LandingPage() {
    return(
        <div id="landing-page">
            <div class="flex">
                <div id='info-card'>
                    <h1 id="title">
                        Ryan Atienza
                    </h1>
                    <h2>
                        Web Developer | Digital Illustrator
                    </h2>
                    <p>*This site is still under construction</p>
                    <ul>
                        <li><a href="https://linkedin.com/in/ryankpa">LinkedIn</a></li>
                        <li><a href="https://github.com/ryankpa">GitHub</a></li>
                        <li>Resume</li>
                    </ul>
                </div>
                <img src={splash_full} class="full" alt="Illustration of myself working in front of a laptop"/>
                <img src={splash_mobile} class="mobile" alt="Illustration of myself working in front of a laptop" />
            </div>
        </div>
    );
}

export default LandingPage;