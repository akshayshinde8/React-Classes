import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwCZLMwAP-Fs5eOTAWWtBM5sBjtd_zHfpdvxF-JJaExk5NIp6XWVx4nmLIjk8fB2xaB5g/exec';
    const formData = new FormData(form);

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setMessage('Message sent successfully!');
        setTimeout(() => setMessage(''), 3000);
        form.reset();
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      setMessage('Error! Please try again later.');
      console.error('Submission error:', error);
    }
  };

  return (
    <div>
      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Get In{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-purple-400">Let's Talk</h3>
              <p className="text-gray-400 mb-8">
                I'm currently available to take on new projects. Let me know if you're interested
                in working together or have any questions about my work.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <a href="mailto:akshayshinde01232@gmail.com" className="hover:text-purple-400 transition-colors">
                    akshayshinde01232@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span>+91-9145542030</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span>Pune, Maharashtra</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="Name"
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    name="Email"
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Write your message here..."
                    name="Message"
                    rows="5"
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
                >
                  Send Message
                </button>
                {message && <p className="text-sm pt-2 text-green-400">{message}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;