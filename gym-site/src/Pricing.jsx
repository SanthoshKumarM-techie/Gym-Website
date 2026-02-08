import React from 'react';

function Pricing() {

  const plans = [
    {
      name: "Basic Plan",
      price: "₹499 / Month",
      features: [
        "12 Trainings",
        "Experienced Trainers",
        "Free Parking",
        "Free Shower & Locker"
      ]
    },
    {
      name: "Standard Plan",
      price: "₹899 / Month",
      features: [
        "Unlimited Trainings",
        "Personal Trainer Support",
        "Diet Guidance",
        "Free Parking & Locker"
      ],
      highlight: true
    },
    {
      name: "Premium Plan",
      price: "₹1299 / Month",
      features: [
        "Unlimited Trainings",
        "Dedicated Personal Trainer",
        "Advanced Diet Plan",
        "Priority Support"
      ]
    }
  ];

  return (
    <div className='min-h-screen w-full bg-[#1A1A1A] py-20 px-10'>
      <div className='max-w-6xl mx-auto'>

        <div className='mb-16'>
          <h2 className='text-4xl font-bold text-white mb-4'>Pricing</h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {plans.map((plan, index) => (
            <div
              key={index}
              className='bg-[#262626] p-10 rounded-xl transition-all border border-transparent hover:border-[#FF6B00] hover:scale-103
              '
            >
              <h3 className='text-2xl font-bold text-white mb-4'>{plan.name}</h3>
              <p className='text-3xl font-bold text-[#FF6B00] mb-6'>{plan.price}</p>

              <ul className='space-y-3 mb-8'>
                {plan.features.map((feature, i) => (
                  <li key={i} className='text-gray-300 text-sm'>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className='w-full bg-[#FF6B00] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition'>
                Get Started
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Pricing;