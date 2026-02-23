import React from 'react';
import { motion } from 'framer-motion';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

const Projects = ({ projects }) => {
    // Variasi animasi untuk container (stagger effect)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    // Variasi animasi untuk tiap item
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <MainLayout>
            <Head title="Our Projects | Portfolio" />
            
            <div className="bg-[#FCFCFD] min-h-screen pt-32 pb-20 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Header Section */}
                    <header className="mb-20 space-y-4">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center space-x-3"
                        >
                            <span className="w-12 h-[2px] bg-[#0061FF]"></span>
                            <span className="text-[#0061FF] font-black uppercase tracking-[0.3em] text-xs">Portfolio</span>
                        </motion.div>
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter"
                        >
                            All Creative <span className="text-gray-400">Works.</span>
                        </motion.h1>
                    </header>

                    {/* Project Grid */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {projects.map((project, index) => (
                            <motion.div 
                                key={index} 
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                className="group bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500"
                            >
                                <Link href={project.link}>
                                    {/* Thumbnail */}
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <img 
                                            src={project.image} 
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors"></div>
                                    </div>

                                    {/* Info */}
                                    <div className="p-8 space-y-4">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech?.slice(0, 3).map((t, i) => (
                                                <span key={i} className="text-[9px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-1 rounded-md">
                                                    {t.label || t}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="text-xl font-black text-gray-900 leading-tight group-hover:text-[#0061FF] transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm font-medium line-clamp-2">
                                            {project.desc}
                                        </p>
                                        <div className="pt-4 flex items-center text-[#0061FF] font-black text-xs uppercase tracking-widest">
                                            <span>Read Case Study</span>
                                            <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Projects;