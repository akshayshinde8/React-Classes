// import React, { useEffect, useState } from 'react'


// const Navbar = () => {
//     const [isScrolled, setIsScrolled] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 50);
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <div>
//             {/* Navigation */}
//             <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'
//                 }`}>
//                 <div className="max-w-6xl mx-auto px-6 py-4">
//                     <div className="flex justify-between items-center">
//                         <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//                             Akshay Shinde
//                         </div>
//                         <div className="hidden md:flex space-x-8">
//                             {['Home', 'About', 'Projects', 'Contact'].map((item) => (
//                                 <a
//                                     key={item}
//                                     href={`#${item.toLowerCase()}`}
//                                     className="hover:text-purple-400 transition-colors cursor-pointer"
//                                     onClick={() => setActiveSection(item.toLowerCase())}
//                                 >
//                                     {item}
//                                 </a>
//                             ))}
//                         </div>
//                         <a
//                             href="https://drive.google.com/file/d/1lUBhA9XVcNlwg228eYq7AQ_h-d7is2CB/view?usp=drive_link"
//                             target="_blank" rel="noopener noreferrer"
//                             className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
//                         >
//                             Resume
//                         </a>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     )
// }

// export default Navbar

import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigationItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    const handleMobileMenuClick = (href) => {
        setIsMobileMenuOpen(false);
        // Smooth scroll to section
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

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

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-8">
                            {navigationItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="hover:text-purple-400 transition-colors cursor-pointer"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>

                        {/* Desktop Resume Button */}
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
                            className="hidden md:block bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
                        >
                            Resume
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Sidebar Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Sidebar */}
            <div className={`fixed top-0 right-0 h-full w-80 bg-gray-900 border-l border-gray-800 transform transition-transform duration-300 ease-in-out z-50 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <div className="p-6">
                    {/* Mobile Header */}
                    <div className="flex justify-between items-center mb-8">
                        <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Navigation
                        </div>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
                            aria-label="Close mobile menu"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Mobile Navigation Items */}
                    <div className="space-y-4">
                        {navigationItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => handleMobileMenuClick(item.href)}
                                className="block py-3 px-4 rounded-lg hover:bg-gray-800 hover:text-purple-400 transition-all duration-200 text-lg font-medium border border-gray-700 hover:border-purple-400/50"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Resume Button */}
                    <div className="mt-8 pt-6 border-t border-gray-700">
                        <button
                            onClick={() => {
                                setIsMobileMenuOpen(false); // Close the mobile menu
                                // Open in new tab
                                window.open(
                                    "https://drive.google.com/file/d/1lUBhA9XVcNlwg228eYq7AQ_h-d7is2CB/view?usp=drive_link",
                                    "_blank"
                                );
                                // Trigger download
                                const link = document.createElement("a");
                                link.href = "https://drive.google.com/uc?export=download&id=1lUBhA9XVcNlwg228eYq7AQ_h-d7is2CB";
                                link.download = "Akshay-Shinde-Resume.pdf";
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }}
                            className="block w-full text-center bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all font-medium"
                        >
                            Download Resume
                        </button>
                    </div>

                    {/* Mobile Footer */}
                    <div className="absolute bottom-6 left-6 right-6">
                        <div className="text-center text-gray-500 text-sm">
                            © 2025 Akshay Shinde
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar