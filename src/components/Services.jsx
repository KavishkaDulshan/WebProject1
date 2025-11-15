const Services = () => {
    const services = [
        {
            icon: '🎨',
            title: 'Custom Design',
            description: 'Tailored solutions that reflect your unique vision and style'
        },
        {
            icon: '🛠️',
            title: 'Craftsmanship',
            description: 'Meticulous attention to detail in every piece we create'
        },
        {
            icon: '📐',
            title: 'Space Planning',
            description: 'Optimized layouts for functional and beautiful spaces'
        },
        {
            icon: '✨',
            title: 'Finishing Touches',
            description: 'Perfect accents that complete your interior vision'
        }
    ]

    return (
        <section className="py-24 bg-white" id="services">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-16">
                    <span className="inline-block text-sm tracking-[3px] uppercase text-secondary mb-4 font-medium">
                        Our Expertise
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-semibold text-primary tracking-[2px]">
                        SERVICES
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group p-8 bg-gray-50 hover:bg-white hover:shadow-xl 
                                hover:-translate-y-2 transition-all duration-300 text-center"
                        >
                            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-heading font-semibold text-primary mb-4 tracking-wide">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
