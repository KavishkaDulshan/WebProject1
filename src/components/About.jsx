const About = () => {
    const stats = [
        { number: '65+', label: 'Years of Excellence' },
        { number: '1000+', label: 'Projects Completed' },
        { number: '100%', label: 'Quality Assured' }
    ]

    return (
        <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden" id="about">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-12 items-start">
                    {/* Text Content */}
                    <div className="max-w-xl">
                        <div className="mb-12">
                            <span className="inline-block text-xs tracking-[4px] uppercase text-secondary mb-6 font-semibold border-b-2 border-accent pb-2">
                                Who We Are
                            </span>
                            <h2 className="text-5xl md:text-6xl font-logo font-semibold text-primary mb-6 tracking-[0.15em] leading-tight">
                                RAUX<br />BROTHERS
                            </h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mb-8"></div>
                        </div>

                        <p className="text-xl leading-[1.8] text-primary mb-6 font-body font-normal italic">
                            First established in 1959, Raux Brothers is spearheaded by an expert team led by Graham and Kalani Raux.
                        </p>
                        <p className="text-gray-600 mb-5 leading-[1.9] text-base">
                            From its origins as a trusted name in furniture, Raux Brothers has over the years infused innovative and modern ideas to transform itself into a state of the art furniture manufacturing and sourcing company.
                        </p>
                        <p className="text-gray-600 mb-10 leading-[1.9] text-base">
                            As the master painter crafts his own pigments with painstaking care, so do we diligently build our products from the ground up.
                        </p>
                        <a href="#legacy" className="group inline-flex items-center gap-3 px-12 py-4 text-sm font-semibold uppercase tracking-[1.5px] bg-primary text-white hover:bg-secondary border-2 border-primary hover:border-secondary transition-all duration-300 hover:shadow-xl hover:scale-105">
                            <span>Our Legacy</span>
                            <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>

                    {/* Center Image - Clean architectural photo with frame */}
                    <div className="hidden lg:block w-80 h-[600px] relative">
                        {/* Decorative frame corners */}
                        <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-primary z-10"></div>
                        <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-primary z-10"></div>

                        {/* Image with rounded corners */}
                        <img
                            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600"
                            alt="Architecture"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>

                    {/* Stats */}
                    <div className="grid gap-6">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="group relative p-10 bg-white border border-gray-100 hover:border-secondary/30 hover:translate-x-3 hover:shadow-2xl transition-all duration-500 overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-secondary to-accent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10 text-center">
                                    <h3 className="text-6xl font-logo font-semibold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                                        {stat.number}
                                    </h3>
                                    <p className="text-gray-600 text-xs uppercase tracking-[2px] font-semibold">
                                        {stat.label}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
