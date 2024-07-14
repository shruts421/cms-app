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
    <div className="relative w-full h-64">
      <Image src="/header.png" alt="ASSA ABLOY" width={1920} height={578} className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-white text-2xl font-bold mb-2">{title}</h1>
        <div className="text-white text-sm">
          {breadcrumbs.map((breadcrumb, index) => (
            <span key={index}>
              <Link href={breadcrumb.href}>
              {breadcrumb.label}
                {/* <a className="hover:underline">{breadcrumb.label}</a> */}
              </Link>
              {index < breadcrumbs.length - 1 && ' / '}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopHeader;

