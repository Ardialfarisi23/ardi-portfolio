import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { motion } from 'framer-motion';
import { Link, useForm } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import toast from 'react-hot-toast';


// --- KOMPONEN 1: AutoCursor ---
const AutoCursor = () => (
    <motion.div
        className="absolute z-30 pointer-events-none flex flex-col items-start"
        initial={{ left: "80%", top: "60%", opacity: 0 }}
        animate={{
            left: ["80%", "50%", "30%", "30%", "20%"], 
            top: ["60%", "50%", "45%", "45%", "50%"],
            opacity: [0, 1, 1, 1, 1],
            scale: [1, 1, 1, 0.8, 1],
        }}
        transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
        }}
    >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="drop-shadow-lg">
            <path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19841L11.7841 12.3673H5.65376Z" fill="#2563EB" stroke="white"/>
        </svg>
        <motion.div 
            className="bg-blue-600 text-white text-[10px] px-2 py-1 rounded-md ml-4 -mt-2 font-bold whitespace-nowrap shadow-md"
        >
            Ardi Alfarisi
        </motion.div>
    </motion.div>
);

// --- KOMPONEN 2: QuoteSection (Jarak Dirapatkan) ---
const QuoteSection = () => {
    return (
        // Mengurangi mt-24 menjadi mt-12 dan pb-20 menjadi pb-10
        <section className="max-w-4xl mx-auto mt-12 px-6 text-center pb-10">
            <div className="relative group flex justify-center items-center py-6">
                <AutoCursor />
                <div className="relative inline-block p-4">
                    <motion.div
                        className="absolute inset-0 border-[1.5px] border-blue-500 bg-blue-500/5 z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0, 1, 1, 0] }}
                        transition={{ duration: 7, repeat: Infinity, repeatType: "mirror" }}
                    >
                        <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-blue-500 rounded-sm" />
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-blue-500 rounded-sm" />
                        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-blue-500 rounded-sm" />
                        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-blue-500 rounded-sm" />
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[1.5px] h-6 bg-blue-500">
                            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white border border-blue-500 rounded-full" />
                        </div>
                    </motion.div>

                    <h3 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight relative z-20 pointer-events-none">
                        "The only thing more powerful than a complex algorithm is a design that understands the human heart."
                    </h3>
                </div>
            </div>
        </section>
    );
};

// --- KOMPONEN 3: ServiceCard (Efek Flip 3D) ---
const ServiceCard = ({ title, icon, tagColor, description, details }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <div 
            className="relative w-full h-full cursor-pointer group"
            style={{ perspective: "1000px" }} // Memberikan kedalaman 3D
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <motion.div
                className="w-full h-full relative"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, animationDirection: "normal", type: "spring", stiffness: 260, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* --- SISI DEPAN (FRONT) --- */}
                <div 
                    className="absolute inset-0 w-full h-full backface-hidden"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <section id="skills"></section>
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-[#0061FF] rounded-[30px] shadow-2xl overflow-hidden relative border-4 border-white/10 h-full flex flex-col"
                    >
                        <div className="absolute top-0 left-0 z-20">
                            <div className={`${tagColor} px-6 py-2 rounded-br-[20px] flex items-center space-x-2 shadow-md`}>
                                <div className="w-3 h-3 bg-white/50 rounded-full" />
                                <span className="text-white font-black text-xs md:text-sm uppercase tracking-tighter">
                                    {title}
                                </span>
                            </div>
                        </div>

                        <div className="pt-16 pb-8 px-6 flex flex-grow justify-center items-center relative min-h-[250px]">
                            <div className="absolute inset-0 opacity-20 pointer-events-none">
                                <div className="absolute top-10 right-10 w-4 h-4 bg-yellow-300 rounded-full blur-sm" />
                                <div className="absolute bottom-10 left-10 w-3 h-3 bg-white rounded-full blur-sm" />
                            </div>
                            <img src={icon} alt={title} className="w-48 h-auto object-contain z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]" />
                        </div>

                        <div className="bg-white py-2 overflow-hidden border-t-2 border-white mt-auto">
                            <motion.div 
                                className="flex whitespace-nowrap"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            >
                                <span className="text-[#0061FF] font-black text-[10px] uppercase px-4">• {description} • {description}</span>
                                <span className="text-[#0061FF] font-black text-[10px] uppercase px-4">• {description} • {description}</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* --- SISI BELAKANG (BACK) --- */}
                <div 
                    className="absolute inset-0 w-full h-full"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <div className="bg-[#0052db] rounded-[30px] shadow-2xl overflow-hidden relative border-4 border-white/20 h-full flex flex-col p-8 text-white">
                        <div className="flex flex-col h-full justify-center space-y-4">
                            <h4 className="text-xl font-black uppercase tracking-tight border-b-2 border-yellow-400 inline-block pb-1">
                                {title}
                            </h4>
                            <p className="text-sm font-medium leading-relaxed text-blue-50">
                                {details}
                            </p>
                            <div className="pt-4">
                                <span className="bg-white/10 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">
                                    Click to Flip Back
                                </span>
                            </div>
                        </div>
                        {/* Pattern background belakang agar tetap konsisten */}
                        <div className="absolute bottom-4 right-4 opacity-10">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="white"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const AvailableSection = () => {
    const services = [
        { 
            title: 'Front-End', 
            icon: '/assets/frontend-ill.png', 
            tagColor: 'bg-[#FFB800]', 
            description: 'Front-End Developer',
            details: 'Expertise in building responsive websites using React, Tailwind CSS, and Framer Motion. Focused on performance and smooth user experiences.'
        },
        { 
            title: 'UI/UX Designer', 
            icon: '/assets/uiux-ill.png', 
            tagColor: 'bg-[#FFD933]', 
            description: 'UI/UX Designer',
            details: 'Building intuitive digital experiences through precise and systematic user interface (UI) design. Focusing on developing scalable design systems, meaningful micro-interactions, and data-driven layouts to optimize user satisfaction.'
        },
        { 
            title: 'System Analyst', 
            icon: '/assets/analyst-ill.png', 
            tagColor: 'bg-[#FF9900]', 
            description: 'System Analyst',
            details: 'Analyzing business requirements and designing system architectures. Experienced in database design (MySQL) and technical documentation.'
        },
    ];

    return (
        <section className="max-w-6xl mx-auto px-6 py-12">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center mb-8"
            >
                <h2 className="text-5xl font-black text-[#0061FF] mb-2">Available for</h2>
                <div className="h-1.5 w-24 bg-[#0061FF] mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, type: "spring" }}
                        className="flex min-h-[300px]" // Memberikan tinggi minimum agar kartu tetap proporsional
                    >
                        <ServiceCard {...service} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

// --- KOMPONEN 4: TechStackSection (Logo Loop) ---
const TechStackSection = () => {
    // Daftar logo sesuai gambar Frame 7.png
    const logos = [
        { name: 'HTML5', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'Laravel', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
        { name: 'CodeIgniter', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg' },
        { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'VS Code', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'Bootstrap', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
        { name: 'MySQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'Figma', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    ];

    return (
        <section className="py-12 overflow-hidden bg-gray-50/50">
            <div className="max-w-6xl mx-auto px-6 mb-8 text-center">
                <h3 className="text-xl font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">
                    Tech Stack & Tools
                </h3>
            </div>

            {/* Logo Loop Container */}
            <div className="relative flex overflow-x-hidden">
                <motion.div 
                    className="flex space-x-12 items-center"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                >
                    {/* Render dua kali untuk infinite loop yang mulus */}
                    {[...logos, ...logos].map((logo, index) => (
                        <div 
                            key={index} 
                            className="flex-shrink-0 group flex flex-col items-center justify-center space-y-2"
                        >
                            <div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center p-4 grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110">
                                <img 
                                    src={logo.src} 
                                    alt={logo.name} 
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                            <span className="text-[10px] font-bold text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                {logo.name}
                            </span>
                        </div>
                    ))}
                </motion.div>

                {/* Gradient Overlay di pinggir agar terlihat halus menghilang */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
};

// --- KOMPONEN 5: ProjectSection ---
const ProjectSection = () => {
    const projects = [
        {
            title: "SIM Padepokan Pencak Silat Laskar Panglipur",
            desc: "An integrated digital platform for operational automation and data management of the Padepokan Laskar Panglipur, aligning tradition with modern management efficiency.",
            tech: [
                { id: "html5", label: "HTML5" },
                { id: "css3", label: "CSS3" },
                { id: "javascript", label: "JavaScript" },
                { id: "laravel", label: "PHP Framework" },
                { id: "react", label: "Frontend Library" },
                { id: "vscode", label: "Code Editor" },
                { id: "figma", label: "UI/UX Design" }
            ],
            image: "/assets/project-sim.jpg",
            link: "/projects/sim-padepokan"
        },
        {
            title: "E-Learning Foreign Languages App Spikoo",
            desc: "An interactive foreign language e-learning application designed to simplify the language learning process through an adaptive and enjoyable digital experience.",
            tech: [
                { id: "figma", label: "UI/UX Design" }
            ],
            image: "/assets/project-spikoo.jpg",
            link: "/projects/spikoo"
        },
        {
            title: "IoT Control Application Smart Box Hydroponics",
            desc: "Integrated IoT control application for real-time monitoring and automation of hydroponic ecosystems, ensuring plant growth optimization through synchronization of sensor and actuator data.",
            tech: [
                { id: "figma", label: "UI/UX Design" }
            ],
            image: "/assets/project-iot.jpg",
            link: "/projects/iot-hydroponic"
        }
    ];

    return (
        /* Wrapper Biru: Padding bottom dikurangi agar tidak terlalu jauh dengan Contact */
        <div className="bg-[#005ED4] w-full pt-20 pb-10 mt-10">
            <section id="projects"></section>
            <section className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col space-y-10">
                    {/* Header Section */}
                    <div className="flex items-center space-x-6 mb-4">
                        <h2 className="text-5xl font-black text-white italic tracking-tighter">Projects</h2>
                        <div className="h-1 flex-grow bg-white/20 rounded-full" />
                    </div>

                    {/* List of Project Cards */}
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#F3F4F6] rounded-[45px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 overflow-hidden shadow-2xl group"
                        >
                            <div className="md:w-1/2 flex flex-col items-start space-y-6">
                                <h3 className="text-3xl md:text-4xl font-black text-gray-900 leading-[1.1]">
                                    {project.title}
                                </h3>
                                <p className="text-gray-500 font-medium text-sm md:text-base leading-relaxed">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-3">
                                    {project.tech.map((t) => (
                                        <div key={t.id} className="group/tooltip relative flex flex-col items-center">
                                            <div className="w-9 h-9 flex items-center justify-center bg-white rounded-lg shadow-sm p-2 border border-gray-100 transition-all duration-300 hover:border-blue-400">
                                                <img 
                                                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${t.id}/${t.id}-original.svg`} 
                                                    alt={t.label} 
                                                    className="w-full h-full grayscale group-hover/tooltip:grayscale-0 transition-all cursor-help"
                                                    onError={(e) => { e.target.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' }}
                                                />
                                            </div>
                                            <div className="absolute bottom-full mb-2 flex flex-col items-center hidden group-hover/tooltip:flex animate-in fade-in zoom-in duration-200">
                                                <span className="relative z-10 p-2 text-[10px] font-bold leading-none text-white whitespace-nowrap bg-gray-900 rounded-md shadow-lg">
                                                    {t.label}
                                                </span>
                                                <div className="w-2 h-2 -mt-1 rotate-45 bg-gray-900"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href={project.link}
                                    className="bg-[#0061FF] text-white px-10 py-3.5 rounded-full text-xs font-black uppercase tracking-[0.15em] shadow-lg shadow-blue-200 mt-4 inline-block"
                                >
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        More Details
                                    </motion.div>
                                </Link>
                            </div>

                            <div className="md:w-1/2 flex justify-center items-center">
                                <div className="relative overflow-hidden rounded-[32px] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Footer Section */}
                    <div className="flex justify-center pt-10">
                        <Link
                            href="/projects"
                            className="bg-white text-[#005ED4] px-12 py-4 rounded-2xl text-sm font-black uppercase tracking-widest flex items-center space-x-3 group shadow-xl transition-transform hover:scale-105 active:scale-95"
                        >
                            <span>More Projects</span>
                            <span className="group-hover:translate-x-2 transition-transform">→</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

// --- CONTACT SECTION COMPONENT ---
const ContactSection = () => {
    const { data, setData, post, processing, reset, errors } = useForm({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e) => {
    e.preventDefault();
    
    const loadingToast = toast.loading('Sending your message...');

    post(route('contact.send'), {
        preserveScroll: true, // <--- TAMBAHKAN INI agar layar tidak loncat ke atas
        onSuccess: () => {
            toast.dismiss(loadingToast);
            toast.success('Pesan terkirim! Ardi akan segera membalasnya.', {
                duration: 5000,
                style: {
                    borderRadius: '20px',
                    background: '#333',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: '14px',
                },
            });
            reset();
        },
        onError: () => {
            toast.dismiss(loadingToast);
            toast.error('Gagal mengirim pesan. Coba lagi ya!');
        }
    });
};

    return (
        /* Padding top dibuat minimal agar rapat dengan section project */
        <section id="contact" className="bg-[#005ED4] pt-10 pb-32 px-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

            <div className="max-w-5xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row"
                >
                    {/* Info Side */}
                    <div className="md:w-1/3 bg-gray-50 p-12 flex flex-col justify-between border-r border-gray-100">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-4xl font-black text-gray-900 tracking-tighter mb-4">Contact Me</h2>
                                <p className="text-gray-500 font-medium leading-relaxed text-sm">
                                    Have an interesting project idea or just want to ask a question? I'm always open to new discussions.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4 group">
                                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Location</p>
                                        <p className="text-gray-900 font-bold text-xs">Garut, West Java, Indonesia</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="md:w-2/3 p-12 md:p-16">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Name</label>
                                    <input 
                                        type="text" 
                                        required
                                        value={data.name}
                                        onChange={e => setData('name', e.target.value)}
                                        placeholder="Your Name" 
                                        className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-gray-900 font-bold focus:ring-2 focus:ring-blue-600 transition-all placeholder:text-gray-300 text-sm"
                                    />
                                    {errors.name && <p className="text-red-500 text-[10px] mt-1">{errors.name}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email</label>
                                    <input 
                                        type="email" 
                                        required
                                        value={data.email}
                                        onChange={e => setData('email', e.target.value)}
                                        placeholder="Your Email" 
                                        className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-gray-900 font-bold focus:ring-2 focus:ring-blue-600 transition-all placeholder:text-gray-300 text-sm"
                                    />
                                    {errors.email && <p className="text-red-500 text-[10px] mt-1">{errors.email}</p>}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Messages</label>
                                <textarea 
                                    rows="4" 
                                    required
                                    value={data.message}
                                    onChange={e => setData('message', e.target.value)}
                                    placeholder="Write Your Messages" 
                                    className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-gray-900 font-bold focus:ring-2 focus:ring-blue-600 transition-all placeholder:text-gray-300 text-sm resize-none"
                                ></textarea>
                                {errors.message && <p className="text-red-500 text-[10px] mt-1">{errors.message}</p>}
                            </div>
                            
                            <motion.button 
                                disabled={processing}
                                whileHover={{ scale: processing ? 1 : 1.02 }}
                                whileTap={{ scale: processing ? 1 : 0.98 }}
                                type="submit"
                                className={`w-full py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl transition-all ${processing ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#005ED4] hover:bg-blue-700 text-white shadow-blue-200'}`}
                            >
                                {processing ? 'Sending...' : 'Submit'}
                            </motion.button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// --- KOMPONEN UTAMA ---
export default function Home({ projects }) {
    return (
        <MainLayout>
            <Head title="Ardi Alfarisi | Portfolio" />
            
            {/* --- ABOUT SECTION --- */}
            <section className="max-w-5xl mx-auto mt-12 px-6"> 
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-4 flex justify-center">
                        <motion.div 
                            className="relative inline-block cursor-pointer"
                            whileHover={{ rotate: -3, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="bg-[#FFD933] w-64 h-64 rounded-[40px] absolute -z-10 top-4 left-4"></div>
                            <img 
                                src="/foto-ardi.jpeg" 
                                alt="Ardi Alfarisi" 
                                className="w-64 h-64 object-cover rounded-[40px] shadow-lg border-4 border-white"
                            />
                            <motion.div 
                                className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-2xl shadow-sm border border-gray-100"
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <p className="text-xs font-bold text-gray-800">Ardi Alfarisi</p>
                                <p className="text-[10px] text-blue-600 font-bold">Information System Student</p>
                            </motion.div>
                        </motion.div>
                    </div>

                    <motion.div 
                        className="md:col-span-8"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-black text-blue-600 mb-4 text-center leading-relaxed">
                            About
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg font-medium text-justify">
                            Hi there! I’m an Information Systems student at IPI Garut who loves blending the solid back-end logic of Laravel with the beauty of React interfaces. To me, building an app isn’t just about making it work, it’s about creating something minimalist yet fun to use. If code is the backbone, then animation is the soul.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- URUTAN SECTION --- */}
            <QuoteSection />
            <AvailableSection />
            <TechStackSection />
            <ProjectSection projects={projects} />
            <ContactSection />

            {/* --- FOOTER (Rancangan yang baru) --- */}
            <Footer />

        </MainLayout>
    );
}