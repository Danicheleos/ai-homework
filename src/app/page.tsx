import React from 'react';
import PricingCard from './pricingCard';

const Home: React.FC = () => {
  const pricingPlans = [
    {
      plan: 'Standard',
      price: '$100',
      features: [
        '50,000 Requests',
        '4 contributors',
        'Up to 4GB storage space',
      ],
      isFeatured: false,
    },
    {
      plan: 'Pro',
      price: '$200',
      features: [
        '100,000 Requests',
        '7 contributors',
        'Up to 6GB storage space',
      ],
      isFeatured: true,
    },
    {
      plan: 'Expert',
      price: '$500',
      features: [
        '200,000 Requests',
        '11 contributors',
        'Up to 10GB storage space',
      ],
      isFeatured: false,
    },
  ];

  return (
    <>
      <nav className='nav'>
        <button className='hamburger' id='menuBtn'>
          Menu
        </button>
        <ul className='menu' id='menu'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className='flex flex-col items-center p-4 bg-gray-900 min-h-screen'>
        {' '}
        <h1 className='text-3xl font-bold text-white mb-8'>Pricing</h1>{' '}
        <div className='flex flex-col sm:flex-row'>
          {' '}
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan.plan}
              price={plan.price}
              features={plan.features}
              isFeatured={plan.isFeatured}
            />
          ))}{' '}
        </div>{' '}
      </div>
    </>
  );
};

export default Home;
