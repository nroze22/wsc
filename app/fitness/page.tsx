'use client';

import { useState } from 'react';
import { ChevronRight, ArrowRight, Dumbbell, Users, Calendar, Trophy } from 'lucide-react';

export default function FitnessPage() {
  const [activeSection, setActiveSection] = useState('hero');

  const programs = [
    {
      title: "PERSONAL TRAINING",
      description: "One-on-one customized fitness programs",
      features: ["Custom Workout Plans", "Nutrition Guidance", "Progress Tracking"],
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80"
    },
    {
      title: "GROUP FITNESS",
      description: "High-energy classes for all levels",
      features: ["HIIT", "Yoga", "Spin Classes"],
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80"
    },
    {
      title: "STRENGTH TRAINING",
      description: "Build strength and muscle definition",
      features: ["Free Weights", "Machines", "Power Racks"],
      image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80"
            alt="WSC Fitness"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </div>

        <div className="relative h-screen flex flex-col justify-center px-8 md:px-16">
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-2 text-blue-400">
              <Dumbbell className="w-5 h-5" />
              <span className="text-sm tracking-widest">WSC FITNESS</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold leading-none">
              TRANSFORM
              <br />
              YOUR LIFE
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl">
              State-of-the-art equipment, expert trainers, and a supportive community 
              to help you achieve your fitness goals.
            </p>

            <div className="pt-8 flex flex-wrap gap-6">
              <button className="group relative overflow-hidden rounded-full px-8 py-4 
                bg-white text-black font-medium hover:text-white transition-colors duration-500">
                <span className="relative z-10 flex items-center gap-2">
                  START YOUR JOURNEY
                  <ChevronRight className="w-5 h-5 transform transition-transform 
                    group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-blue-600 transform translate-y-full
                  group-hover:translate-y-0 transition-transform duration-500" />
              </button>
              
              <button className="border border-white/30 text-white px-8 py-4 rounded-full
                flex items-center gap-2 hover:bg-white/10 transition-all duration-300">
                BOOK A TOUR
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8 p-8">
            {[
              { value: "15k", label: "Square Feet" },
              { value: "50+", label: "Weekly Classes" },
              { value: "12", label: "Expert Trainers" },
              { value: "1000+", label: "Active Members" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-400">{stat.value}</div>
                <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-sm tracking-widest text-blue-400">OUR PROGRAMS</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              ACHIEVE YOUR
              <br />
              FITNESS GOALS
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={program.image}
                    alt={program.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700
                      group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 p-8 flex flex-col justify-end
                    transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                    <p className="text-gray-300 mb-4">{program.description}</p>
                    <ul className="space-y-2">
                      {program.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-blue-500 rounded-full" />
                          <span className="text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80"
            alt="Fitness Motivation"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        </div>

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            START YOUR
            <br />
            JOURNEY TODAY
          </h2>
          <button className="bg-white text-black rounded-full px-12 py-5 
            font-medium tracking-wider text-sm group">
            <span className="flex items-center gap-2">
              BOOK YOUR FIRST SESSION
              <ArrowRight className="w-5 h-5 transform transition-transform 
                group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}