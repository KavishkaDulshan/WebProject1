const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-br from-[#f0ebe5] via-[#f5f0ea] to-[#ebe6e0] overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute top-0 left-0 right-0 bottom-0"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 1px 1px, #8b7355 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}
                ></div>
            </div>

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 md:px-8 pt-12 pb-8 md:pt-16 md:pb-12 relative z-10">
                {/* Top Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
                    {/* Company Info */}
                    <div>
                        <div className="mb-5 md:mb-6">
                            <h3 className="text-3xl md:text-4xl font-logo font-semibold text-primary mb-2 tracking-[0.12em] md:tracking-[0.15em] leading-tight">
                                RAUX<br />BROTHERS
                            </h3>
                            <p className="text-[10px] md:text-xs text-secondary tracking-[0.25em] md:tracking-[0.3em] font-semibold uppercase mb-3">
                                Established 1959
                            </p>
                            <div className="w-12 md:w-16 h-0.5 bg-secondary mb-4 md:mb-6"></div>
                        </div>
                        <p className="text-gray-600 leading-relaxed font-body text-sm md:text-sm">
                            At the heart of our company lies a desire to create furnishings that delight our customers.
                            From resorts to private residencies, we bring timeless elegance to every space.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-sm md:text-base font-heading font-bold mb-4 md:mb-6 text-primary uppercase tracking-[1.5px] md:tracking-[2px]">
                            Contact Us
                        </h4>
                        <div className="space-y-3 md:space-y-4">
                            <div className="flex items-center gap-3 text-gray-700">
                                <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                                <a href="tel:+94112594495" className="hover:text-secondary transition-colors font-body text-sm">
                                    +94 112 594 495
                                </a>
                            </div>
                            <div className="flex items-center gap-3 text-gray-700">
                                <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                <a href="mailto:sales@rauxbrothers.com" className="hover:text-secondary transition-colors font-body text-sm break-all">
                                    sales@rauxbrothers.com
                                </a>
                            </div>
                            <div className="flex items-start gap-3 text-gray-700">
                                <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                <span className="font-body text-sm">
                                    Raux Brothers Concept Store<br />
                                    Colombo, Sri Lanka
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 className="text-sm md:text-base font-heading font-bold mb-4 md:mb-6 text-primary uppercase tracking-[1.5px] md:tracking-[2px]">
                            Follow Our Journey
                        </h4>
                        <div className="flex flex-wrap gap-2.5 md:gap-3">
                            <a href="https://web.facebook.com/RauxBrothersSL/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-lg bg-[#1877F2] hover:bg-[#0d65d9]
                                    flex items-center justify-center transition-all duration-300 
                                    hover:scale-110 hover:shadow-lg">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a href="https://twitter.com/RauxBrothers"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-lg bg-black hover:bg-gray-800
                                    flex items-center justify-center transition-all duration-300 
                                    hover:scale-110 hover:shadow-lg">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/rauxbrothers/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FD1D1D]
                                    flex items-center justify-center transition-all duration-300 
                                    hover:scale-110 hover:shadow-lg">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/company/raux-brothers"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-lg bg-[#0A66C2] hover:bg-[#004182]
                                    flex items-center justify-center transition-all duration-300 
                                    hover:scale-110 hover:shadow-lg">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links & Newsletter Combined */}
                    <div>
                        <h4 className="text-sm md:text-base font-heading font-bold mb-4 md:mb-6 text-primary uppercase tracking-[1.5px] md:tracking-[2px]">
                            Quick Links
                        </h4>
                        <ul className="space-y-1.5 md:space-y-2 mb-6 md:mb-8">
                            {[
                                { name: 'Home', href: '#home' },
                                { name: 'About Us', href: '#about' },
                                { name: 'Our Products', href: '#products' },
                                { name: 'Services', href: '#services' },
                                { name: 'Contact', href: '#contact' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-600 hover:text-secondary transition-colors font-body text-sm
                                            inline-flex items-center gap-2 group"
                                    >
                                        <svg className="w-3 h-3 text-secondary opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Newsletter */}
                        <div>
                            <h4 className="text-sm md:text-base font-heading font-bold mb-3 md:mb-4 text-primary uppercase tracking-[1.5px] md:tracking-[2px]">
                                Newsletter
                            </h4>
                            <p className="text-gray-600 text-xs mb-3 md:mb-4 font-body leading-relaxed">
                                Subscribe for exclusive updates and design inspiration.
                            </p>
                            <form className="space-y-3">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full px-4 py-3 border-2 border-gray-200 
                                        focus:border-secondary focus:outline-none text-xs
                                        transition-all duration-300 font-body hover:border-gray-300 bg-white"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="group relative w-full px-6 py-3 text-xs font-bold uppercase tracking-[2px] 
                                        bg-primary text-white overflow-hidden
                                        transition-all duration-300 hover:shadow-xl
                                        border-2 border-primary"
                                >
                                    <span className="relative z-10">Subscribe</span>
                                    <span className="absolute inset-0 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t-2 border-gray-100 pt-6 md:pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
                        <p className="text-gray-500 text-xs md:text-sm font-body text-center md:text-left">
                            © {new Date().getFullYear()} Raux Brothers (Pvt) Ltd. All rights reserved.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-400 font-body italic">
                            <span>Crafted with excellence since 1959</span>
                            <span className="w-1 h-1 bg-secondary rounded-full"></span>
                            <span>Where art meets life</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
