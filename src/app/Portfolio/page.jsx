import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Import your images
import img1 from '../../../public/recources/Brucewebser.jpg';
import img2 from '../../../public/recources/kerala.jpg';
import img3 from '../../../public/recources/rajasthansman.jpg';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Gadgets',
      image: img1,
      href: '/Portfolio/Gadgets',
    },
    {
      id: 2,
      title: 'Stories',
      image: img2,
      href: '/Portfolio/Stories',
    },
    {
      id: 3,
      title: 'Theories',
      image: img3,
      href: '/Portfolio/Theories',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Our works
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Link href={item.href} key={item.id}>
              <div className="relative h-64 group cursor-pointer overflow-hidden rounded-lg border-4 border-purple-300 hover:border-purple-500 transition-all duration-300">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;