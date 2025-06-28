import React, { useEffect, useState } from 'react'


const Navbar = () => {
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
            {/* Navigation */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'
                }`}>
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Akshay Shinde
                        </div>
                        <div className="hidden md:flex space-x-8">
                            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="hover:text-purple-400 transition-colors cursor-pointer"
                                    onClick={() => setActiveSection(item.toLowerCase())}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                        <a
                            href="https://drive.google.com/file/d/1lUBhA9XVcNlwg228eYq7AQ_h-d7is2CB/view?usp=drive_link"
                            target="_blank" rel="noopener noreferrer"
                            className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar