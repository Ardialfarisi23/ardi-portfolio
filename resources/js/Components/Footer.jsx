import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
    const [index, setIndex] = useState(0);
    const words = ["Creative", "Aesthetic", "Cool"];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const techStack = [
        { label: 'Design in', tool: 'Figma', fileName: 'Figma.png' },
        { label: 'Built With', tool: 'Laravel', fileName: 'Laravel.png' },
        { label: 'Styled with', tool: 'React', fileName: 'React.png' },
        { label: 'Deploy on', tool: 'Vercel', fileName: 'Vercel.png' },
    ];

    const socialLinks = [
    { name: 'github', url: 'https://github.com/Ardialfarisi23', icon: 'github' },
    { name: 'instagram', url: 'https://www.instagram.com/ardiialfarisi/', icon: 'instagram' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/ardi-alfarisi/', icon: 'linkedin-in' },
    { name: 'pinterest', url: 'https://id.pinterest.com/ardialfarisikece/', icon: 'pinterest-p' },
    { name: 'spotify', url: 'https://open.spotify.com/user/ardialfarisi', icon: 'spotify' },
    { name: 'tiktok', url: 'https://www.tiktok.com/@ardialfarisi23', icon: 'tiktok' },
];

    // Fungsi UX: Scroll ke atas dengan halus
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        // RAMPING: pt-12 (sebelumnya pt-24) dan pb-6 (sebelumnya pb-8)
        <footer className="bg-white pt-12 pb-6 px-6 md:px-20 border-t border-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                
                {/* --- KIRI: Social, Links & Tech --- */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-black text-[#0061FF] tracking-tight">Social Media</h2>
                        <div className="flex gap-3">
    {socialLinks.map((social) => (
        <motion.a 
            key={social.name}
            whileHover={{ y: -4, backgroundColor: '#004ecf' }}
            href={social.url} 
            target="_blank"             // Membuka di tab baru
            rel="noopener noreferrer"    // Keamanan tambahan saat buka link eksternal
            className="w-9 h-9 bg-[#0061FF] rounded-full flex items-center justify-center text-white text-base shadow-sm transition-colors"
        >
            <i className={`fab fa-${social.icon}`}></i>
        </motion.a>
    ))}
</div>
                    </div>

                    <div className="space-y-2 font-bold text-xs text-[#0061FF]">
                        <div className="flex items-center gap-3 group">
                            <i className="fas fa-envelope text-base"></i>
                            <a href="mailto:Ardialfarisi27@gmail.com" className="group-hover:underline">Ardialfarisi27@gmail.com</a>
                            <span className="text-gray-300 font-medium italic hidden md:inline opacity-0 group-hover:opacity-100 transition-opacity">(Available for internship)</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <i className="fas fa-file-alt text-base"></i>
                            <a href="https://drive.google.com/file/d/1_zytRVxO8_2QLvB2darGX3Jg-OXwWIL2/view?usp=drive_link" className="hover:underline">Curriculum Vitae</a>
                        </div>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-gray-50 w-fit">
                        {techStack.map((item, i) => (
                            <div key={i} className="flex items-center gap-3 text-[9px] font-black text-gray-400 uppercase tracking-widest">
                                <span>{item.label}</span>
                                <img 
                                    src={`/assets/icons/${item.fileName}`} 
                                    alt={item.tool} 
                                    className="w-3.5 h-3.5 object-contain grayscale hover:grayscale-0 transition-all duration-300" 
                                />
                                <span className="text-[#0061FF]/70">{item.tool}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- KANAN: "The Playlist Library" --- */}
                <div className="w-full max-w-[340px] justify-self-end">
                    <div className="bg-[#0061FF] rounded-[24px] p-5 text-white shadow-xl relative overflow-hidden group">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-[9px] font-black uppercase tracking-[0.2em] opacity-70">Library / On Repeat</span>
                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                                <i className="fab fa-spotify text-lg opacity-80"></i>
                            </motion.div>
                        </div>

                        <div className="space-y-3 relative z-10">
                            {[
                                { title: "Quick Love", artist: "Reality Club", img: "/assets/RC.jpg" },
                                { title: "Charlie Garden", artist: "Djo", img: "/assets/djo.jpg" },
                                { title: "Crush", artist: "Johnny Stimson", img: "/assets/JS.jpg" }
                            ].map((track, i) => (
                                <motion.div 
                                    key={i} 
                                    whileHover={{ x: 6, backgroundColor: 'rgba(255,255,255,0.05)' }}
                                    className="flex items-center gap-3 p-1 rounded-lg transition-colors cursor-default"
                                >
                                    <div className="w-10 h-10 rounded-md overflow-hidden bg-blue-400 shadow-sm relative">
                                        <img src={track.img} alt={track.title} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="text-[10px]">
                                        <p className="font-black leading-tight">{track.title}</p>
                                        <p className="opacity-60 font-bold text-[9px]">{track.artist}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        
                        <div className="mt-6 pt-3 border-t border-white/10 flex justify-between items-center">
                            <p className="text-[8px] font-bold opacity-50">Curated Playlist</p>
                            <button className="text-[8px] font-black bg-white text-[#0061FF] px-3 py-1.5 rounded-full uppercase transition-transform">My Top Three</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 flex flex-col items-center relative">
                <button 
                    onClick={scrollToTop}
                    className="mb-6 w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#0061FF] hover:border-[#0061FF] transition-all group"
                >
                    <i className="fas fa-chevron-up text-xs group-hover:-translate-y-1 transition-transform"></i>
                </button>

                <div className="flex items-center gap-2 text-2xl md:text-4xl font-black italic">
                    <span className="text-gray-900 tracking-tighter">Let's be</span>
                    <div className="h-[1.2em] overflow-hidden relative min-w-[140px] md:min-w-[200px]">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={words[index]}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.4, ease: "backOut" }}
                                className="absolute left-0 text-white"
                                style={{ WebkitTextStroke: '1.2px #0061FF' }}
                            >
                                {words[index]}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                </div>
                <p className="mt-6 text-[7px] font-bold text-blue-300 uppercase tracking-[0.4em]">
                    Copyright © 2026 Ardi Alfarisi. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;