import { useState } from 'react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm transition-all duration-300 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    {/* Logo */}
                    <div className="logo cursor-pointer flex items-center gap-2 md:gap-3">
                        {/* Logo Image */}
                        <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 bg-primary p-1 md:p-1.5 rounded">
                            <img
                                src={`${import.meta.env.BASE_URL}images/raux_logo.png`}
                                alt="Raux Brothers Logo"
                                className="w-full h-full object-contain brightness-0 invert"
                            />
                        </div>                        {/* Text */}
                        <div>
                            <h1 className="text-base md:text-xl lg:text-2xl font-logo font-semibold tracking-[0.18em] md:tracking-[0.25em] text-primary 
                                hover:text-secondary transition-colors duration-300 uppercase leading-tight">
                                RAUX BROTHERS
                            </h1>
                            <p className="text-[0.5rem] md:text-[0.6rem] tracking-[0.25em] md:tracking-[0.35em] text-muted mt-0.5 md:mt-1 font-light uppercase">
                                Est. 1959
                            </p>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden flex flex-col gap-1.5 p-2 z-[1001] group"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`w-6 h-[2px] bg-primary transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : 'group-hover:w-7'}`}></span>
                        <span className={`w-6 h-[2px] bg-primary transition-all duration-300 ${menuOpen ? 'opacity-0' : 'group-hover:w-5'}`}></span>
                        <span className={`w-6 h-[2px] bg-primary transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : 'group-hover:w-7'}`}></span>
                    </button>

                    {/* Desktop Menu */}
                    <ul className={`flex list-none gap-1 items-center 
                        max-md:fixed max-md:top-0 max-md:h-screen max-md:w-[320px] max-md:bg-white/95 
                        max-md:backdrop-blur-md max-md:flex-col max-md:justify-center max-md:shadow-2xl max-md:gap-6 max-md:px-6
                        max-md:transition-all max-md:duration-300 max-md:border-l max-md:border-gray-200
                        max-md:z-[1002]
                        ${menuOpen ? 'max-md:right-0' : 'max-md:-right-full'}`}>

                        <li>
                            <a
                                href="#home"
                                className="group relative px-4 py-2 text-sm font-medium tracking-[0.15em] text-primary uppercase
                                    transition-colors duration-300 inline-block hover:text-secondary"
                                onClick={() => setMenuOpen(false)}
                            >
                                Home
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary 
                                    group-hover:w-full transition-all duration-300 ease-out"></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="group relative px-4 py-2 text-sm font-medium tracking-[0.15em] text-primary uppercase
                                    transition-colors duration-300 inline-block hover:text-secondary"
                                onClick={() => setMenuOpen(false)}
                            >
                                About
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary 
                                    group-hover:w-full transition-all duration-300 ease-out"></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#products"
                                className="group relative px-4 py-2 text-sm font-medium tracking-[0.15em] text-primary uppercase
                                    transition-colors duration-300 inline-block hover:text-secondary"
                                onClick={() => setMenuOpen(false)}
                            >
                                Products
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary 
                                    group-hover:w-full transition-all duration-300 ease-out"></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#services"
                                className="group relative px-4 py-2 text-sm font-medium tracking-[0.15em] text-primary uppercase
                                    transition-colors duration-300 inline-block hover:text-secondary"
                                onClick={() => setMenuOpen(false)}
                            >
                                Services
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary 
                                    group-hover:w-full transition-all duration-300 ease-out"></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#portfolio"
                                className="group relative px-4 py-2 text-sm font-medium tracking-[0.15em] text-primary uppercase
                                    transition-colors duration-300 inline-block hover:text-secondary"
                                onClick={() => setMenuOpen(false)}
                            >
                                Portfolio
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary 
                                    group-hover:w-full transition-all duration-300 ease-out"></span>
                            </a>
                        </li>

                        {/* Divider */}
                        <li className="h-4 w-[1px] bg-gray-300 mx-3 max-md:w-16 max-md:h-[1px] max-md:my-2"></li>

                        <li>
                            <a
                                href="#contact"
                                className="group relative px-8 py-3 text-sm font-semibold tracking-[0.15em] text-white uppercase
                                    bg-secondary hover:bg-accent transition-all duration-300 inline-block
                                    hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 border-2 border-secondary hover:border-accent"
                                onClick={() => setMenuOpen(false)}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black/40 z-[1001]"
                    onClick={() => setMenuOpen(false)}
                ></div>
            )}
        </nav>
    )
}

export default Navbar
