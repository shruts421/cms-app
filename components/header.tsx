// components/Header.js
// import React from 'react';
// import Image from 'next/image';

// const Header = () => {
//     return (
//         <header className="flex items-center justify-between p-4 shadow-md">
//             <div className="flex items-center space-x-4">
//                 <button className="p-2">
//                     <img src="/menu.svg" alt="Menu" className="h-6 w-6" />
//                 </button>
//                 <Image src="/assa-abloy-logo-header.svg" alt="ASSA ABLOY" width={100} height={24} />
//                 <span className="text-sm">PRO-TECH TITAN®</span>
//             </div>
//             <div className="flex items-center space-x-4">
//                 <div className="flex items-center border rounded-md px-2 py-1 text-sm">
//                     <input
//                         type="text"
//                         placeholder="Search..."
//                         className="focus:outline-none px-2"
//                     />
//                     <img src="/search.svg" alt="Search" className="h-5 w-5" />
//                 </div>
//                 <button className="p-2 border rounded-md text-sm">EN</button>
//                 <button className="p-2 bg-blue-500 text-white rounded-md text-sm">Login</button>
//             </div>
//         </header>
//     );
// };

// export default Header;

// components/MainHeader.js
import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="fixed top-[20px] left-11 right-11 z-50 flex items-center justify-between p-4 shadow-md bg-white rounded-xl">
      <div className="flex items-center space-x-4">
        <button className="p-2  border-[1px] border-black rounded-md">
          <img src="/menu.svg" alt="Menu" className="h-6 w-6" />
        </button>

      </div>

      <div className='absolute flex justify-center  w-full h-full '>
        <Image src="/assa-abloy-logo-header.svg" alt="ASSA ABLOY" width={150} height={24} />
        <span className="w-[132px] h-[18px] font-[400] text-[14px] ml-3 mt-[30px]">PRO-TECH TITAN®</span>
      </div>


      <div className="flex items-center space-x-4">
        <div className="flex items-center border rounded-md px-2 py-1 text-sm">
          <input
            type="text"
            placeholder="Search..."
            className="focus:outline-none px-2"
          />
          <img src="/search.svg" alt="Search" className="h-5 w-5" />
        </div>
        <button className="p-2 border rounded-md text-sm">EN</button>
        <button className="p-2 bg-blue-500 text-white rounded-md text-sm">Login</button>
      </div>
    </header>
  );
};

export default Header;

