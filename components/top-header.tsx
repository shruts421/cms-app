// // components/TopHeader.js
// import React from 'react';
// import Image from 'next/image';

// const TopHeader = ({ title:string, breadcrumbs:any }) => {
//     return (
//         <div className="relative w-full h-64">
//             <Image src="/header.png" alt="ASSA ABLOY" width={1920} height={478} className="w-full h-full object-cover" />
//             <div className="absolute inset-0 flex items-center justify-center">
//                 <h1 className="text-white text-2xl font-bold">Feature-Rich Software To Improve Productivity</h1>
//             </div>
//         </div>
//     );
// };

// export default TopHeader;


// components/CenteredTextImage.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Breadcrumb {
  label: string;
  href: string;
}

interface CenteredTextImageProps {
  title: string;
  breadcrumbs: Breadcrumb[];
}

const TopHeader: React.FC<CenteredTextImageProps> = ({ title, breadcrumbs }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-blue-50 p-24 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        PRO-TECH TITAN® Software for Door and Hardware Distributors
      </h1>
      <p className="text-gray-600 text-center mb-6">
        Submittals, estimates, quoting, scheduling, ordering and delivery details become automated, efficient and fast!
      </p>
      <div className="relative w-full max-w-4xl">
        <Image
          src="/homepage_header.png"
          alt="imageAlt"
          className="rounded-md"
          width={1094}
          height={26}
        />
        <div className="absolute inset-x-0 bottom-0 flex justify-center py-2">
          <div className="w-4 h-4 bg-blue-500 rounded-full mx-1"></div>
          <div className="w-4 h-4 bg-blue-200 rounded-full mx-1"></div>
          <div className="w-4 h-4 bg-blue-200 rounded-full mx-1"></div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;

