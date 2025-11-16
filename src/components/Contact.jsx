const Contact = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white" id="contact">
            <div className="max-w-6xl mx-auto px-8">
                {/* Header Section */}
                <div className="text-center mb-20">
                    <span className="inline-block text-sm tracking-[4px] uppercase text-accent mb-6 font-medium">
                        Get In Touch
                    </span>
                    <h2 className="text-5xl md:text-6xl font-display font-bold text-primary mb-6 tracking-[3px]">
                        CONTACT US
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mb-8"></div>
                    <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed font-body">
                        Let's bring your vision to life. Reach out to discuss your project or visit our showroom.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white p-10 shadow-xl border border-gray-100">
                        <h3 className="text-2xl font-heading font-bold text-primary mb-6 tracking-[1px]">
                            Send Us a Message
                        </h3>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2 tracking-wide uppercase">
                                    Your Name *
                                </label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full px-5 py-4 border-2 border-gray-200 focus:border-secondary 
                                        focus:outline-none transition-colors bg-gray-50 focus:bg-white font-body"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2 tracking-wide uppercase">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full px-5 py-4 border-2 border-gray-200 focus:border-secondary 
                                        focus:outline-none transition-colors bg-gray-50 focus:bg-white font-body"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2 tracking-wide uppercase">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    placeholder="+94 XX XXX XXXX"
                                    className="w-full px-5 py-4 border-2 border-gray-200 focus:border-secondary 
                                        focus:outline-none transition-colors bg-gray-50 focus:bg-white font-body"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2 tracking-wide uppercase">
                                    Your Message *
                                </label>
                                <textarea
                                    rows="5"
                                    placeholder="Tell us about your project..."
                                    className="w-full px-5 py-4 border-2 border-gray-200 focus:border-secondary 
                                        focus:outline-none transition-colors resize-none bg-gray-50 focus:bg-white font-body"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-10 py-4 text-sm font-bold uppercase tracking-[2px] 
                                    bg-primary text-white hover:bg-secondary border-2 border-primary hover:border-secondary
                                    transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        {/* Phone */}
                        <div className="bg-white p-8 shadow-lg border-l-4 border-secondary hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0">
                                    <span className="text-white text-xl">📞</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-heading font-bold text-primary mb-2 tracking-wide">
                                        PHONE
                                    </h3>
                                    <a href="tel:+94112594495" className="text-gray-600 hover:text-secondary transition-colors font-body">
                                        +94 112 594 495
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="bg-white p-8 shadow-lg border-l-4 border-accent hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary flex items-center justify-center flex-shrink-0">
                                    <span className="text-white text-xl">✉️</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-heading font-bold text-primary mb-2 tracking-wide">
                                        EMAIL
                                    </h3>
                                    <a href="mailto:sales@rauxbrothers.com" className="text-gray-600 hover:text-secondary transition-colors font-body">
                                        sales@rauxbrothers.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="bg-white p-8 shadow-lg border-l-4 border-primary hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary to-dark flex items-center justify-center flex-shrink-0">
                                    <span className="text-white text-xl">📍</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-heading font-bold text-primary mb-2 tracking-wide">
                                        VISIT OUR SHOWROOM
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed font-body">
                                        Colombo, Sri Lanka<br />
                                        <span className="text-sm text-muted">To experience the spirit of our work</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="bg-gradient-to-br from-primary to-dark p-8 text-white">
                            <h3 className="text-lg font-heading font-bold mb-4 tracking-[2px] uppercase">
                                Follow Our Journey
                            </h3>
                            <div className="flex gap-3">
                                <a href="https://web.facebook.com/RauxBrothersSL/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-white/10 hover:bg-accent backdrop-blur-sm 
                                        flex items-center justify-center transition-all duration-300 
                                        hover:scale-110 border border-white/20 hover:border-accent">
                                    <span className="text-lg">f</span>
                                </a>
                                <a href="https://twitter.com/RauxBrothers"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-white/10 hover:bg-accent backdrop-blur-sm 
                                        flex items-center justify-center transition-all duration-300 
                                        hover:scale-110 border border-white/20 hover:border-accent">
                                    <span className="text-lg">𝕏</span>
                                </a>
                                <a href="https://www.instagram.com/rauxbrothers/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-white/10 hover:bg-accent backdrop-blur-sm 
                                        flex items-center justify-center transition-all duration-300 
                                        hover:scale-110 border border-white/20 hover:border-accent">
                                    <span className="text-lg">📷</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
