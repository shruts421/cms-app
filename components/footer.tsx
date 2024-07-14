// export default function Footer() {
//     return (
//         <footer className="bg-gray-800 text-white p-4 text-center">
//             <p>&copy; 2024 My Website</p>
//         </footer>
//     );
// }

// components/Footer.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8 px-4 shadow-inner">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="space-y-4">
          <Image src="/assa-abloy-logo-header.svg" alt="ASSA ABLOY" width={150} height={24} />
          <address className="not-italic">
            10027 S. 51st St.Phoenix, AZ 85044
          </address>
          <Link href="/directions"> Get Directions
            {/* <a className="text-blue-500 hover:underline">Get Directions</a> */}
          </Link>
          <div className="flex space-x-2">
            <Link href="https://www.facebook.com">
            <img src="/facebook.svg" alt="Facebook" className="h-5 w-5" />
              {/* <a>
                <img src="/facebook.svg" alt="Facebook" className="h-5 w-5" />
              </a> */}
            </Link>
            <Link href="https://www.instagram.com">
            <img src="/instagram.svg" alt="Instagram" className="h-5 w-5" />
              {/* <a>
                <img src="/instagram.svg" alt="Instagram" className="h-5 w-5" />
              </a> */}
            </Link>
            <Link href="https://www.twitter.com">
            <img src="/twitter.svg" alt="Twitter" className="h-5 w-5" />
              {/* <a>
                <img src="/twitter.svg" alt="Twitter" className="h-5 w-5" />
              </a> */}
            </Link>
            <Link href="https://www.google.com">
            <img src="/google.svg" alt="Google" className="h-5 w-5" />
              {/* <a>
                <img src="/google.svg" alt="Google" className="h-5 w-5" />
              </a> */}
            </Link>
            <Link href="https://www.pinterest.com">
            <img src="/pinterest.svg" alt="Pinterest" className="h-5 w-5" />
              {/* <a>
                <img src="/pinterest.svg" alt="Pinterest" className="h-5 w-5" />
              </a> */}
            </Link>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="font-bold">Site Links</h4>
          <ul className="space-y-1">
            <li><Link href="/pro-tech">
            What is PRO-TECH?
                {/* <a className="hover:underline">What is PRO-TECH?</a> */}
                </Link></li>
            <li><Link href="/features">
            Features
                {/* <a className="hover:underline">Features</a> */}
                </Link></li>
            <li><Link href="/products">
            Products
                {/* <a className="hover:underline">Products</a> */}
                </Link></li>
            <li><Link href="/demo">
            Request a Demo
                {/* <a className="hover:underline">Request a Demo</a> */}
                </Link></li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-bold">Useful Links</h4>
          <ul className="space-y-1">
            <li><Link href="/training"> Training
                {/* <a className="hover:underline">Training</a> */}
                </Link></li>
            <li><Link href="/support"> Support
                {/* <a className="hover:underline">Support</a> */}
                </Link></li>
            <li><Link href="/contact"> Contact
                {/* <a className="hover:underline">Contact</a> */}
                </Link></li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-bold">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link href="/privacy"> Privacy Center
                {/* <a className="hover:underline">Privacy Center</a> */}
                </Link></li>
            <li><Link href="/sitemap"> Sitemap
                {/* <a className="hover:underline">Sitemap</a> */}
                </Link></li>
            <li><Link href="/terms"> Terms and Conditions
                {/* <a className="hover:underline">Terms and Conditions</a> */}
                </Link></li>
            <li><Link href="/donotsell"> Do Not Sell My Information
                {/* <a className="hover:underline">Do Not Sell My Information</a> */}
                </Link></li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-bold">Gallery</h4>
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
