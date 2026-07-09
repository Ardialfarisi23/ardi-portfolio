import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
    return (
        <motion.div 
            whileHover={{ y: -8 }}
            className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
        >
            {/* Image Placeholder */}
            <div className="h-48 overflow-hidden bg-gray-100 relative">
                <img 
                    src={`/assets/projects/${project.image}`} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                />
            </div>
            {/* Content */}
            <div className="p-6 space-y-3">
                <h3 className="text-xl font-black text-gray-900 tracking-tight">{project.title}</h3>
                <p className="text-sm text-gray-500 font-medium line-clamp-2">{project.short_desc}</p>
                <div className="pt-4 flex flex-wrap gap-2">
                    {project.tech_stack.split(',').map((tech, index) => (
                        <span key={index} className="px-3 py-1 text-[9px] font-black uppercase tracking-widest text-[#0061FF] bg-blue-50 rounded-full">
                            {tech.trim()}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}