import React, { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Smartphone, Globe, Database, Award, Users, Calendar, ChevronDown } from 'lucide-react';

const Education = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const certifications = [
        { name: "Java Programming - NPTEL", link: "https://drive.google.com/file/d/1niSupwX7PytK_2LW3MlRWe9OIUGRi7fJ/view?usp=sharing" },
        { name: "PHP and MySQL - IIT Bombay", link: "https://drive.google.com/file/d/1_3hVIruJKQTlRNM0WIrfpj6ZgiY8RsF9/view?usp=sharing" },
        { name: "XTO10X Hackathon Completion - Masai School", link: "https://drive.google.com/file/d/1zVSXTY46YndvXdfmBsBRInkIFU3-qzYi/view?usp=sharing" },
    ];

    return (
        <div>
            {/* Education Section */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            Education & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Certifications</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                            <h3 className="text-xl font-semibold mb-4 text-purple-400">Education</h3>
                            <div className="space-y-4">
                                <div className="border-l-2 border-purple-400 pl-4">
                                    <h4 className="font-semibold">Master of Computer Applications (MCA)</h4>
                                    <p className="text-gray-400">GES's R. H. Sapat College of Engineering</p>
                                    <p className="text-sm text-gray-500">Sep 2022 - June 2024 • CGPA: 7.4</p>
                                </div>
                                <div className="border-l-2 border-purple-400 pl-4">
                                    <h4 className="font-semibold">Software Development</h4>
                                    <p className="text-gray-400">Masai School, Bengaluru</p>
                                    <p className="text-sm text-gray-500">Sep 2024 - Present</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                            <h3 className="text-xl font-semibold mb-4 text-purple-400">Certifications</h3>
                            <div className="space-y-3">
                                {certifications.map((cert, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <Award className="w-5 h-5 text-purple-400" />
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-purple-400 hover:underline transition-all duration-200"
                                        >{cert.name}</a>
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

export default Education