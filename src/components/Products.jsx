import { useState, useRef } from 'react'

const Products = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState({})
    const intervalsRef = useRef({})

    const baseUrl = import.meta.env.BASE_URL
    
    const categories = [
        {
            name: 'Furniture',
            description: 'Timeless pieces crafted with precision and care for living, dining, and garden spaces',
            images: [
                `${baseUrl}images/ourwork/homecategories/furniture/Furniture-line-1.png`,
                `${baseUrl}images/ourwork/homecategories/furniture/Furniture-dine-7.png`,
                `${baseUrl}images/ourwork/homecategories/furniture/Furniture-sleep-5.png`,
                `${baseUrl}images/ourwork/homecategories/furniture/Furniture_Garden_9.png`
            ],
            tag: 'LINE • DINE • SLEEP • GARDEN'
        },
        {
            name: 'Furnishing',
            description: 'Exquisite fabrics, cushions, and decorative elements that add character to any space',
            images: [
                `${baseUrl}images/ourwork/homecategories/furnishing/Fabric_Drapery_5.png`,
                `${baseUrl}images/ourwork/homecategories/furnishing/Wallpaper_4.png`,
                `${baseUrl}images/ourwork/homecategories/furnishing/Rug_carpet_7.png`,
                `${baseUrl}images/ourwork/homecategories/furnishing/Leatherite_9.png`
            ],
            tag: 'ELEGANCE • COMFORT'
        },
        {
            name: 'Elements',
            description: 'Unique decorative pieces and architectural elements that define your interior aesthetic',
            images: [
                `${baseUrl}images/ourwork/homecategories/elements/wovenware_4.png`,
                `${baseUrl}images/ourwork/homecategories/elements/Porcelain_5.png`,
                `${baseUrl}images/ourwork/homecategories/elements/Decorative_6.png`
            ],
            tag: 'DESIGN • DETAIL'
        },
        {
            name: 'Lighting',
            description: 'Sophisticated lighting solutions that illuminate and enhance your living spaces',
            images: [
                `${baseUrl}images/ourwork/homecategories/lighting/Lightings_3.png`,
                `${baseUrl}images/ourwork/homecategories/lighting/Lightings_4.png`,
                `${baseUrl}images/ourwork/homecategories/lighting/Lightings_6.png`,
                `${baseUrl}images/ourwork/homecategories/lighting/Lightings_9.png`
            ],
            tag: 'AMBIANCE • STYLE'
        },
        {
            name: 'Art',
            description: 'Curated artworks and sculptures that bring life and personality to your interiors',
            images: [
                `${baseUrl}images/ourwork/homecategories/art/Art_1.png`,
                `${baseUrl}images/ourwork/homecategories/art/Art_4.png`,
                `${baseUrl}images/ourwork/homecategories/art/Art_6.png`,
                `${baseUrl}images/ourwork/homecategories/art/Art_10.png`
            ],
            tag: 'CREATIVITY • EXPRESSION'
        }
    ]

    // Handle hover to start slideshow
    const handleMouseEnter = (index) => {
        setCurrentImageIndex(prev => ({ ...prev, [index]: 0 }))

        const interval = setInterval(() => {
            setCurrentImageIndex(prev => ({
                ...prev,
                [index]: ((prev[index] || 0) + 1) % categories[index].images.length
            }))
        }, 2000) // Change image every 2 seconds

        // Store interval ID in ref
        intervalsRef.current[index] = interval
    }

    const handleMouseLeave = (index) => {
        // Clear the interval
        if (intervalsRef.current[index]) {
            clearInterval(intervalsRef.current[index])
            delete intervalsRef.current[index]
        }
    }

    return (
        <section className="pt-12 pb-20 bg-gradient-to-b from-white via-gray-50 to-white" id="products">
            <div className="max-w-7xl mx-auto px-8">
                {/* Header Section */}
                <div className="text-center mb-20">
                    <span className="inline-block text-sm tracking-[4px] uppercase text-accent mb-6 font-medium">
                        What We Offer
                    </span>
                    <h2 className="text-5xl md:text-6xl font-display font-bold text-primary mb-6 tracking-[3px]">
                        OUR PRODUCTS
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mb-8"></div>
                    <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed font-body">
                        Explore our range of products. From that perfect decor piece your garden has been in need of,
                        to that chair set which complements your dining room exactly, you're sure to find precisely what you want.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Placeholder Card */}
                    <div className="group relative overflow-hidden bg-gradient-to-br from-primary via-dark to-primary 
                        shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col h-full">
                        {/* Image Container */}
                        <div className="relative h-80 overflow-hidden flex-shrink-0 flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                            <div className="text-center z-20 px-8">
                                <div className="w-20 h-20 mx-auto mb-6 border-4 border-accent/30 rounded-full 
                                    flex items-center justify-center group-hover:border-accent transition-colors duration-500">
                                    <span className="text-4xl text-accent">✦</span>
                                </div>
                                <h3 className="text-2xl font-display font-bold text-white mb-3 tracking-[3px]">
                                    CRAFTED WITH CARE
                                </h3>
                                <p className="text-accent text-sm tracking-[2px] uppercase font-medium">
                                    Since 1959
                                </p>
                            </div>
                        </div>
                        {/* Content Container */}
                        <div className="p-8 bg-white flex-grow flex flex-col">
                            <h3 className="text-2xl font-heading font-bold text-primary mb-4 
                                tracking-[2px] uppercase group-hover:text-secondary transition-colors duration-300">
                                OUR LEGACY
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6 font-body flex-grow">
                                Creating timeless furniture and elegant interiors with dedication to quality and craftsmanship
                            </p>
                            <div className="flex items-center gap-2 text-secondary group-hover:gap-4 
                                transition-all duration-300">
                                <span className="text-sm font-semibold tracking-wider uppercase">Discover</span>
                                <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </div>
                        </div>
                        {/* Decorative Border */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-secondary to-accent 
                            transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </div>

                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl 
                                transition-all duration-500 cursor-pointer flex flex-col h-full"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                        >
                            {/* Image Container */}
                            <div className="relative h-80 overflow-hidden bg-gray-100 flex-shrink-0">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent 
                                    opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-10"></div>
                                <img
                                    src={category.images[currentImageIndex[index] || 0]}
                                    alt={category.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 
                                        transition-transform duration-700 ease-out"
                                    onError={(e) => {
                                        e.target.src = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800'
                                    }}
                                />
                                {/* Tag Overlay */}
                                <div className="absolute top-6 left-6 z-20">
                                    <span className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm 
                                        text-xs tracking-[2px] uppercase text-primary font-semibold">
                                        {category.tag}
                                    </span>
                                </div>
                                {/* Circular Indicators */}
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
                                    {category.images.map((_, imgIndex) => (
                                        <div
                                            key={imgIndex}
                                            className={`w-2 h-2 rounded-full transition-all duration-300 ${(currentImageIndex[index] || 0) === imgIndex
                                                ? 'bg-white scale-125'
                                                : 'bg-white/50'
                                                }`}
                                        ></div>
                                    ))}
                                </div>
                            </div>

                            {/* Content Container */}
                            <div className="p-8 bg-white flex-grow flex flex-col">
                                <h3 className="text-2xl font-heading font-bold text-primary mb-4 
                                    tracking-[2px] uppercase group-hover:text-secondary transition-colors duration-300">
                                    {category.name}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-6 font-body flex-grow">
                                    {category.description}
                                </p>
                                <div className="flex items-center gap-2 text-secondary group-hover:gap-4 
                                    transition-all duration-300">
                                    <span className="text-sm font-semibold tracking-wider uppercase">Explore</span>
                                    <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
                                </div>
                            </div>

                            {/* Decorative Border */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-accent to-secondary 
                                transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Products
