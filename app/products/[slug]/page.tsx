"use client"

import { useParams } from 'next/navigation'
import { Lobster } from 'next/font/google'
import { motion } from 'framer-motion'
import Link from 'next/link'

const lobster = Lobster({ subsets: ['latin'], weight: '400' })

const ALL_PRODUCTS = [
    {
        slug: 'red-chili-sauce',
        name: 'Red Chili Sauce',
        description: 'Crafted from handpicked, sun-ripened red chilies, this rich and vibrant Red Chili Sauce delivers the perfect balance of heat, flavor, and freshness...',
        gallery: ['/Mockups/Red (1).png', '/Mockups/Red (2).png', '/Mockups/Red (3).png'],
        info: 'Blended with carefully selected spices, garlic, and a hint of tanginess, this sauce enhances everything from snacks to full-course dishes.',
        features: ['Spicy', 'Tangy', 'Bold', 'Rich Natural Color', 'Multi-Purpose Use', 'No Artificial Preservatives', 'Premium Packaging Appeal']
    },
    {
        slug: 'green-chili-sauce',
        name: 'Green Chili Sauce',
        description: 'Green Chili Sauce, crafted to deliver a fresh, vibrant heat with a natural herbal twist...',
        gallery: ['/slide2.jpg'],
        info: 'Perfect for modern kitchens, this product reflects quality, freshness, and a clean, natural flavor profile in every drop.',
        features: ['Fresh & Zesty Flavor', 'Natural Green Appearance', 'Smooth with Light Texture', 'Clean & Fresh Feel']
    },
    {
        slug: 'dark-soy-sauce',
        name: 'Dark-soy Sauce',
        description: 'Dark Soy Sauce, crafted to deliver a deep, rich flavor with a smooth, glossy finish...',
        gallery: ['/Mockups/Dark.png', '/Mockups/Dark2.png', '/Mockups/Dark3.png'],
        info: 'Designed for both home and professional kitchens, it brings a balanced blend of tradition and modern quality.',
        features: ['Smooth & Slightly Thick Texture', 'Well-Balanced Blend', 'Authentic Taste Profile', 'Hygienically Processed', 'Multipurpose Use']
    },
    {
        slug: 'pizza-pasta-sauce',
        name: 'pizza pasta Sauce',
        description: 'Pizza Pasta Sauce, specially crafted to bring rich, authentic Italian-style flavor to everyday cooking...',
        gallery: ['/Mockups/Pizza1.png', '/Mockups/Pizza2.png', '/Mockups/Pizza3.png'],
        info: 'Designed for convenience without compromising on taste.',
        features: ['Herb-Infused Flavor', 'Ready-to-Use Convenience', 'Quality Assured Production', 'Versatile Application']
    },
    {
        slug: 'tomato-ketchup',
        name: 'Tomato Ketchup',
        description: 'Tomato Ketchup, made from carefully selected, ripe tomatoes to deliver a rich, smooth, and naturally sweet taste.',
        gallery: ['/Mockups/Tomato.png', '/Mockups/Tomato2.png', '/Mockups/Tomato3.png'],
        info: 'Its silky texture and consistent flavor make it an essential addition to every kitchen.',
        features: ['Ripe Tomatoes', 'Sweet & Tangy', 'Snack Companion', 'Consistent Taste']
    },
    {
        slug: 'schezwan-chutney',
        name: 'Schezwan Chutney',
        description: 'Schezwan Chutney, crafted to deliver a bold, spicy, and garlicky flavor inspired by Indo-Chinese cuisine.',
        gallery: ['/Mockups/Schezwan.png', '/Mockups/Schezwan2.png', '/Mockups/Shezwan3.png'],
        info: 'Perfect for those who love intense heat and strong flavors.',
        features: ['Strong garlic infusion', 'Ideal for cooking', 'Hygienically processed', 'High heat intensity']
    },
    {
        slug: 'imli-chutney',
        name: 'Tikhi Imli Chutney',
        description: 'Tikhi Imli Chutney, combining the tangy richness of tamarind with a spicy kick.',
        gallery: ['/Mockups/Tikhi.png', '/Mockups/Tikhi2.png', '/Mockups/Tikhi3.png'], // FIXED PATH
        info: 'A perfect companion for Indian snacks, it adds a burst of flavor.',
        features: ['Tangy tamarind base', 'Hygienically prepared', 'Traditional taste', 'Ideal for chaat']
    },
    {
        slug: 'dhaniya-chutney',
        name: 'Chatpata Dhaniya Chutney',
        description: 'Chatpata Dhaniya Chutney, made from fresh coriander leaves blended with spices to deliver a refreshing flavor.',
        gallery: ['/Mockups/Dhaniya.png', '/Mockups/Dhaniya1.png', '/Mockups/Dhaniya2.png'],
        info: 'Light, fresh, and full of flavor.',
        features: ['Fresh coriander', 'Zesty flavor', 'Natural Green', 'Perfect for snacks']
    },
    {
        slug: 'methi-imli-chutney',
        name: 'Methi Imli Chutney',
        description: 'Methi Imli Chutney, a unique blend of fenugreek and tamarind.',
        gallery: ['/Mockups/imli.png', '/Mockups/imli2.png', '/Mockups/imli3.png'], // FIXED PATH
        info: 'Its balanced flavor makes it a versatile chutney.',
        features: ['Fenugreek-infused', 'Tamarind tang', 'Sweet & Bitter balance', 'Smooth consistency']
    },
    {
        slug: 'ginger-garlic-paste',
        name: 'Ginger Garlic Paste',
        description: 'Ginger Garlic Paste, made from fresh ginger and garlic to deliver a strong, authentic base for cooking.',
        gallery: ['/Mockups/Ginger (1).png', '/Mockups/Ginger (2).png', '/Mockups/Ginger (3).png'], // FIXED PATH
        info: 'Designed for convenience and quality, ensuring consistent taste.',
        features: ['Fresh Garlic', 'High-quality Ginger', 'Fine consistency', 'Essential base']
    },
]

export default function ProductDetail() {
    const params = useParams()
    const slug = params.slug

    const product = ALL_PRODUCTS.find((p) => p.slug === slug)

    if (!product) {
        return (
            <div className="h-screen flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold">Product not found</h1>
                <Link href="/products" className="text-green-700 underline mt-4">
                    Back to Products
                </Link>
            </div>
        )
    }

    return (
        <main className="bg-white">
            <section className="max-w-7xl mx-auto px-4 py-16">
                <div className="mb-12 text-center md:text-left">
                    <h2 className={`${lobster.className} text-red-600 text-5xl md:text-7xl mb-4`}>
                        {product.name}
                    </h2>
                    <p className="text-gray-500 uppercase tracking-[0.2em] text-sm">
                        Artisanal Collection • {product.gallery.length} Perspectives
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.gallery.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className={`relative overflow-hidden rounded-2xl bg-gray-100 ${
                                i % 3 === 0 ? "md:col-span-2 aspect-[16/9]" : "aspect-square"
                            }`}
                        >
                            <img
                                src={img}
                                alt={`${product.name} gallery view ${i + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                onError={(e) => {
                                    // Fallback for broken images
                                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/800x600?text=Image+Not+Found"
                                }}
                            />
                            <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300" />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Details Section */}
            <section className="relative z-10 bg-white py-24 px-6 border-t border-gray-50">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-16 border-b border-gray-100 pb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-6">
                            Overview: {product.name}
                        </h2>
                        <p className="text-xl text-gray-600 font-bold leading-relaxed max-w-3xl">
                            {product.info}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                                <span className="w-8 h-[2px] bg-green-700"></span>
                                Detailed Description
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        <div className="bg-gray-50 p-8 md:p-10 rounded-3xl border border-yellow-500 shadow-xl">
                            <h3 className="text-xl font-bold mb-6 text-yellow-600 uppercase tracking-widest">
                                Key Features
                            </h3>
                            <ul className="grid gap-4">
                                {product.features.map((f, i) => (
                                    <li key={i} className="flex items-start gap-4 text-gray-700 group">
                                        <span className="mt-2 w-2 h-2 bg-yellow-600 rounded-full shrink-0 group-hover:scale-150 transition-transform"></span>
                                        <span className="text-lg font-medium">{f}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="/contact"
                                className="block mt-10 text-center bg-red-800 hover:bg-red-700 text-white py-4 rounded-2xl transition-all font-semibold shadow-lg"
                            >
                                Request Bulk Inquiry
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <Link href="/products" className="text-green-700 underline mt-4">
                    Back to Products
                </Link>
        </main>
    )
}