import React from 'react';
import BentoCard from './BentoCard';

const BentoGrid = ({ items }) => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-4 gap-4 w-full h-[95vh] overflow-hidden">
      {items.map((item, index) => (
        <BentoCard
          key={index}
          title={item.title}
          description={item.description}
          image={item.image}
          href={item.href}
          size= {item.size} // Pass the size prop to BentoCard
        />
      ))}
    </div>
  );
};

export default BentoGrid;