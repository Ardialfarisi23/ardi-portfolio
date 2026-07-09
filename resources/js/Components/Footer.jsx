import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
    const [index, setIndex] = useState(0);
    const [activeTrack, setActiveTrack] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const words = ["Creative", "Aesthetic", "Interactive"];

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

    const tracks = [
        { title: 'Quick Love', artist: 'Reality Club', img: '/assets/RC.jpg', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
        { title: 'Free Love', artist: 'HONNE', img: '/assets/honne.jpg', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
        { title: 'Crush', artist: 'Johnny Stimson', img: '/assets/JS.jpg', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' }
    ];

    useEffect(() => {
        if (!activeTrack) {
            setActiveTrack(tracks[0]);
        }
    }, [activeTrack]);

    // Fungsi UX: Scroll ke atas dengan halus
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleTrackSelect = async (track) => {
        if (!audioRef.current) return;

        setActiveTrack(track);
        setIsPlaying(true);

        try {
            audioRef.current.pause();
            audioRef.current.src = track.audioUrl;
            audioRef.current.load();
            await audioRef.current.play();
        } catch (error) {
            setIsPlaying(false);
        }
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
                            <a href="https://drive.google.com/file/d/1_VkrKQlRcrs3Cosw11WCNlDX5Hz5bVVx/view?usp=sharing" className="hover:underline">Curriculum Vitae</a>
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

                        <div className="space-y-2 relative z-10">
                            {tracks.map((track, i) => {
                                const isCurrent = activeTrack?.title === track.title;

                                return (
                                    <motion.button
                                        key={i}
                                        type="button"
                                        whileHover={{ x: 4, backgroundColor: 'rgba(255,255,255,0.1)' }}
                                        onClick={() => handleTrackSelect(track)}
                                        className={`w-full flex items-center gap-3 p-2 rounded-xl transition-all text-left ${isCurrent ? 'bg-white/15 shadow-inner' : 'bg-transparent'}`}
                                    >
                                        <div className="w-11 h-11 rounded-xl overflow-hidden bg-blue-400 shadow-sm relative ring-1 ring-white/15">
                                            <img src={track.img} alt={track.title} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1 text-[10px]">
                                            <p className="font-black leading-tight">{track.title}</p>
                                            <p className="opacity-60 font-bold text-[9px]">{track.artist}</p>
                                        </div>
                                        <span className={`text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 rounded-full ${isCurrent ? 'bg-white text-[#0061FF]' : 'bg-white/15 text-white'}`}>
                                            {isCurrent ? 'Now' : 'Play'}
                                        </span>
                                    </motion.button>
                                );
                            })}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 rounded-[20px] border border-white/15 bg-white/10 p-4 backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.18)]"
                        >
                            <div className="flex items-center justify-between mb-3">
                                <p className="text-[9px] font-black uppercase tracking-[0.25em] opacity-70">Now Playing</p>
                                <span className="text-[8px] font-bold uppercase tracking-[0.25em] bg-white/15 px-2 py-1 rounded-full">In Site</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-lg ring-1 ring-white/20">
                                    <img src={activeTrack?.img || tracks[0].img} alt={activeTrack?.title || tracks[0].title} className="w-full h-full object-cover" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-sm font-black leading-tight truncate">{activeTrack?.title || tracks[0].title}</p>
                                    <p className="text-[11px] opacity-70 font-semibold truncate">{activeTrack?.artist || tracks[0].artist}</p>
                                </div>
                            </div>

                            <div className="mt-3 flex items-center gap-1 overflow-hidden rounded-full bg-white/15 p-1">
                                {[0.35, 0.7, 0.45, 0.8, 0.6, 0.9].map((width, index) => (
                                    <div key={index} className="h-2 flex-1 rounded-full bg-gradient-to-r from-white/70 to-blue-200/80" style={{ width: `${width * 100}%` }} />
                                ))}
                            </div>

                            <div className="mt-4 flex items-center justify-between gap-2">
                                <button
                                    type="button"
                                    onClick={() => handleTrackSelect(activeTrack || tracks[0])}
                                    className="flex-1 rounded-full bg-white px-3 py-2 text-[10px] font-black text-[#0061FF] shadow-sm transition-transform hover:scale-[1.02]"
                                >
                                    {isPlaying ? 'Playing' : 'Play Now'}
                                </button>
                                <div className="rounded-full border border-white/20 px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/90">
                                    {isPlaying ? 'Live' : 'Ready'}
                                </div>
                            </div>
                        </motion.div>

                        <audio ref={audioRef} preload="auto" />
                        
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