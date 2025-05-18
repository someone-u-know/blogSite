import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Gadgets = () => {
  const equipment = [
    {
      id: 1,
      category: "Camera Body",
      name: "Sony A7 IV",
      image: "/recources/sony-a7iv.jpg",
      description: "The perfect hybrid shooter combining outstanding still image quality with powerful video features. Its 33MP sensor and advanced AF make it a versatile tool for both photography and filmmaking.",
      keyFeatures: [
        "33MP Full-Frame Sensor",
        "10-bit 4K/60p video",
        "Advanced Real-time AF",
        "Improved ergonomics"
      ],
      price: "$2,498.00",
      whyUnique: "The A7 IV represents the sweet spot in Sony's lineup, offering professional features at a reasonable price point. Its improved heat management and unlimited recording times make it perfect for long-form content.",
      whereToBuy: "https://www.bhphotovideo.com/sony-a7-iv"
    },
    {
      id: 2,
      category: "Lens",
      name: "Sony G Master 24-70mm f/2.8",
      image: "/recources/sony-24-70.jpg",
      description: "The workhorse lens for professionals. This versatile zoom range covers everything from landscape to portraiture with outstanding sharpness and beautiful bokeh.",
      keyFeatures: [
        "Constant f/2.8 aperture",
        "Nano AR Coating",
        "XD Linear Motors",
        "Dust and moisture resistant"
      ],
      price: "$2,198.00",
      whyUnique: "Its versatility makes it the perfect one-lens solution. The G Master line's resolution matches perfectly with modern high-megapixel sensors.",
      whereToBuy: "https://www.bhphotovideo.com/sony-24-70-gm"
    },
    {
      id: 3,
      category: "Audio",
      name: "Rode VideoMic Pro+",
      image: "/recources/rode-mic.jpg",
      description: "Professional on-camera microphone that significantly improves audio quality compared to built-in mics. Essential for any content creator or filmmaker.",
      keyFeatures: [
        "Digital switching",
        "Built-in battery door",
        "Automatic power function",
        "High-pass filter"
      ],
      price: "$299.00",
      whyUnique: "The automatic power function that turns the mic on/off with your camera prevents those dreaded 'dead battery' moments during crucial shoots.",
      whereToBuy: "https://www.rode.com/microphones/videomicpro+"
    },
    {
      id: 4,
      category: "Support",
      name: "DJI RS 3 Pro",
      image: "/recources/dji-rs3.jpg",
      description: "A professional 3-axis gimbal that provides cinematic stabilization for your footage. Essential for moving shots and vlogging.",
      keyFeatures: [
        "SuperSmooth mode",
        "3.6kg payload",
        "Automated axis locks",
        "1.8\" OLED touchscreen"
      ],
      price: "$869.00",
      whyUnique: "The automated axis locks and quick-release plate make setup time significantly faster than other gimbals, perfect for run-and-gun shooting.",
      whereToBuy: "https://store.dji.com/product/dji-rs-3-pro"
    }
  ];

  return (
    <div className="min-h-screen bg-[#e9ecf6] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Essential Filmmaking Gear
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Curated selection of professional equipment that elevates your content creation
        </p>

        <div className="space-y-12">
          {equipment.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-96">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-4 py-2 bg-black/70 text-white rounded-full text-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {item.name}
                    </h2>
                    <p className="text-xl text-blue-600 font-semibold mt-1">
                      {item.price}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">
                  {item.description}
                </p>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Key Features
                  </h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {item.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Why It's Unique
                  </h3>
                  <p className="text-gray-600">
                    {item.whyUnique}
                  </p>
                </div>

                <div className="border-t pt-4">
                  <Link 
                    href={item.whereToBuy}
                    className="inline-flex items-center justify-center w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                    target="_blank"
                  >
                    Buy Now
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gadgets;