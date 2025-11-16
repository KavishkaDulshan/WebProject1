const About = () => {
    const stats = [
        {
            number: '65+',
            label: 'Years of Excellence',
            icon: 'https://img.icons8.com/ios/100/trophy--v1.png'
        },
        {
            number: '1000+',
            label: 'Projects Completed',
            icon: 'https://img.icons8.com/ios/100/briefcase.png'
        },
        {
            number: '100%',
            label: 'Quality Assured',
            icon: 'https://img.icons8.com/ios/100/guarantee--v1.png'
        }
    ]

    return (
        <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden" id="about">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-accent/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-secondary/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
                <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 md:gap-12 items-start">
                    {/* Text Content */}
                    <div className="max-w-xl">
                        <div className="mb-8 md:mb-12">
                            <span className="inline-block text-[10px] md:text-xs tracking-[3px] md:tracking-[4px] uppercase text-secondary mb-4 md:mb-6 font-semibold border-b-2 border-accent pb-2">
                                Who We Are
                            </span>
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-logo font-semibold text-primary mb-4 md:mb-6 tracking-[0.12em] md:tracking-[0.15em] leading-tight">
                                RAUX<br />BROTHERS
                            </h2>
                            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-secondary to-accent mb-6 md:mb-8"></div>
                        </div>

                        <p className="text-lg md:text-xl leading-[1.8] text-primary mb-5 md:mb-6 font-body font-normal italic">
                            First established in 1959, Raux Brothers is spearheaded by an expert team led by Graham and Kalani Raux.
                        </p>
                        <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-5 leading-[1.9]">
                            From its origins as a trusted name in furniture, Raux Brothers has over the years infused innovative and modern ideas to transform itself into a state of the art furniture manufacturing and sourcing company.
                        </p>
                        <p className="text-sm md:text-base text-gray-600 mb-8 md:mb-10 leading-[1.9]">
                            As the master painter crafts his own pigments with painstaking care, so do we diligently build our products from the ground up.
                        </p>
                        <a href="#legacy" className="group inline-flex items-center gap-2 md:gap-3 px-8 md:px-12 py-3 md:py-4 text-xs md:text-sm font-semibold uppercase tracking-[1.2px] md:tracking-[1.5px] bg-primary text-white hover:bg-secondary border-2 border-primary hover:border-secondary transition-all duration-300 hover:shadow-xl hover:scale-105">
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
                    <div className="grid gap-4 md:gap-6 content-start">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="group relative p-6 md:p-8 bg-white border border-gray-100 hover:border-secondary/30 hover:translate-x-3 hover:shadow-2xl transition-all duration-500 overflow-hidden h-[140px] md:h-[180px] flex flex-col justify-center"
                            >
                                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-secondary to-accent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className="flex justify-center mb-3">
                                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors duration-300">
                                            <img
                                                src={stat.icon}
                                                alt={stat.label}
                                                className="w-9 h-9 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                                                style={{ filter: 'brightness(0) saturate(100%) invert(45%) sepia(15%) saturate(800%) hue-rotate(350deg)' }}
                                            />
                                        </div>
                                    </div>
                                    {/* Number and Label */}
                                    <div className="text-center">
                                        <h3 className="text-5xl font-logo font-semibold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                                            {stat.number}
                                        </h3>
                                        <p className="text-gray-600 text-xs uppercase tracking-[2px] font-semibold">
                                            {stat.label}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Full-Width Video Section */}
                <div className="mt-32 relative">
                    {/* Decorative Elements */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
                        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-secondary to-accent"></div>
                        <span className="text-xs tracking-[4px] uppercase text-secondary font-semibold whitespace-nowrap">
                            Our Story
                        </span>
                        <div className="w-24 h-[2px] bg-gradient-to-l from-transparent via-secondary to-accent"></div>
                    </div>

                    {/* Video Container */}
                    <div className="relative group">
                        {/* Decorative Corner Frames */}
                        <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-secondary opacity-50 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                        <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-secondary opacity-50 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                        <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-secondary opacity-50 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                        <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-secondary opacity-50 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                        {/* Video with subtle shadow and border */}
                        <div className="relative overflow-hidden bg-black shadow-2xl border-4 border-white">
                            <video
                                className="w-full h-auto"
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src={`${import.meta.env.BASE_URL}video/intro.m4v`} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            {/* Overlay gradient on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        </div>

                        {/* Caption */}
                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600 font-body italic">
                                Crafting excellence since 1959 • Where tradition meets innovation
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
