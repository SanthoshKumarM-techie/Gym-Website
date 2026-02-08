import React from 'react';
import { FaDumbbell, FaWeightHanging, FaPersonRunning } from "react-icons/fa6";
import { MdPersonalInjury } from "react-icons/md";
import { LuBicepsFlexed } from "react-icons/lu";
import { TbYoga } from "react-icons/tb";

function Programs() {
  const programs = [
    { title: "Strength Training", icon: <FaDumbbell size={32} />, desc: "Build muscle, improve core stability, and increase overall body strength through structured weightlifting routines." },
    { title: "Weight Loss Program", icon: <FaWeightHanging size={32} />, desc: "A goal-oriented program combining cardio workouts and functional training to help you burn fat sustainably." },
    { title: "Personal Training", icon: <MdPersonalInjury size={32} />, desc: "Receive one-on-one coaching with customized workout plans designed according to your fitness level." },
    { title: "CrossFit Training", icon: <LuBicepsFlexed size={32} />, desc: "High-intensity functional workouts designed to improve endurance, strength, agility, and total-body conditioning." },
    { title: "Yoga & Flexibility", icon: <TbYoga size={32} />, desc: "Improve flexibility, posture, and mental relaxation through guided yoga sessions that enhance balance." },
    { title: "Athletic Performance", icon: <FaPersonRunning size={32} />, desc: "Train with performance-focused workouts that develop speed, agility, and explosive power." },
  ];

  return (
    <div className='min-h-screen w-full bg-[#1A1A1A] py-20 px-10'>
      <div className='max-w-6xl mx-auto'>
    
        <div className='mb-16'>
          <h2 className='text-4xl font-bold text-white mb-4'>Programs</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((item, index) => (
            <div key={index} className="bg-[#262626] p-8 rounded-xl hover:bg-[#303030] transition-all border border-transparent hover:border-[#FF6B00] group">
              <div className="text-[#FF6B00] mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className='text-xl font-bold text-white mb-3'>{item.title}</h3>
              <p className='text-gray-400 text-sm leading-6'>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Programs;