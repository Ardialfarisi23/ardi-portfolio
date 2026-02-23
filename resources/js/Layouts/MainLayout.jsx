import React from 'react';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';

// MainLayout.jsx
export default function MainLayout({ children }) {
    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' }, 
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <div className="min-h-screen bg-[#F0F7FF] relative overflow-x-hidden">
            {/* Container untuk notifikasi Toast */}
            <Toaster position="bottom-right" reverseOrder={false} />

            {/* Background Decor */}
            <div className="fixed inset-0 -z-10 pointer-events-none">
                <motion.div 
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] bg-blue-200/40 blur-[100px] rounded-full"
                />
            </div>

            {/* Navbar Fixed */}
            <div className="fixed top-0 left-0 right-0 flex justify-center pt-6 z-50 px-4 pointer-events-none">
                <motion.nav 
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="pointer-events-auto bg-white/80 backdrop-blur-md border border-white/50 shadow-xl shadow-blue-900/5 p-1.5 rounded-full flex items-center space-x-1"
                >
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            className="relative px-5 md:px-8 py-2.5 group transition-all"
                        >
                            <motion.div
                                className="absolute inset-0 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 -z-10"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            />
                            <span className="text-blue-600 font-black text-xs md:text-sm tracking-wide group-hover:text-blue-700">
                                {link.name}
                            </span>
                        </a>
                    ))}
                </motion.nav>
            </div>

            {/* Spacer agar konten tidak tertutup navbar */}
            <div className="h-20"></div> 

            <main>{children}</main>
        </div>
    );
}