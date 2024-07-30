import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8 px-4 shadow-inner h-[320px]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 font-[400] text-[18px] leading-[28.8px] text-[#404040] not-italic">
        <div className="space-y-4">
          <Image src="/assa-abloy-logo-header.svg" alt="ASSA ABLOY" width={187} height={26} className="mt-[8px]" />
          <address className=" not-italic ">
            10027 S. 51st St.Phoenix, AZ 85044
          </address>
          <Link href="/directions" className=''> Get Directions
          </Link>
          <div className="flex space-x-2">
            <Link href="https://www.facebook.com">
              <img src="/facebook.svg" alt="Facebook" className="h-5 w-5" />
            </Link>
            <Link href="https://www.instagram.com">
              <img src="/instagram.svg" alt="Instagram" className="h-5 w-5" />
            </Link>
            <Link href="https://www.twitter.com">
              <img src="/twitter.svg" alt="Twitter" className="h-5 w-5" />
            </Link>
            <Link href="https://www.google.com">
              <img src="/google.svg" alt="Google" className="h-5 w-5" />
            </Link>
            <Link href="https://www.pinterest.com">
              <img src="/pinterest.svg" alt="Pinterest" className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className=" font-[700] text-[28px] leading-[42px] text-black">Site Links</h4>
          <ul className="space-y-1">
            <li><Link href="/pro-tech">
              What is PRO-TECH?
            </Link></li>
            <li><Link href="/features">
              Features
            </Link></li>
            <li><Link href="/products">
              Products
            </Link></li>
            <li><Link href="/demo">
              Request a Demo
            </Link></li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-[700] text-[28px] leading-[42px] text-black">Useful Links</h4>
          <ul className="space-y-1">
            <li><Link href="/training"> Training
            </Link></li>
            <li><Link href="/support"> Support
            </Link></li>
            <li><Link href="/contact"> Contact
            </Link></li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-[700] text-[28px] leading-[42px] text-black">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link href="/privacy"> Privacy Center
            </Link></li>
            <li><Link href="/sitemap"> Sitemap
            </Link></li>
            <li><Link href="/terms"> Terms and Conditions
            </Link></li>
            <li><Link href="/donotsell"> Do Not Sell My Information
            </Link></li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-[700] text-[28px] leading-[42px] text-black">Gallery</h4>
          <div className="grid grid-cols-3 gap-2">
            <img src="/gallery1.png" alt="Gallery 1" className="h-16 w-16 object-cover" />
            <img src="/gallery2.png" alt="Gallery 2" className="h-16 w-16 object-cover" />
            <img src="/gallery3.png" alt="Gallery 3" className="h-16 w-16 object-cover" />
            <img src="/gallery4.png" alt="Gallery 4" className="h-16 w-16 object-cover" />
            <img src="/gallery5.png" alt="Gallery 5" className="h-16 w-16 object-cover" />
            <img src="/gallery6.png" alt="Gallery 6" className="h-16 w-16 object-cover" />
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-600">
        &copy; ASSA ABLOY
      </div>
    </footer>
  );
};

export default Footer;
