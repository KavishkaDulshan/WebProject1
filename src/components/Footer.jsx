const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-primary via-dark to-primary text-white relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-1/4 w-96 h-96 border border-accent rounded-full"></div>
                <div className="absolute bottom-0 right-1/4 w-64 h-64 border border-secondary rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-8 py-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-accent flex items-center justify-center">
                                <span className="text-2xl text-primary font-bold">R</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-logo font-bold tracking-[0.25em]">
                                    RAUX BROTHERS
                                </h3>
                                <p className="text-xs text-accent tracking-[0.3em] font-medium">
                                    EST. 1959
                                </p>
                            </div>
                        </div>
                        <p className="text-white/80 mb-6 leading-relaxed font-body text-base max-w-md">
                            At the heart of our company lies a desire to create furnishings that delight our customers.
                            From resorts to private residencies, we bring timeless elegance to every space.
                        </p>
                        <div className="flex gap-3">
                            <a href="https://web.facebook.com/RauxBrothersSL/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 hover:bg-accent backdrop-blur-sm 
                                    flex items-center justify-center transition-all duration-300 
                                    hover:scale-110 border border-white/20 hover:border-accent">
                                <span className="text-sm">f</span>
                            </a>
                            <a href="https://twitter.com/RauxBrothers"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 hover:bg-accent backdrop-blur-sm 
                                    flex items-center justify-center transition-all duration-300 
                                    hover:scale-110 border border-white/20 hover:border-accent">
                                <span className="text-sm">𝕏</span>
                            </a>
                            <a href="https://www.instagram.com/rauxbrothers/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 hover:bg-accent backdrop-blur-sm 
                                    flex items-center justify-center transition-all duration-300 
                                    hover:scale-110 border border-white/20 hover:border-accent">
                                <span className="text-sm">📷</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-heading font-bold mb-6 tracking-[2px] uppercase border-b border-white/20 pb-3">
                            Navigation
                        </h4>
                        <ul className="space-y-3">
                            {['Home', 'About', 'Products', 'Services', 'Portfolio', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a
                                        href={`#${link.toLowerCase()}`}
                                        className="text-white/70 hover:text-accent transition-colors text-sm 
                                            font-body inline-flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-4 h-[1px] bg-accent transition-all duration-300"></span>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-heading font-bold mb-6 tracking-[2px] uppercase border-b border-white/20 pb-3">
                            Newsletter
                        </h4>
                        <p className="text-white/70 text-sm mb-4 font-body leading-relaxed">
                            Subscribe for exclusive updates and design inspiration.
                        </p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 
                                    focus:border-accent focus:outline-none text-sm text-white placeholder-white/50
                                    backdrop-blur-sm transition-colors font-body"
                            />
                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-accent text-primary font-bold text-sm 
                                    hover:bg-white transition-all duration-300 uppercase tracking-wider
                                    hover:shadow-lg hover:-translate-y-0.5"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white/50 text-sm font-body">
                            © {new Date().getFullYear()} Raux Brothers. All rights reserved.
                        </p>
                        <p className="text-white/40 text-xs font-body italic">
                            Where art meets life • Crafted with excellence since 1959
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
