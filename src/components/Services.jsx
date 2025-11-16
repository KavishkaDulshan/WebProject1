const Services = () => {
    const services = [
        {
            title: 'Customize Conceptual Design',
            description: 'You decide the feelings you want your interiors to convey, and we design for it.',
            details: 'Our bespoke approach ensures every detail reflects your unique vision and style.',
            staticIcon: 'https://img.icons8.com/ios/100/interior-design.png'
        },
        {
            title: 'Project Planning & Design',
            description: 'Relax and leave the technical details to us while we transform your spaces.',
            details: 'Comprehensive planning with precision and care from concept to completion.',
            staticIcon: 'https://img.icons8.com/ios/100/blueprint.png'
        },
        {
            title: 'Quality Products & Service',
            description: 'Quality is the norm with Raux Brothers; it can\'t be any other way.',
            details: 'What we create is art, and art requires quality at a fundamental level.',
            staticIcon: 'https://img.icons8.com/ios/100/guarantee--v1.png'
        },
        {
            title: 'Installation & Delivery',
            description: 'We deliver your expectations from beginning to end with complete care.',
            details: 'Professional installation is part of the process, included in our service.',
            staticIcon: 'https://img.icons8.com/ios/100/in-transit.png'
        }
    ]

    return (
        <section className="pt-16 pb-32 bg-white relative" id="services">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute top-0 left-0 right-0 bottom-0"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 1px 1px, #8b7355 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}
                ></div>
            </div>

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-24">
                    <span className="inline-block text-xs tracking-[4px] uppercase text-secondary/60 mb-4 font-semibold">
                        Speciality Of Raux Brothers
                    </span>
                    <h2 className="text-5xl md:text-6xl font-display font-bold text-primary mb-6 tracking-tight">
                        Our Services
                    </h2>
                    <div className="w-20 h-0.5 bg-secondary mx-auto mb-10"></div>
                    <p className="text-lg md:text-xl font-serif text-gray-600 max-w-3xl mx-auto leading-relaxed italic">
                        We specialize in the art of spaces, bringing a multitude of arts together into a graceful, elegant dance.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative"
                        >
                            {/* Card */}
                            <div className="relative bg-gradient-to-b from-white to-gray-50 p-8 h-full
                                border-2 border-gray-100 hover:border-secondary/20
                                transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">

                                {/* Icon Container */}
                                <div className="mb-8 flex justify-center">
                                    <div className="relative w-28 h-28 flex items-center justify-center">
                                        {/* Animated Background Circle */}
                                        <div className="absolute inset-0 rounded-full bg-secondary/5 
                                            group-hover:bg-secondary/10 transition-all duration-500
                                            group-hover:scale-110"></div>

                                        {/* Icon */}
                                        <div className="relative w-20 h-20 group-hover:scale-125 
                                            transition-transform duration-500 ease-out
                                            filter grayscale group-hover:grayscale-0">
                                            <img
                                                src={service.staticIcon}
                                                alt={service.title}
                                                className="w-full h-full object-contain opacity-70 group-hover:opacity-100
                                                    transition-opacity duration-500"
                                                style={{ filter: 'brightness(0) saturate(100%) invert(45%) sepia(15%) saturate(800%) hue-rotate(350deg)' }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="text-center">
                                    <h3 className="text-xl font-heading font-bold text-primary mb-4 
                                        leading-tight group-hover:text-secondary transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                        {service.description}
                                    </p>
                                    <p className="text-xs text-gray-500 leading-relaxed">
                                        {service.details}
                                    </p>
                                </div>

                                {/* Number Badge */}
                                <div className="absolute top-4 right-4 w-10 h-10 rounded-full 
                                    bg-secondary/10 group-hover:bg-secondary/20
                                    flex items-center justify-center transition-colors duration-300">
                                    <span className="text-sm font-bold text-secondary">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                </div>

                                {/* Bottom Accent Line */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r 
                                    from-transparent via-secondary to-transparent
                                    transform scale-x-0 group-hover:scale-x-100 
                                    transition-transform duration-700 origin-center"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Quote Section */}
                <div className="max-w-5xl mx-auto">
                    <div className="relative overflow-hidden">
                        {/* Background with border */}
                        <div className="absolute inset-0 border-4 border-secondary/20"></div>

                        {/* Content */}
                        <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 p-16 md:p-20">
                            {/* Decorative corner elements */}
                            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-secondary"></div>
                            <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-secondary"></div>
                            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-secondary"></div>
                            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-secondary"></div>

                            <div className="relative z-10 text-center">
                                {/* Quote mark */}
                                <div className="text-8xl md:text-9xl text-secondary/20 font-serif leading-none mb-6">"</div>

                                {/* Quote text */}
                                <p className="text-2xl md:text-3xl font-body text-primary leading-relaxed mb-8 max-w-3xl mx-auto">
                                    As the master painter crafts his own pigments with painstaking care,
                                    so do we diligently build our products from the ground up.
                                </p>

                                {/* Divider with ornament */}
                                <div className="flex items-center justify-center gap-4 mb-6">
                                    <div className="w-12 h-[1px] bg-secondary"></div>
                                    <div className="w-2 h-2 bg-secondary rotate-45"></div>
                                    <div className="w-12 h-[1px] bg-secondary"></div>
                                </div>

                                {/* Attribution */}
                                <p className="text-sm text-secondary font-semibold uppercase tracking-[4px]">
                                    Raux Brothers Philosophy
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
