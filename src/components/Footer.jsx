const Footer = () => {
    return (
        <footer className="bg-primary text-white py-16">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-heading font-bold tracking-[0.2em] mb-4">
                            RAUX BROTHERS
                        </h3>
                        <p className="text-white/70 mb-4 leading-relaxed">
                            Crafting timeless furniture and elegant spaces since 1959.
                        </p>
                        <p className="text-xs text-white/50 tracking-wider">
                            EST. 1959
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-heading font-semibold mb-4 tracking-wide">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {['Home', 'About', 'Products', 'Services', 'Portfolio', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a
                                        href={`#${link.toLowerCase()}`}
                                        className="text-white/70 hover:text-accent transition-colors text-sm"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-heading font-semibold mb-4 tracking-wide">
                            Stay Updated
                        </h4>
                        <p className="text-white/70 text-sm mb-4">
                            Subscribe to our newsletter for latest updates.
                        </p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 
                                    focus:border-accent focus:outline-none text-sm text-white placeholder-white/50"
                            />
                            <button
                                type="submit"
                                className="px-6 py-2 bg-accent text-primary font-semibold text-sm 
                                    hover:bg-white transition-colors"
                            >
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 text-center">
                    <p className="text-white/50 text-sm">
                        © {new Date().getFullYear()} Raux Brothers. All rights reserved. | Crafted with excellence.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
