const Contact = () => {
    return (
        <section className="py-24 bg-gray-50" id="contact">
            <div className="max-w-6xl mx-auto px-8">
                <div className="text-center mb-16">
                    <span className="inline-block text-sm tracking-[3px] uppercase text-secondary mb-4 font-medium">
                        Get In Touch
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-semibold text-primary tracking-[2px]">
                        CONTACT US
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div>
                        <form className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-6 py-4 border border-gray-300 focus:border-secondary 
                                        focus:outline-none transition-colors bg-white"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full px-6 py-4 border border-gray-300 focus:border-secondary 
                                        focus:outline-none transition-colors bg-white"
                                />
                            </div>
                            <div>
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full px-6 py-4 border border-gray-300 focus:border-secondary 
                                        focus:outline-none transition-colors bg-white"
                                />
                            </div>
                            <div>
                                <textarea
                                    rows="5"
                                    placeholder="Your Message"
                                    className="w-full px-6 py-4 border border-gray-300 focus:border-secondary 
                                        focus:outline-none transition-colors resize-none bg-white"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-10 py-4 text-sm font-semibold uppercase tracking-[1.5px] 
                                    bg-primary text-white hover:bg-secondary hover:shadow-xl 
                                    hover:-translate-y-1 transition-all duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-heading font-semibold text-primary mb-4 tracking-wide">
                                Visit Our Showroom
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                123 Furniture Street<br />
                                Colombo, Sri Lanka<br />
                                Open Mon-Sat: 9AM - 6PM
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-heading font-semibold text-primary mb-4 tracking-wide">
                                Contact Details
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Phone: +94 11 234 5678<br />
                                Email: info@rauxbrothers.com<br />
                                Fax: +94 11 234 5679
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-heading font-semibold text-primary mb-4 tracking-wide">
                                Follow Us
                            </h3>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 bg-primary hover:bg-secondary text-white 
                                    flex items-center justify-center transition-colors">
                                    FB
                                </a>
                                <a href="#" className="w-10 h-10 bg-primary hover:bg-secondary text-white 
                                    flex items-center justify-center transition-colors">
                                    IG
                                </a>
                                <a href="#" className="w-10 h-10 bg-primary hover:bg-secondary text-white 
                                    flex items-center justify-center transition-colors">
                                    LI
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
