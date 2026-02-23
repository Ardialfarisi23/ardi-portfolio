import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

const ProjectDetail = ({ project }) => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Efek Parallax untuk Hero Image
    const yImage = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    if (!project) return null;

    // Animasi Variants untuk Staggered Effect
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    return (
        <MainLayout>
            <Head title={`${project.title} | Case Study`} />
            
            {/* Progress Bar Premium */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#0061FF] to-[#60EFFF] origin-left z-[100] shadow-[0_2px_10px_rgba(0,97,255,0.3)]"
                style={{ scaleX }}
            />

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-[#FCFCFD] min-h-screen pb-20 overflow-hidden"
            >
                {/* --- 1. HERO SECTION (Redesigned) --- */}
                <section className="relative pt-32 pb-32 px-6">
                    {/* Background Decorative Circles */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] opacity-60 pointer-events-none" />
                    
                    <div className="max-w-6xl mx-auto relative z-10">
                        <Link 
                            href="/" 
                            className="inline-flex items-center text-gray-400 hover:text-[#0061FF] font-bold text-xs mb-12 tracking-widest transition-all group"
                        >
                            <span className="bg-white shadow-sm border border-gray-100 rounded-full p-2 mr-4 group-hover:-translate-x-2 transition-transform">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                            </span>
                            BACK TO PORTFOLIO
                        </Link>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div 
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="space-y-8"
                            >
                                <div className="flex items-center space-x-4">
                                    <span className="px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full font-black uppercase tracking-[0.2em] text-[10px]">
                                        Case Study
                                    </span>
                                </div>
                                <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] tracking-tighter">
                                    {project.title}
                                </h1>
                                <p className="text-gray-500 text-xl font-medium leading-relaxed max-w-lg">
                                    {project.desc}
                                </p>
                            </motion.div>

                            <motion.div 
                                style={{ y: yImage }}
                                className="relative"
                            >
                                <div className="absolute -inset-10 bg-blue-400/20 rounded-[60px] blur-[80px] animate-pulse"></div>
                                <motion.div
                                    whileHover={{ scale: 1.02, rotateY: 5 }}
                                    className="relative rounded-[40px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] border-[8px] border-white"
                                >
                                    <img 
                                        src={project.image} 
                                        className="w-full h-full object-cover transform" 
                                        alt={project.title} 
                                    />
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* --- 2. MAIN CONTENT AREA --- */}
                <section className="max-w-6xl mx-auto px-6 py-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                        
                        {/* LEFT: STICKY INFO SIDEBAR (Glassmorphism) */}
                        <div className="lg:col-span-4">
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="sticky top-32 p-10 bg-white/80 backdrop-blur-xl rounded-[40px] border border-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] space-y-10"
                            >
                                <div>
                                    <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-4">My Roles</h4>
                                    <p className="text-gray-900 font-bold text-lg">{project.role || "Fullstack Developer & Designer"}</p>
                                </div>

                                <div>
                                    <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-4">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech && project.tech.map((t, idx) => (
                                            <span key={idx} className="px-4 py-2 bg-gray-900 text-white rounded-xl text-[10px] font-bold uppercase tracking-wider hover:bg-blue-600 transition-colors cursor-default">
                                                {t.label || t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-4">Platform</h4>
                                    <p className="text-gray-900 font-bold text-lg">{project.platform || "Web Application"}</p>
                                </div>

                                <div className="pt-6">
                                    <a href={project.live_url || "#"} target="_blank" rel="noopener noreferrer">
                                        <motion.button 
                                            whileHover={{ y: -5, backgroundColor: "#0061FF" }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-full bg-gray-900 text-white py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] shadow-2xl shadow-blue-200 transition-colors flex items-center justify-center space-x-3"
                                        >
                                            <span>View Live Project</span>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
                                        </motion.button>
                                    </a>
                                </div>
                            </motion.div>
                        </div>

                        {/* RIGHT: STORYTELLING CONTENT */}
                        <div className="lg:col-span-8 space-y-32">
                            {/* Problem Section */}
                            <motion.div {...fadeInUp} className="space-y-8">
                                <div className="inline-block">
                                    <h3 className="text-4xl font-black text-gray-900 tracking-tighter mb-2">The Challenge</h3>
                                    <div className="h-2 w-full bg-gradient-to-r from-blue-600 to-transparent rounded-full"></div>
                                </div>
                                <p className="text-gray-500 text-xl leading-[1.8] font-medium">
                                    {project.challenge || "Detail tantangan proyek sedang dalam proses pembaruan."}
                                </p>
                            </motion.div>

                            {/* Solution Section */}
                            <motion.div {...fadeInUp} className="space-y-8">
                                <div className="inline-block">
                                    <h3 className="text-4xl font-black text-gray-900 tracking-tighter mb-2">The Solution</h3>
                                    <div className="h-2 w-full bg-gradient-to-r from-cyan-400 to-transparent rounded-full"></div>
                                </div>
                                <p className="text-gray-500 text-xl leading-[1.8] font-medium">
                                    {project.solution || "Detail solusi proyek sedang dalam proses pembaruan."}
                                </p>
                                
                                {/* Showcase Image Grid with Hover Effect */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
                                    {[0, 1].map((i) => (
                                        <motion.div 
                                            key={i}
                                            whileHover={{ y: -15 }}
                                            className="group relative aspect-[4/3] bg-gray-100 rounded-[40px] overflow-hidden shadow-xl"
                                        >
                                            <img 
                                                src={project.gallery?.[i] || "/assets/placeholder-detail.jpg"} 
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                                alt={`Process ${i + 1}`} 
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                                <span className="text-white font-bold tracking-widest text-xs uppercase">View Insight</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* --- 3. FOOTER NAVIGATION (Next Project) --- */}
                <section className="max-w-6xl mx-auto px-6 mt-32">
                    <motion.div 
                        whileHover={{ scale: 0.98 }}
                        className="relative bg-gray-900 rounded-[50px] p-16 overflow-hidden group cursor-pointer"
                    >
                        {/* Background Decor */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        
                        <div className="relative z-10 flex flex-col items-center text-center space-y-8">
                            <p className="text-blue-400 font-black uppercase tracking-[0.4em] text-xs">Ready for more?</p>
                            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">Explore Other Projects</h2>
                            <Link 
                                href="/projects" 
                                className="inline-flex items-center space-x-4 bg-white text-gray-900 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all"
                            >
                                <span>All Case Studies</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </Link>
                        </div>
                    </motion.div>
                </section>
            </motion.div>
        </MainLayout>
    );
};

export default ProjectDetail;