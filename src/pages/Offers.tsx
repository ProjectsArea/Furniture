import React from 'react';
import OffersInfiniteCarousel from '../components/OffersCarousel';

const Offers: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-gray-50 flex flex-col items-center py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Exclusive Offers</h1>
      <OffersInfiniteCarousel />
    </div>
  );
};

export default Offers;
