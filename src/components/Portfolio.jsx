const Portfolio = () => {
    return (
        <section className="py-32 bg-gradient-to-br from-primary via-dark to-primary text-white relative overflow-hidden" id="portfolio">
            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-72 h-72 border-2 border-accent rotate-45"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 border-2 border-secondary -rotate-12"></div>
            </div>

            <div className="max-w-5xl mx-auto px-8 relative z-10">
                <div className="text-center">
                    <span className="inline-block text-sm tracking-[4px] uppercase text-accent mb-6 font-medium">
                        Projects Of Raux Brothers
                    </span>
                    <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-[3px]">
                        PORTFOLIO
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-10"></div>

                    <p className="text-2xl md:text-3xl font-body italic text-white/90 mb-8 leading-relaxed">
                        "Since our inception decades ago, we have built up an impressive collection of many different works,
                        but one thing has always been a constant - the timeless Raux Brothers style."
                    </p>

                    <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Let this portfolio stand in evidence of our commitment to excellence, showcasing beautifully crafted
                        spaces and furniture from resorts, bungalows, private residencies, and restaurants.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="#contact"
                            className="inline-block px-12 py-4 text-sm font-bold uppercase tracking-[2px] 
                                bg-accent text-primary hover:bg-white border-2 border-accent hover:border-white
                                transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                        >
                            View Full Portfolio
                        </a>
                        <a
                            href="#contact"
                            className="inline-block px-12 py-4 text-sm font-bold uppercase tracking-[2px] 
                                bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary
                                transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                        >
                            Get In Touch
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
