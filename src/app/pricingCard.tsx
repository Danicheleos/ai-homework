import React from 'react';

interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  price,
  features,
  isFeatured = false,
}) => {
  return (
    <div
      className={`flex flex-col shadow-md p-6 ${
        isFeatured
          ? 'bg-gray-600 text-white scale-110'
          : 'bg-white text-gray-800'
      } hover:shadow-lg transition-transform duration-200 focus-within:ring-4 focus-within:ring-blue-300`}
      tabIndex={0}>
      {' '}
      <h3 className='text-xl font-bold text-center'>{plan}</h3>{' '}
      <p className='text-4xl font-bold my-4 text-center'>{price}</p>{' '}
      <hr className='my-4 border-gray-300' />{' '}
      {features.map((feature, index) => (
        <React.Fragment key={index}>
          {' '}
          <p className='font-bold text-center'>{feature}</p>{' '}
          {index < features.length - 1 && (
            <hr className='my-4 border-gray-300' />
          )}{' '}
        </React.Fragment>
      ))}{' '}
      <button
        className={`mt-6 font-bold text-center ${
          isFeatured ? 'text-white' : 'text-gray-800'
        } hover:underline focus:outline-none`}>
        {' '}
        SUBSCRIBE{' '}
      </button>{' '}
    </div>
  );
};

export default PricingCard;
