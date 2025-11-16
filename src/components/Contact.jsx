const Contact = () => {
    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message')
        }

        // Create mailto link
        const subject = encodeURIComponent(`New Contact Form Message from ${data.name}`)
        const body = encodeURIComponent(
            `Name: ${data.name}\n` +
            `Email: ${data.email}\n` +
            `Phone: ${data.phone || 'Not provided'}\n\n` +
            `Message:\n${data.message}`
        )

        // Open default email client
        window.location.href = `mailto:kavishkadulshan2@gmail.com?subject=${subject}&body=${body}`

        // Reset form
        e.target.reset()

        // Show confirmation
        alert('Thank you for your message! Your email client will open to send the message.')
    }

    return (
        <section className="pt-16 pb-32 bg-white relative overflow-hidden" id="contact">
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
                <div className="text-center mb-16 md:mb-24">
                    <span className="inline-block text-[10px] md:text-xs tracking-[3px] md:tracking-[4px] uppercase text-secondary/60 mb-3 md:mb-4 font-semibold">
                        Let's Connect
                    </span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-4 md:mb-6 tracking-tight">
                        Contact Us
                    </h2>
                    <div className="w-16 md:w-20 h-0.5 bg-secondary mx-auto mb-6 md:mb-10"></div>
                    <p className="text-base md:text-lg lg:text-xl font-serif text-gray-600 max-w-3xl mx-auto leading-relaxed italic px-4">
                        Let's bring your vision to life. Reach out to discuss your project or visit our showroom.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                    {/* Left Column: Contact Form + Social Media */}
                    <div className="order-2 lg:order-1 space-y-6 md:space-y-8">
                        {/* Contact Form */}
                        <div className="relative">
                            {/* Decorative corner elements */}
                            <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-12 h-12 md:w-16 md:h-16 border-t-2 border-l-2 border-secondary/30"></div>
                            <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-12 h-12 md:w-16 md:h-16 border-b-2 border-r-2 border-secondary/30"></div>

                            <div className="relative bg-gradient-to-br from-gray-50 to-white p-6 md:p-10 lg:p-12 border-2 border-gray-100">
                                <h3 className="text-xl md:text-2xl font-display font-bold text-primary mb-6 md:mb-8 tracking-tight">
                                    Send Us a Message
                                </h3>
                                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                    <div>
                                        <label className="block text-[10px] md:text-xs font-semibold text-gray-700 mb-2 md:mb-3 tracking-[1.5px] md:tracking-[2px] uppercase">
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="John Doe"
                                            className="w-full px-4 py-3 md:px-6 md:py-4 border-2 border-gray-200 focus:border-secondary text-sm md:text-base 
                                                focus:outline-none transition-all duration-300 bg-white font-body
                                                hover:border-gray-300"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] md:text-xs font-semibold text-gray-700 mb-2 md:mb-3 tracking-[1.5px] md:tracking-[2px] uppercase">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="john@example.com"
                                            className="w-full px-4 py-3 md:px-6 md:py-4 border-2 border-gray-200 focus:border-secondary text-sm md:text-base 
                                                focus:outline-none transition-all duration-300 bg-white font-body
                                                hover:border-gray-300"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] md:text-xs font-semibold text-gray-700 mb-2 md:mb-3 tracking-[1.5px] md:tracking-[2px] uppercase">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="+94 XX XXX XXXX"
                                            className="w-full px-4 py-3 md:px-6 md:py-4 border-2 border-gray-200 focus:border-secondary text-sm md:text-base 
                                                focus:outline-none transition-all duration-300 bg-white font-body
                                                hover:border-gray-300"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] md:text-xs font-semibold text-gray-700 mb-2 md:mb-3 tracking-[1.5px] md:tracking-[2px] uppercase">
                                            Your Message *
                                        </label>
                                        <textarea
                                            name="message"
                                            rows="5"
                                            placeholder="Tell us about your project..."
                                            className="w-full px-4 py-3 md:px-6 md:py-4 border-2 border-gray-200 focus:border-secondary text-sm md:text-base 
                                                focus:outline-none transition-all duration-300 resize-none bg-white font-body
                                                hover:border-gray-300"
                                            required
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="group relative w-full px-6 py-4 md:px-10 md:py-5 text-[10px] md:text-xs font-bold uppercase tracking-[1.5px] md:tracking-[2px] 
                                            bg-primary text-white overflow-hidden
                                            transition-all duration-300 hover:shadow-2xl hover:-translate-y-1
                                            border-2 border-primary"
                                    >
                                        <span className="relative z-10">Send Message</span>
                                        <span className="absolute inset-0 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Social Media Card */}
                        <div className="relative overflow-hidden">
                            <div className="relative bg-gradient-to-br from-white to-gray-50 p-8 border-2 border-gray-100">
                                <h3 className="text-lg font-heading font-bold text-primary mb-6 tracking-wide uppercase">
                                    Follow Our Journey
                                </h3>
                                <div className="flex gap-3">
                                    {/* Facebook */}
                                    <a href="https://web.facebook.com/RauxBrothersSL/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/social relative w-12 h-12 rounded-lg overflow-hidden
                                            flex items-center justify-center transition-all duration-300 
                                            hover:scale-110 hover:shadow-xl">
                                        <div className="absolute inset-0 bg-[#1877F2]"></div>
                                        <svg className="relative w-6 h-6 text-white z-10" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </a>

                                    {/* Twitter/X */}
                                    <a href="https://twitter.com/RauxBrothers"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/social relative w-12 h-12 rounded-lg overflow-hidden
                                            flex items-center justify-center transition-all duration-300 
                                            hover:scale-110 hover:shadow-xl">
                                        <div className="absolute inset-0 bg-black"></div>
                                        <svg className="relative w-5 h-5 text-white z-10" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </a>

                                    {/* Instagram */}
                                    <a href="https://www.instagram.com/rauxbrothers/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/social relative w-12 h-12 rounded-lg overflow-hidden
                                            flex items-center justify-center transition-all duration-300 
                                            hover:scale-110 hover:shadow-xl">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FD1D1D]"></div>
                                        <svg className="relative w-6 h-6 text-white z-10" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>

                                    {/* LinkedIn */}
                                    <a href="https://www.linkedin.com/company/raux-brothers"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/social relative w-12 h-12 rounded-lg overflow-hidden
                                            flex items-center justify-center transition-all duration-300 
                                            hover:scale-110 hover:shadow-xl">
                                        <div className="absolute inset-0 bg-[#0A66C2]"></div>
                                        <svg className="relative w-6 h-6 text-white z-10" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                </div>
                                <p className="text-xs text-gray-500 mt-4 font-body italic">
                                    Stay updated with our latest projects and inspirations
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Information */}
                    <div className="order-1 lg:order-2 space-y-4 md:space-y-6">
                        {/* Phone Card */}
                        <div className="group relative">
                            <div className="relative bg-white p-5 md:p-8 
                                border-2 border-gray-100 hover:border-secondary/30
                                transition-all duration-500 hover:shadow-2xl overflow-hidden">

                                {/* Background gradient on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                                        {/* Premium Icon - Faded Green */}
                                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-green-200 to-green-300 
                                            flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-6 h-6 md:w-8 md:h-8 text-green-700" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-[1.5px] md:tracking-[2px] mb-1">
                                                Call Us
                                            </h3>
                                            <p className="text-base md:text-xl font-heading font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                                                Phone
                                            </p>
                                        </div>
                                    </div>
                                    <div className="pl-14 md:pl-20">
                                        <a href="tel:+94112594495"
                                            className="text-lg md:text-2xl font-semibold text-gray-800 hover:text-secondary transition-colors font-heading block mb-1 md:mb-2">
                                            +94 112 594 495
                                        </a>
                                        <p className="text-xs md:text-sm text-gray-500 font-body">
                                            Monday - Saturday: 9:00 AM - 6:00 PM
                                        </p>
                                    </div>
                                </div>

                                {/* Bottom Accent Line */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r 
                                    from-transparent via-green-500 to-transparent
                                    transform scale-x-0 group-hover:scale-x-100 
                                    transition-transform duration-700 origin-center"></div>
                            </div>
                        </div>

                        {/* Email Card */}
                        <div className="group relative">
                            <div className="relative bg-white p-5 md:p-8 
                                border-2 border-gray-100 hover:border-secondary/30
                                transition-all duration-500 hover:shadow-2xl overflow-hidden">

                                {/* Background gradient on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                                        {/* Premium Icon - Faded Blue */}
                                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blue-200 to-blue-300 
                                            flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-6 h-6 md:w-8 md:h-8 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-[1.5px] md:tracking-[2px] mb-1">
                                                Email Us
                                            </h3>
                                            <p className="text-base md:text-xl font-heading font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                                                Email
                                            </p>
                                        </div>
                                    </div>
                                    <div className="pl-14 md:pl-20">
                                        <a href="mailto:sales@rauxbrothers.com"
                                            className="text-sm md:text-xl font-semibold text-gray-800 hover:text-secondary transition-colors font-heading block mb-1 md:mb-2 break-all">
                                            sales@rauxbrothers.com
                                        </a>
                                        <p className="text-xs md:text-sm text-gray-500 font-body">
                                            We'll respond within 24 hours
                                        </p>
                                    </div>
                                </div>

                                {/* Bottom Accent Line */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r 
                                    from-transparent via-blue-500 to-transparent
                                    transform scale-x-0 group-hover:scale-x-100 
                                    transition-transform duration-700 origin-center"></div>
                            </div>
                        </div>

                        {/* Location Card with Map */}
                        <div className="group relative">
                            <div className="relative bg-white 
                                border-2 border-gray-100 hover:border-secondary/30
                                transition-all duration-500 hover:shadow-2xl overflow-hidden">

                                {/* Background gradient on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10 p-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        {/* Premium Icon - Faded Red */}
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-200 to-red-300 
                                            flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-[2px] mb-1">
                                                Visit Us
                                            </h3>
                                            <p className="text-xl font-heading font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                                                Showroom
                                            </p>
                                        </div>
                                    </div>
                                    <div className="pl-20 mb-6">
                                        <p className="text-lg font-semibold text-gray-800 mb-1 font-heading">
                                            Raux Brothers (Pvt) Ltd
                                        </p>
                                        <p className="text-base text-gray-700 leading-relaxed font-body mb-2">
                                            No. 100, Dutugemunu Street,<br />
                                            Dehiwala, Colombo<br />
                                            Sri Lanka
                                        </p>
                                        <p className="text-sm text-gray-500 font-body italic">
                                            Experience the art of furniture craftsmanship
                                        </p>
                                    </div>
                                </div>

                                {/* Embedded Google Map */}
                                <div className="relative h-64 w-full">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d428.5445942053902!2d79.85460137179122!3d6.895248533298442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b984924f7db%3A0x8de780174a5bd6e1!2sRaux%20Brothers%20Concept%20Store!5e0!3m2!1sen!2slk!4v1763278194949!5m2!1sen!2slk"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="grayscale hover:grayscale-0 transition-all duration-500"
                                    ></iframe>
                                </div>

                                {/* Bottom Accent Line */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r 
                                    from-transparent via-red-500 to-transparent
                                    transform scale-x-0 group-hover:scale-x-100 
                                    transition-transform duration-700 origin-center"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
