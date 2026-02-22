import React from 'react';
import Hero from './components/Hero';
import Section from './components/Section';
import TurningPoint from './components/TurningPoint';
import Growth from './components/Growth';
import Transformation from './components/Transformation';

const App = () => {
    return (
        <main className="relative min-h-screen selection:bg-primary/20 selection:text-secondary bg-white">
            <Hero />
            <Section
                chapter="Chapter I"
                title="The Beginning"
                subtitle="First Year at Vignan Institute of Information Technology"
                description="Entered engineering with big dreams but initial confusion. Scored a 9.03 SGPA in the first semester while navigating the early challenges of C programming and logic building."
                images={[
                    "/assets/fresher1.jpg",
                    "/assets/fresher2.jpg"
                ]}
            />
            <TurningPoint
                chapter="Chapter II"
                title="Skill Growth Phase"
                subtitle="Logic building and data structures"
                description="I dove deep into C and Data Structures. My mindset shifted from textbooks to building real-world skills. Explored AI-related ideas and finally felt the power of programming."
                images={[
                    "/assets/turn1.jpg",
                    "/assets/turn2.jpg"
                ]}
            />
            <Growth
                chapter="Chapter III"
                title="The Transformation"
                subtitle="Java, Projects, and Discipline"
                description="I became serious about my career. Started learning Java properly and built my first real projects—calculators and websites. I understood that discipline is the bridge between goals and accomplishment."
                images={[
                    "/assets/growth1.jpg",
                    "/assets/growth2.jpg"
                ]}
            />
            <Transformation
                chapter="Final Chapter"
                title="Step into Clarity"
                subtitle="Confidence and Skill-based growth"
                description="Entering my second year with a strong foundation in C and DSA. I'm actively building projects, focused on growth, and dreaming of success."
                images={[
                    "/assets/senior1.jpg",
                    "/assets/senior2.jpg"
                ]}
            />

            <footer className="py-20 text-center bg-gray-50 border-t border-gray-100">
                <p className="text-gray-400 text-sm font-light">
                    Sohel • B.Tech CSE • Vignan Institute of Information Technology
                </p>
                <p className="text-gray-300 text-xs mt-2 uppercase tracking-widest">A journey of growth &copy; 2026</p>
            </footer>
        </main>
    );
};

export default App;
