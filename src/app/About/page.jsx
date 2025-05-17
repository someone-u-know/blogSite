import Image from 'next/image';
import img1 from '../../../public/recources/oldman.jpg'; 

export default function About() {
  return (
    <main className="min-h-screen bg-[#e9ecf6] flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-16 max-w-6xl mx-auto w-full">
        {/* Text Content */}
        <div className="md:w-1/2 w-full flex flex-col items-start">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">blogSite</h1>
          <p className="text-lg text-gray-700 mb-6">
            blogSite is a photography blog dedicated to helping you see the world differently. 
            Whether you’re a beginner or a seasoned photographer, our guides, stories, and tips are designed to inspire you and help you grow your creative skills.
          </p>
          <p className="text-base text-gray-600 mb-8">
            We believe photography is about more than just taking pictures-it’s about capturing moments, telling stories, and connecting with people and places. Our mission is to make photography accessible, enjoyable, and meaningful for everyone.
          </p>
          <a
            href="/blog"
            className="inline-block bg-black text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-gray-800 transition"
          >
            Read the Blog
          </a>
        </div>
        {/* Image */}
        <div className="md:w-1/2 w-full flex justify-center">
          <Image
            src={img1} // Place your image in /public/about-hero.jpg
            alt="Photography journey"
            width={500}
            height={400}
            className="rounded-lg shadow-lg object-cover"
            priority
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <h2 className="text-3xl font-bold text-black">150+</h2>
            <p className="text-gray-600 mt-2">Blog Posts</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-black">10K+</h2>
            <p className="text-gray-600 mt-2">Monthly Readers</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-black">5</h2>
            <p className="text-gray-600 mt-2">Years of Stories</p>
          </div>
        </div>
      </section>

      {/* Our Story / Mission */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Our Story</h2>
        <p className="text-gray-700 text-lg mb-4">
          Founded by passionate photographers, blogSite started as a small project to share tips and techniques with friends. Today, it’s a growing community where anyone can learn, share, and celebrate the art of photography.
        </p>
        <p className="text-gray-700 text-lg">
          We’re committed to providing high-quality content, practical advice, and a welcoming space for photographers of all skill levels. Join us as we explore new perspectives, creative ideas, and the stories behind every shot.
        </p>
      </section>
    </main>
  );
}
