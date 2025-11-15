const Portfolio = () => {
    return (
        <section className="py-32 bg-gradient-to-br from-primary to-dark text-white text-center" id="portfolio">
            <div className="max-w-4xl mx-auto px-8">
                <span className="inline-block text-sm tracking-[3px] uppercase text-accent mb-6 font-medium">
                    Our Work
                </span>
                <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 tracking-[2px]">
                    PORTFOLIO
                </h2>
                <p className="text-xl text-white/80 mb-12 leading-relaxed max-w-2xl mx-auto">
                    Explore our collection of beautifully crafted spaces and furniture that showcase our commitment to excellence.
                </p>
                <a
                    href="#contact"
                    className="inline-block px-12 py-4 text-sm font-semibold uppercase tracking-[1.5px] 
                        bg-accent text-primary hover:bg-white hover:shadow-2xl hover:-translate-y-1 
                        transition-all duration-300"
                >
                    View Full Portfolio
                </a>
            </div>
        </section>
    )
}

export default Portfolio
