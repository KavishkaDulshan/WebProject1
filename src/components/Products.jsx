const Products = () => {
    const categories = [
        { number: '01', name: 'Furniture', description: 'Custom-crafted pieces' },
        { number: '02', name: 'Furnishings', description: 'Elegant accents' },
        { number: '03', name: 'Interior Design', description: 'Complete solutions' },
        { number: '04', name: 'Consultation', description: 'Expert guidance' },
        { number: '05', name: 'Restoration', description: 'Heritage preservation' }
    ]

    return (
        <section className="py-24 bg-gray-50" id="products">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-16">
                    <span className="inline-block text-sm tracking-[3px] uppercase text-secondary mb-4 font-medium">
                        What We Offer
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-semibold text-primary tracking-[2px]">
                        OUR PRODUCTS
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="group p-8 bg-white border-t-4 border-transparent hover:border-secondary 
                                hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                        >
                            <span className="text-5xl font-heading font-bold text-gray-100 group-hover:text-accent/20 transition-colors">
                                {category.number}
                            </span>
                            <h3 className="text-xl font-heading font-semibold text-primary mt-4 mb-2 tracking-wide">
                                {category.name}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {category.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Products
