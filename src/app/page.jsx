'use client';

import React from 'react';
import BentoGrid from '../components/BentoGrid/BentoGrid';
import img1 from '../../public/recources/Brucewebser.jpg';
import img2 from '../../public/recources/himachalview.jpg';
import img3 from '../../public/recources/kerala.jpg';
import img4 from '../../public/recources/rajasthansman.jpg';
import img5 from '../../public/recources/kolkata streets.jpg';
import img6 from '../../public/recources/Jffshakinghands.jpg';
import img7 from '../../public/recources/objects.jpg';
import img8 from '../../public/recources/oldman.jpg';
import img9 from '../../public/recources/tree.jpeg';
import img10 from '../../public/recources/scene.jpeg';

const bentoItems = [
  {
    title: "Mastering Golden Hour",
    description: "Capture stunning images during nature's most magical lighting",
    image: img1,
    href: "/blog/mastering-golden-hour",
    size: "lamba",
  },
  {
    title: "Rule of Thirds",
    description: "The fundamental principle that guides image composition",
    image: img7,
    href: "/theories/rule-of-thirds",
    size: "small",
  },
  {
    title: "First Color Photograph",
    description: "Taken by James Clerk Maxwell in 1861",
    image: img2,
    href: "/history/first-color-photograph",
    size: "mota",
  },
  {
    title: "Vintage Lenses",
    description: "Why photographers are returning to manual focus glass",
    image: img3,
    size: "lamba",
  },
  {
    title: "Long Exposure",
    description: "Techniques to capture stunning motion blur",
    image: img4,
    href: "/techniques/long-exposure",
    size: "lamba",
  },
  {
    title: "Join Our Community",
    description: "Start writing and sharing your photography journey today",
    image: img5,
    href: "/register",
    size: "small",
  },
  {
    title: "When words become unclear, I shall focus with photographs.",
    description: "- Ansel Adams",
    image: img6,
    size: "small",
  },
  {
    title: "When , I  photographs.",
    description: "- adarsh Adams",
    image: img8,
    size: "lamba",
  },
  {
    title: "When , I  photographs.",
    description: "- adarsh Adams",
    image: img9,
    size: "mota",
  },
  {
    title: "When ,hahahahah .",
    description: "- adarsh Adams",
    image: img10,
    size: "small",
  },
];

export default function Home() {
  return (
<main className="w-screen h-screen bg-[#e9ecf6] flex justify-center items-center">
  <div className="flex w-full h-full max-w-[1600px] mx-auto">
    {/* Left Section */}
    <div className="flex flex-col justify-center  w-1/3 min-w-[260px] max-w-[400px] px-6">
    <h2 className='text-black font-bold text-4xl mb-8'>Where you are free to be curious.</h2>
    <button className="self-start mt-2 mb-24 px-6 py-2 bg-[#302f45] text-white  rounded cursor-grab hover:bg-[#8d8ec7] transition">
        Explore the Blog
      </button>
      <p className="text-black mt-4  text-lg  mb-6">
        Photography isn’t just about taking pictures – it’s about seeing beauty in the ordinary, telling your story, and connecting with the world around you.Here, you’ll find straightforward tips, inspiration, and stories to help you enjoy photography even more. Whether you’re just starting out or have some experience, you’ll discover practical advice and real examples to support your journey.
      </p> 
    </div>

    {/* Right Section (BentoGrid) */}
    <div className="flex-1 flex justify-center items-center">
      <div className="scale-90 origin-center w-full max-w-[1300px] px-2">
        <BentoGrid items={bentoItems} />
      </div>
    </div>
  </div>
</main>

  );
}