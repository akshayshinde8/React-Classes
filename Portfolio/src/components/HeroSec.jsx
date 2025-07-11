import React, { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Smartphone, Globe, Database, Award, Users, Calendar, ChevronDown } from 'lucide-react';
import img from "../assets/akshay.jpg"

const HeroSec = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <div className="mb-4">
                        <div className="w-36 h-36 mx-auto mt-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 p-1">
                            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                                <img
                                    src={img}
                                    alt="My Photo"
                                    className="w-full h-full object-cover object-top rounded-full"
                                />
                            </div>
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        I'm <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Akshay Shinde
                        </span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
                        React Native Developer based in Pune, Maharashtra
                    </h2>
                    <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                        Master's in Computer Applications with hands-on experience building cross-platform mobile apps.
                        Passionate about creating seamless user experiences with React Native and modern web technologies.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <a
                            href="#projects"
                            className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all flex items-center justify-center gap-2"
                        >
                            View My Work <ExternalLink className="w-4 h-4" />
                        </a>
                        <button
                            onClick={() => {
                                // Open in new tab
                                window.open("https://drive.google.com/file/d/1lUBhA9XVcNlwg228eYq7AQ_h-d7is2CB/view?usp=drive_link", "_blank");

                                // Trigger download
                                const link = document.createElement("a");
                                link.href = "https://drive.google.com/uc?export=download&id=1lUBhA9XVcNlwg228eYq7AQ_h-d7is2CB";
                                link.download = "Akshay-Shinde-Resume.pdf"; // You can name it anything
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }}
                            className="border border-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400/10 transition-all"
                        >
                            My Resume
                        </button>
                    </div>
                    <div className="flex justify-center space-x-6">
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=akshayshinde01232@gmail.com&su=Let%27s%20Connect&body=Hi%20Akshay%2C%0D%0A%0D%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20a%20project%20opportunity."
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Send Email"
                            className="text-gray-400 hover:text-purple-400 transition-colors"
                        >
                            <Mail className="w-6 h-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/akshayshinde2?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bu87dpuNrQSqaXA0AzT%2FO%2BQ%3D%3D"
                            target="_blank" rel="noopener noreferrer"
                            className="text-gray-400 hover:text-purple-400 transition-colors">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="https://github.com/akshayshinde8" target="_blank" rel="noopener noreferrer"
                            className="text-gray-400 hover:text-purple-400 transition-colors">
                            <Github className="w-6 h-6" />
                        </a>
                    </div>
                </div>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ChevronDown className="w-6 h-6 text-purple-400" />
                </div>
            </section>
        </div>
    )
}

export default HeroSec