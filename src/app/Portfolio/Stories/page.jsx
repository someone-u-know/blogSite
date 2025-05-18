import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Stories = () => {
  const stories = [
    {
      id: 1,
      title: "The Golden Hour Magic",
      date: "May 15, 2025",
      location: "Himachal Pradesh, India",
      image: "/recources/himachalview.jpg",
      description: "Capturing the ethereal moments during sunrise at the Himalayan peaks. The golden rays painting the snow-capped mountains created a spectacular display of nature's artistry.",
      equipment: "Sony A7III, 24-70mm f/2.8",
      reference: "https://photographylife.com/landscapes/golden-hour-photography",
      photographer: "Adarsh Kumar"
    },
    {
      id: 2,
      title: "Streets of Kerala",
      date: "April 22, 2025",
      location: "Fort Kochi, Kerala",
      image: "/recources/kerala.jpg",
      description: "Exploring the vibrant street life of Fort Kochi, where every corner tells a story of cultural heritage and daily life intertwined with modern influences.",
      equipment: "Fujifilm X-T4, 35mm f/1.4",
      reference: "https://streetphotography.com/kerala-life",
      photographer: "Adarsh Kumar"
    },
    {
      id: 3,
      title: "Desert Tales",
      date: "March 10, 2025",
      location: "Jaisalmer, Rajasthan",
      image: "/recources/rajasthansman.jpg",
      description: "A chance encounter with a local shepherd in the Thar Desert revealed the timeless connection between man and nature in this harsh yet beautiful landscape.",
      equipment: "Leica M10, 50mm f/1.4",
      reference: "https://natgeo.com/desert-stories",
      photographer: "Adarsh Kumar"
    }
  ];

  return (
    <div className="min-h-screen bg-[#e9ecf6] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Photography Stories
        </h1>

        <div className="space-y-12">
          {stories.map((story) => (
            <div 
              key={story.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-96">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {story.title}
                  </h2>
                  <span className="text-sm text-gray-500">
                    {story.date}
                  </span>
                </div>

                <div className="mb-4">
                  <p className="text-gray-600 mb-4">
                    {story.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">
                      📍 Location: {story.location}
                    </p>
                    <p className="text-sm text-gray-500">
                      📸 Equipment: {story.equipment}
                    </p>
                    <p className="text-sm text-gray-500">
                      📷 Photographer: {story.photographer}
                    </p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <Link 
                    href={story.reference}
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                    target="_blank"
                  >
                    Read Original Story
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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

export default Stories;