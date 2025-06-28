import React, { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Smartphone, Globe, Database, Award, Users, Calendar, ChevronDown } from 'lucide-react';
import img from "../assets/akshay.jpg"

const About = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const skills = [
        { name: "React Native", level: 90, category: "Mobile" },
        { name: "JavaScript", level: 85, category: "Language" },
        { name: "React", level: 88, category: "Frontend" },
        { name: "Firebase", level: 80, category: "Backend" },
        { name: "Node.js", level: 75, category: "Backend" },
        { name: "Java", level: 70, category: "Language" }
    ];

    return (
        <div>
            {/* About Section */}
            <section id="about" className="py-20 bg-gray-800/50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-purple-400 to-pink-400 p-1">
                                <div className="w-full h-full rounded-2xl bg-gray-800 flex items-center justify-center">
                                    <img
                                        src={img}
                                        alt="My Photo"
                                        className="w-full h-full object-cover object-[center_10%]"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="text-lg text-gray-300 mb-6">
                                I am a passionate React Native Developer with a Master's in Computer Applications and hands-on experience
                                building cross-platform mobile applications. Throughout my journey, I have developed expertise in modern
                                technologies and frameworks, always striving to create efficient and user-friendly solutions.
                            </p>
                            <p className="text-lg text-gray-300 mb-8">
                                My passion for frontend development is not only reflected in my extensive experience but also in the
                                enthusiasm and dedication I bring to each project.
                            </p>

                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-purple-400 mb-2">1+</div>
                                    <div className="text-gray-400">Years Experience</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-purple-400 mb-2">3+</div>
                                    <div className="text-gray-400">Projects Completed</div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
                                {skills.map((skill, index) => (
                                    <div key={index} className="space-y-2">
                                        <div className="flex justify-between">
                                            <span className="text-gray-300">{skill.name}</span>
                                            <span className="text-purple-400">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-2">
                                            <div
                                                className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full transition-all duration-1000"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About