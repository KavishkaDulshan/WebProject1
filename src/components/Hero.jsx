const Hero = () => {
    return (
        <section className="min-h-[500px] h-auto md:h-screen md:min-h-[600px] md:max-h-none relative flex items-center justify-center text-center text-white overflow-hidden pt-24 pb-12 md:pt-0 md:pb-0" id="home">
            {/* Background Image - Desktop */}
            <div className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000')`,
            }}></div>

            {/* Background Image - Mobile */}
            <div className="md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800')`,
                backgroundPosition: 'center 40%'
            }}></div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-dark/85 via-primary/75 to-dark/85"></div>

            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='1' height='1' fill='%23ffffff' opacity='0.05'/%3E%3C/svg%3E")`,
                backgroundSize: '50px 50px'
            }}></div>

            <div className="relative z-10 max-w-4xl px-6 md:px-8 animate-fadeInUp">
                <h2 className="text-xs md:text-sm tracking-[3px] md:tracking-[4px] uppercase text-accent mb-2 md:mb-4 opacity-90 font-light">
                    Shapes of Beauty
                </h2>
                <h1 className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-display font-normal tracking-[0.12em] md:tracking-[0.18em] mb-4 md:mb-8 leading-[1.2] px-2 md:px-0">
                    SO MUCH MORE THAN<br />JUST FURNITURE
                </h1>
                <p className="text-sm md:text-lg font-sans font-normal text-white/90 max-w-3xl mx-auto mb-6 md:mb-16 px-4 md:px-0 leading-relaxed">
                    We specialize in the art of spaces, bringing a multitude of arts together into a graceful, elegant dance.
                </p>
                <div className="flex gap-3 md:gap-6 justify-center flex-wrap px-4">
                    <a href="#portfolio" className="group relative px-6 md:px-12 py-2.5 md:py-4 text-xs md:text-sm font-semibold uppercase tracking-[0.15em] md:tracking-[0.2em] 
                        bg-white text-primary overflow-hidden
                        hover:shadow-2xl hover:scale-105 active:scale-100 transition-all duration-300
                        inline-flex items-center gap-3">
                        <span className="relative z-10">View Our Work</span>
                        <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        <span className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </a>
                    <a href="#contact" className="group relative px-6 md:px-12 py-2.5 md:py-4 text-xs md:text-sm font-semibold uppercase tracking-[0.15em] md:tracking-[0.2em] 
                        bg-transparent text-white border-2 border-white/80 hover:border-white backdrop-blur-sm
                        hover:bg-white hover:text-primary hover:shadow-2xl hover:scale-105 active:scale-100
                        transition-all duration-300 inline-flex items-center gap-3">
                        <span>Get In Touch</span>
                        <svg className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="hidden md:flex absolute bottom-12 left-1/2 -translate-x-1/2 flex-col items-center gap-4 text-white/70 text-xs tracking-[2px] animate-bounce">
                <span>Scroll</span>
                <div className="w-px h-10 bg-gradient-to-b from-white/70 to-transparent"></div>
            </div>
        </section>
    )
}

export default Hero
