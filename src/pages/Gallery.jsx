import React from "react";
import { motion } from "framer-motion";
import Footer from "../component/Footer";

const images = [
    "https://i.pinimg.com/736x/a5/3c/c8/a53cc86f265afc600ef78b21a4c33a1f.jpg",
    "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?q=80&w=1976&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1625316708582-7c38734be31d?q=80&w=1974&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1677542200636-87e4f3f5e3eb?q=80&w=1972&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1924&auto=format&fit=crop",
    "https://i.pinimg.com/736x/ee/b9/1a/eeb91a6f37a2817b2c5a367c0900ac92.jpg",
    "https://i.pinimg.com/736x/71/cd/94/71cd944660d111dc7483688407dc571a.jpg",
    "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=1988&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?q=80&w=2071&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1734655154254-69d1d67f6a4e?q=80&w=2098&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1719177518277-9bf8126b277d?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1564585531329-8c74d6cc02b5?q=80&w=1964&auto=format&fit=crop",
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Gallery = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto p-4 mb-10 mt-10">
                <motion.h1 
                    className="text-center text-4xl font-bold mb-3 uppercase"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    HELLO! WELCOME TO <span className="text-orange-400">orange</span> <span className="text-green-400">biochem</span>
                </motion.h1>
                <motion.p 
                    className="text-center text-gray-500 mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    WITH CREATIVE & UNIQUE STYLE
                </motion.p>

                <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`overflow-hidden rounded-lg shadow-lg ${
                                index % 3 === 0 ? "row-span-2" : "row-span-1"
                            }`}
                        >
                            <img
                                src={src}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-auto object-cover transition duration-300 hover:opacity-80 rounded-lg"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
            <Footer />
        </motion.div>
    );
};

export default Gallery;
