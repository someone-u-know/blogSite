import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Theories = () => {
  const theories = [
    {
      id: 1,
      title: "The Rule of Thirds",
      category: "Composition",
      image: "/theories/rule-of-thirds.jpg",
      description: "One of photography's most fundamental principles, the Rule of Thirds divides an image into a 3x3 grid. Placing key elements along these lines or at their intersections creates more dynamic and engaging compositions.",
      examples: [
        "Wes Anderson's 'The Grand Budapest Hotel' - Consistently uses centered compositions and rule of thirds",
        "Emmanuel Lubezki's work in 'The Revenant' - Natural landscapes composed using the rule of thirds"
      ],
      tips: [
        "Place horizons along horizontal third lines",
        "Position subjects at intersection points",
        "Use negative space effectively"
      ],
      furtherReading: "https://www.photographymad.com/pages/view/rule-of-thirds"
    },
    {
      id: 2,
      title: "Golden Hour Lighting",
      category: "Natural Light",
      image: "/theories/golden-hour.jpg",
      description: "The period shortly after sunrise or before sunset when sunlight is warmer and softer, creating beautiful, directional lighting with minimal harsh shadows.",
      examples: [
        "Terrence Malick's 'Days of Heaven' - Shot entirely during golden hour",
        "Roger Deakins' work in 'Blade Runner 2049' - Artificial recreation of golden hour lighting"
      ],
      tips: [
        "Plan shoots around sunrise/sunset times",
        "Use reflectors to bounce golden light",
        "Consider lens flare as creative element"
      ],
      furtherReading: "https://www.photoartsynth.com/golden-hour-photography"
    },
    {
      id: 3,
      title: "Leading Lines",
      category: "Composition",
      image: "/theories/leading-lines.jpg",
      description: "Using natural or artificial lines within the frame to guide the viewer's eye towards the main subject or through the composition.",
      examples: [
        "Stanley Kubrick's '2001: A Space Odyssey' - Spacecraft corridors and architectural lines",
        "Christopher Nolan's 'Inception' - City architecture and impossible staircases"
      ],
      tips: [
        "Look for natural lines in architecture",
        "Use roads, rivers, or pathways",
        "Create depth through converging lines"
      ],
      furtherReading: "https://www.digitalcameraworld.com/leading-lines"
    },
    {
      id: 4,
      title: "Color Theory in Cinema",
      category: "Color",
      image: "/theories/color-theory.jpg",
      description: "The use of color combinations to create mood, symbolism, and visual harmony in images. Understanding complementary and analogous colors is crucial for both photography and cinematography.",
      examples: [
        "Jean-Pierre Jeunet's 'Amélie' - Heavy use of warm greens and reds",
        "Nicolas Winding Refn's 'Drive' - Neon colors and high contrast"
      ],
      tips: [
        "Use complementary colors for contrast",
        "Create mood with color temperature",
        "Consider cultural color associations"
      ],
      furtherReading: "https://www.studiobinder.com/blog/how-to-use-color-in-film"
    }
  ];

  return (
    <div className="min-h-screen bg-[#e9ecf6] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Photography & Cinematography Theories
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Essential principles that shape visual storytelling
        </p>

        <div className="space-y-12">
          {theories.map((theory) => (
            <div 
              key={theory.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-80">
                <Image
                  src={theory.image}
                  alt={theory.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-4 py-2 bg-black/70 text-white rounded-full text-sm">
                    {theory.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {theory.title}
                </h2>

                <p className="text-gray-600 mb-6">
                  {theory.description}
                </p>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Notable Examples
                  </h3>
                  <ul className="space-y-2">
                    {theory.examples.map((example, index) => (
                      <li key={index} className="text-gray-600 flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Practical Tips
                  </h3>
                  <ul className="space-y-2">
                    {theory.tips.map((tip, index) => (
                      <li key={index} className="text-gray-600 flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <Link 
                    href={theory.furtherReading}
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                    target="_blank"
                  >
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

export default Theories;