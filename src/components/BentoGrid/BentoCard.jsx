import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const BentoCard = ({ title, description, image, href, size }) => {
  const sizeClasses= {
    small: "row-span-1 col-span-1",
    mota: "row-span-1 col-span-2",
    lamba: "row-span-2 col-span-1", 

  }
  return (
    <div className = {` relative rounded-lg shadow-lg hover:shadow-purple-50   transition-shadow overflow-hidden ${sizeClasses[size]}`} >
      {href ? (
        <Link href={href} passHref> {/* passHref needed if Link wraps something other than an <a> */}
        {/* Image fills the now-sized parent */}
        <Image src={image} alt={title} className="object-cover w-full h-full"  /> {/* Adjusted arbitrary dimensions */}
      </Link>
  ): (
    <div className="w-full h-full">
    <Image src={image} alt={title} className="object-cover w-full h-full"   />
    </div>
  )
}
<div className="absolute bottom-0 left-0 bg-black/50 text-white p-4">
  <h3 className="text-lg font-bold">{title}</h3>
  <p className="text-xs">{description}</p>
</div >
    </div >
  )
};



export default BentoCard;
// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const BentoCard = ({ title, description, image, href }) => {
//   return (
//     <div className="relative rounded-lg shadow-lg hover:shadow-purple-500/50 transition-shadow overflow-hidden">
//       {href ? (
//         <Link href={href}>
        
//             <Image src={image} alt={title} width={300} height={300} />
       
//         </Link>
//       ) : (
//         <Image src={image} alt={title} width={300} height={300} />
//       )}
//       <div className="absolute bottom-0 left-0 bg-black/50 text-white p-2">
//         <h3 className="text-sm font-semibold">{title}</h3>
//         <p className="text-xs">{description}</p>
//       </div>
//     </div>
//   );
// };

// export default BentoCard;