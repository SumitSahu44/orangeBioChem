
import { motion } from "framer-motion";
import Footer from "../component/Footer";

const blogs = [
    {
        id: 1,
        title: "Best Nutrition Tips for Your Pets",
        description: "Discover the best diet plans to keep your pets healthy and active.",
        image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=800&h=500&fit=crop",
    },
    {
        id: 2,
        title: "Eco-Friendly Animal Products You Should Try",
        description: "A guide to sustainable and eco-friendly pet care essentials.",
        image: "https://images.unsplash.com/photo-1527526029430-319f10814151?q=80&w=800&h=500&fit=crop",
    },
    {
        id: 3,
        title: "How to Train Your Dog with Positive Reinforcement",
        description: "Learn effective training techniques to enhance your pet’s behavior.",
        image: "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?q=80&w=800&h=500&fit=crop",
    },
];

const BlogSection = () => {
    return (
        <section>
            <div className="py-12 px-4 md:px-16 bg-gray-100 mb-20">
                <motion.h2
                    className="text-4xl font-bold text-center text-gray-800 mb-20"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Latest Blog Posts
                </motion.h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map((blog) => (
                        <motion.div
                            key={blog.id}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <img src={blog.image} alt={blog.title} className="w-full h-60 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-900">{blog.title}</h3>
                                <p className="text-gray-600 mt-2">{blog.description}</p>
                                <motion.button
                                    className="mt-4 text-blue-500 font-semibold hover:underline"
                                    whileHover={{ x: 5 }}
                                >
                                    Read More →
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default BlogSection;
