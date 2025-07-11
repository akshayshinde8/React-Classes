import React, { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Smartphone, Globe, Database, Award, Users, Calendar, ChevronDown } from 'lucide-react';

const Project = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const projects = [
        {
            title: "Trenzon",
            tech: "React Native, Firebase, Context API",
            date: "April 2025",
            description: "Cross-platform e-commerce app serving 1000+ users with product listing, cart, wishlist, and checkout features.",
            highlights: [
                "Enhanced user engagement by 20%",
                "Boosted responsiveness by 30% with Firestore",
                "Improved UI responsiveness by 25% with Context API"
            ],
            type: "Mobile App",
            link: "https://github.com/akshayshinde8/React-Native-Classes/tree/main/EcomApp"
        },
        {
            title: "SocialSync",
            tech: "React, Tailwind CSS, Node.js, Express.js, MongoDB",
            date: "March 2025",
            description: "Full-stack social platform with 10+ features including posts, likes, comments, and profile management.",
            highlights: [
                "Supports 100+ user actions",
                "Improved data handling efficiency by 30%",
                "2s load times with optimized deployment"
            ],
            type: "Web App",
            link: "https://github.com/rajgit5/SocialSync"
        },
        {
            title: "Stride Sports",
            tech: "HTML, CSS, JavaScript, Firebase",
            date: "Feb 2025",
            description: "Reebok e-commerce clone with 20+ product pages and essential shopping functionalities.",
            highlights: [
                "Managed 10+ pull requests in team",
                "Implemented 5+ key features",
                "Resolved 15+ software issues"
            ],
            type: "E-commerce",
            link: "https://github.com/ankithmandal09/B42_Web_024_Scripting-Sorcerers"
        }
    ];

    return (
        <div>
            {/* Projects Section */}
            <section id="projects" className="py-20 bg-gray-800/50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            My Latest <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Work</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-400/50 transition-all group">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">
                                        {project.type}
                                    </span>
                                    <span className="text-sm text-gray-500">{project.date}</span>
                                </div>

                                <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 mb-4">{project.description}</p>

                                <div className="mb-4">
                                    <div className="text-sm text-purple-400 mb-2">Technologies:</div>
                                    <div className="text-sm text-gray-300">{project.tech}</div>
                                </div>

                                <div className="space-y-2">
                                    <div className="text-sm text-purple-400">Key Achievements:</div>
                                    {project.highlights.map((highlight, idx) => (
                                        <div key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                                            <div className="w-1 h-1 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                                            {highlight}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 pt-4 border-t border-gray-700 flex justify-between">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-purple-400 hover:text-purple-300 transition-colors text-sm flex items-center gap-1">
                                        View Project <ExternalLink className="w-3 h-3" />
                                    </a>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-purple-400 hover:text-purple-300 transition-colors text-sm flex items-center gap-1">
                                        Live Demo <ExternalLink className="w-3 h-3" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Project