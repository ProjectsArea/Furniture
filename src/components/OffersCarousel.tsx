import React from 'react';

const offerImages = [
  '/offer.jpg',
  '/offer1.jpg',
  '/offer2.jpg',
  '/offer3.jpg',
];

const OffersInfiniteCarousel: React.FC = () => {
  return (
    <section className="w-full overflow-hidden my-12">
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            display: flex;
            animation: scroll 25s linear infinite;
            width: max-content;
          }
        `}
      </style>

      <div className="relative w-full">

                <h1 className="text-2xl font-bold text-center -mt-2">Special Offers</h1>              
        <div className="flex gap-6 animate-scroll hover:[animation-play-state:paused]">
          {[...offerImages, ...offerImages].map((src, idx) => (
            <div
              key={idx}
              className="min-w-[220px] md:min-w-[280px] flex-shrink-0 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
          
              <img
                src={src}
                alt={`Offer ${idx + 1}`}
                className="w-full h-[200px] md:h-[250px] object-contain bg-white"
              />
              <div className="p-3 text-center">
                <h3 className="text-md font-semibold">Special Offer</h3>
                <p className="text-xs text-gray-600">Grab this deal now!</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersInfiniteCarousel;
