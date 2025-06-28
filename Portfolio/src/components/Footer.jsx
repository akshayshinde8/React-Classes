import React, { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Smartphone, Globe, Database, Award, Users, Calendar, ChevronDown } from 'lucide-react';

const Footer = () => {
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
            {/* Footer */}
            <footer className="py-8 border-t border-gray-800">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 md:mb-0">
                            Akshay Shinde
                        </div>
                        <div className="flex space-x-6">

                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=akshayshinde01232@gmail.com&su=Let%27s%20Connect&body=Hi%20Akshay%2C%0D%0A%0D%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20a%20project%20opportunity."
                                target="_blank" rel="noopener noreferrer"
                                aria-label="Send Email"
                                className="text-gray-400 hover:text-purple-400 transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/akshayshinde2?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bu87dpuNrQSqaXA0AzT%2FO%2BQ%3D%3D"
                                target="_blank" rel="noopener noreferrer"
                                className="text-gray-400 hover:text-purple-400 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="https://github.com/akshayshinde8"
                                target="_blank" rel="noopener noreferrer"
                                className="text-gray-400 hover:text-purple-400 transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                    <div className="text-center text-gray-500 text-sm mt-6">
                        © 2025 Akshay Shinde. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer