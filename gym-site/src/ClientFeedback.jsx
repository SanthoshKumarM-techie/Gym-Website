import React from 'react'
import { FaStar } from "react-icons/fa6";

function ClientFeedback() {

  const Feedbacks = [
    {
      name:"alice",
      statement: "Very Professional and easy to work with. the design quality was impressive, and all our requiements were carefully understood before implementation, which saved a lot of time.",
      star:5,
    },
    {
      name:"Chandru",
      statement: "Very Professional and easy to work with. the design quality was impressive, and all our requiements were carefully understood before implementation, which saved a lot of time.",
      star:4,
    },
    {
      name:"Ram",
      statement: "Very Professional and easy to work with. the design quality was impressive, and all our requiements were carefully understood before implementation, which saved a lot of time.",
      star:3,
    },
    {
      name:"Karthick",
      statement: "Very Professional and easy to work with. the design quality was impressive, and all our requiements were carefully understood before implementation, which saved a lot of time.",
      star:5,
    },
    {
      name:"Arun",
      statement: "Very Professional and easy to work with. the design quality was impressive, and all our requiements were carefully understood before implementation, which saved a lot of time.",
      star:5,
    },
    {
      name:"Vignesh",
      statement: "Very Professional and easy to work with. the design quality was impressive, and all our requiements were carefully understood before implementation, which saved a lot of time.",
      star:5,
    },
  ]

  return (
    <div className='min-h-screen w-full py-20 px-10 bg-[#1A1A1A]'>
      <div className='max-w-6xl mx-auto'>
        <div className='mb-16'>
          <h2 className='text-4xl font-bold text-white mb-4'>Clients Feedback</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {Feedbacks.map((feedback,index) => (
            <div className='bg-[#262626] p-8 rounded-xl border border-transparent hover:border-[#FF6B00] hover:scale-103 transition'>
              <p className='text-gray-300 mb-6 text-sm leading-relaxed'>{feedback.statement}</p>
              <div className='flex items-center mb-4'>
                {Array.from({length:feedback.star}).map((_,i) => (
                  <FaStar key={i} className='text-[#FF6B00] mr-1'/>
                ))}
              </div>
              <p className='text-white font-semibold'>-{feedback.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ClientFeedback
