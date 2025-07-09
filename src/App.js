
import React, { useState, useEffect } from 'react';
import { Home, User, Code, Briefcase, Menu, X, Github, ExternalLink, Cpu, Server, Database, PanelTop } from 'lucide-react';

const projectsData = [
    {
        title: "SaaS Dashboard Pro",
        description: "A comprehensive real-time analytics dashboard for B2B software, featuring data visualization and user management.",
        tags: ["React", "Tailwind", "Node.js", "Chart.js"],
        liveUrl: "#",
        repoUrl: "#",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
        title: "E-commerce Platform",
        description: "A full-stack e-commerce site with advanced filtering, a shopping cart, and a secure checkout process.",
        tags: ["Next.js", "GraphQL", "Stripe", "PostgreSQL"],
        liveUrl: "#",
        repoUrl: "#",
        imageUrl: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
        title: "Creative Agency Hub",
        description: "A visually-driven portfolio website for a design agency, built with a focus on animations and user experience.",
        tags: ["Gatsby", "GSAP", "Contentful"],
        liveUrl: "#",
        repoUrl: "#",
        imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
        title: "Mobile Weather App",
        description: "A sleek, cross-platform weather application providing real-time forecasts and severe weather alerts.",
        tags: ["React Native", "Expo", "OpenWeather API"],
        liveUrl: "#",
        repoUrl: "#",
        imageUrl: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80"
    }
];

const skillsData = {
    frontend: [
        { name: "React", icon: <Code className="h-8 w-8" /> },
        { name: "Next.js", icon: <Code className="h-8 w-8" /> },
        { name: "JavaScript", icon: <Code className="h-8 w-8" /> },
        { name: "TypeScript", icon: <Code className="h-8 w-8" /> },
        { name: "Tailwind CSS", icon: <Code className="h-8 w-8" /> },
    ],
    backend: [
        { name: "Node.js", icon: <Server className="h-8 w-8" /> },
        { name: "Express", icon: <Server className="h-8 w-8" /> },
        { name: "Python", icon: <Server className="h-8 w-8" /> },
        { name: "PostgreSQL", icon: <Database className="h-8 w-8" /> },
        { name: "MongoDB", icon: <Database className="h-8 w-8" /> },
    ],
    tools: [
        { name: "Git & GitHub", icon: <Cpu className="h-8 w-8" /> },
        { name: "Docker", icon: <Cpu className="h-8 w-8" /> },
        { name: "Figma", icon: <PanelTop className="h-8 w-8" /> },
        { name: "Vercel", icon: <Cpu className="h-8 w-8" /> },
        { name: "Jest", icon: <Cpu className="h-8 w-8" /> },
    ]
};

const NavLink = ({ page, activePage, setActivePage, children, isMobile, closeMenu }) => {
    const isActive = page === activePage;
    const handleClick = (e) => {
        e.preventDefault();
        setActivePage(page);
        if (isMobile && closeMenu) {
            closeMenu();
        }
    };

    return (
        <a
            href={`#${page}`}
            onClick={handleClick}
            className={`transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium ${
                isMobile 
                ? `block text-2xl py-4 text-center ${isActive ? 'text-emerald-400' : 'text-slate-200 hover:text-emerald-300'}`
                : `relative ${isActive ? 'text-emerald-400' : 'text-slate-300 hover:text-emerald-400'}`
            }`}
        >
            {children}
            {!isMobile && isActive && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-emerald-400 rounded-full" />
            )}
        </a>
    );
};

const HomePage = ({ setActivePage }) => (
    <section className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-8 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-50 tracking-tight">
            <span className="block animate-fade-in-up" style={{ animationDelay: '100ms' }}>Hello, I'm Alex.</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-emerald-500 animate-fade-in-up" style={{ animationDelay: '300ms' }}>A Creative Web Developer.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-slate-400 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
            I build beautiful, responsive, and performant web applications that provide exceptional user experiences.
        </p>
        <div className="mt-8 flex justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
            <button
                onClick={() => setActivePage('projects')}
                className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
                View My Work
            </button>
            <button
                onClick={() => setActivePage('about')}
                className="inline-flex items-center justify-center rounded-md border border-slate-600 bg-transparent px-6 py-3 text-base font-semibold text-slate-200 shadow-sm transition-transform duration-300 hover:scale-105 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
                About Me
            </button>
        </div>
    </section>
);

const AboutPage = () => (
    <section className="py-24 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="max-w-5xl mx-auto">
            <h2 className="text-center text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
                About <span className="text-emerald-400">Me</span>
            </h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                <div className="md:col-span-1 flex justify-center">
                    <div className="relative w-56 h-56">
                        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500 to-emerald-500 rounded-full transform -rotate-12 transition duration-500 hover:rotate-0 hover:scale-105"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" 
                            alt="Alex Doe" 
                            className="relative w-full h-full object-cover rounded-full border-4 border-slate-800 shadow-lg"
                        />
                    </div>
                </div>
                <div className="md:col-span-2 text-slate-300 text-lg space-y-6">
                    <p>
                        I'm a passionate full-stack developer with a knack for creating dynamic and intuitive web applications. With over 5 years of experience, I've honed my skills in both frontend and backend technologies, allowing me to build complete, robust solutions from scratch.
                    </p>
                    <p>
                        My journey in web development started with a simple "Hello, World!" and has since evolved into a deep-seated passion for solving complex problems with clean, efficient code. I thrive in collaborative environments and am always eager to learn new technologies and methodologies.
                    </p>
                    <p>
                        When I'm not coding, you can find me exploring hiking trails, experimenting with new recipes, or contributing to open-source projects.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

const SkillsPage = () => (
    <section className="py-24 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="max-w-5xl mx-auto">
            <h2 className="text-center text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
                My <span className="text-fuchsia-500">Skills</span>
            </h2>
            <p className="mt-4 text-center text-lg text-slate-400 max-w-2xl mx-auto">A selection of technologies and tools I'm proficient in, enabling me to build modern web solutions.</p>
            <div className="mt-16 space-y-12">
                {Object.entries(skillsData).map(([category, skills]) => (
                    <div key={category}>
                        <h3 className="text-2xl font-semibold text-emerald-400 capitalize mb-6">{category}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                            {skills.map(skill => (
                                <div key={skill.name} className="flex flex-col items-center justify-center p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 transition-all duration-300 hover:bg-slate-800 hover:border-emerald-500 hover:shadow-emerald-500/10 hover:shadow-lg transform hover:-translate-y-1">
                                    <div className="text-emerald-400">{skill.icon}</div>
                                    <p className="mt-3 text-sm font-medium text-slate-200 text-center">{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const ProjectsPage = () => (
    <section className="py-24 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-center text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
                Featured <span className="text-emerald-400">Projects</span>
            </h2>
            <p className="mt-4 text-center text-lg text-slate-400 max-w-3xl mx-auto">Here are some of the projects I'm proud of. Each one represents a challenge I was excited to tackle.</p>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {projectsData.map((project, index) => (
                    <div key={index} className="group relative flex flex-col bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-900/20">
                        <div className="overflow-hidden">
                            <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-slate-50">{project.title}</h3>
                            <p className="mt-2 text-slate-400 flex-grow">{project.description}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-2 py-1 bg-fuchsia-900/50 text-fuchsia-300 text-xs font-medium rounded-full">{tag}</span>
                                ))}
                            </div>
                        </div>
                        <div className="p-6 pt-0 mt-auto flex justify-end gap-4">
                            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository" className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors">
                                <Github className="w-5 h-5" /> Code
                            </a>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live demo" className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors">
                                <ExternalLink className="w-5 h-5" /> Live Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default function PortfolioPage() {
    const [activePage, setActivePage] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { page: 'home', label: 'Home', icon: <Home className="w-5 h-5 mr-2" /> },
        { page: 'about', label: 'About', icon: <User className="w-5 h-5 mr-2" /> },
        { page: 'skills', label: 'Skills', icon: <Code className="w-5 h-5 mr-2" /> },
        { page: 'projects', label: 'Projects', icon: <Briefcase className="w-5 h-5 mr-2" /> }
    ];

    const renderPage = () => {
        switch (activePage) {
            case 'about': return <AboutPage />;
            case 'skills': return <SkillsPage />;
            case 'projects': return <ProjectsPage />;
            case 'home':
            default:
                return <HomePage setActivePage={setActivePage} />;
        }
    };

    return (
        <div className="bg-slate-900 min-h-screen font-sans">
            <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-md shadow-slate-900/50 border-b border-slate-800' : 'bg-transparent'}`}>
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex-shrink-0">
                            <a href="#home" onClick={(e) => { e.preventDefault(); setActivePage('home'); }} className="text-2xl font-bold text-slate-50">
                                Alex <span className="text-emerald-400">Doe</span>
                            </a>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navItems.map(item => (
                                    <NavLink key={item.page} page={item.page} activePage={activePage} setActivePage={setActivePage}>
                                        {item.label}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded={isMenuOpen}
                            >
                                <span className="sr-only">Open main menu</span>
                                {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </nav>

                {isMenuOpen && (
                    <div className="md:hidden fixed inset-0 bg-slate-900/95 backdrop-blur-sm z-40 animate-fade-in" id="mobile-menu">
                        <div className="flex flex-col items-center justify-center h-full pt-16">
                            {navItems.map(item => (
                                <NavLink
                                    key={item.page}
                                    page={item.page}
                                    activePage={activePage}
                                    setActivePage={setActivePage}
                                    isMobile={true}
                                    closeMenu={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                )}
            </header>

            <main key={activePage}>
                {renderPage()}
            </main>

            <footer className="bg-slate-900 border-t border-slate-800">
                <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-slate-400">
                    <p>&copy; {new Date().getFullYear()} Alex Doe. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}
