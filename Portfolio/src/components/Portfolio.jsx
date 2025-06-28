import Navbar from './Navbar';
import HeroSec from './HeroSec';
import About from './About';
import Education from './Education';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';

const Portfolio = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Navbar />
            <HeroSec />
            <About />
            <Education />
            <Project />
            <Contact />
            <Footer />
        </div>
    );
};

export default Portfolio;