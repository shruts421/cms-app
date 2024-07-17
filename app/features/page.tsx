
import Image from 'next/image';
import { FeatureData } from "../models/feature";
import { getAllFeatures } from "./lib/features";
import Link from 'next/link';
import Head from 'next/head';
import Header from '@/components/header';

const renderFeatures = (features: FeatureData[]) => {
    return (
        <div>
            {features.map((feature, index) => (
                <div key={index} className='flex justify-center'>
                    <div className='w-[90%] mt-12'>
                        <h2 className="w-fit font-lato font-[700] text-[24px] leading-[30px] text-[#000000]">{feature.title}</h2>

                        <div className='grid grid-cols-2 mt-5 mb-5'>
                            {feature?.subSections?.map((subsection: any, subIndex: any) => (
                                <div key={subIndex} className="w-[96%] min-h-[320px] rounded-2xl border border-gray-300 p-6 mb-6 gap-5 overflow-x-hidden">
                                    <div className='flex justify-start mb-2 '>

                                        <Image src={subsection.image} alt={subsection.title} width={64} height={64} />

                                        <h3 className="font-lato leading-[27.5px] text-[22px] font-[500]  mb-0 p-5">{subsection.title}</h3>

                                    </div>
                                    <ul className="list-disc pl-5">
                                        {subsection.details.map((detail: any, detailIndex: any) => (
                                            <li key={detailIndex}>{detail.description}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
    );
}

export default async function Features() {

    const features = await getAllFeatures();
    return (

        <div className="relative h-300">
            <div className='absolute bg-white w-full h-40'>
                <div className="absolute top-0 right-0 w-44 h-40 opacity-100  origin-top-right bg-cover bg-center"
                    style={{ backgroundImage: 'url("/demoFormBackground1.png")' }}>
                </div>
            </div>

            <div className="absolute top-40 left-0 right-0 bottom-0 bg-cover bg-center w-full h-[847px]"
                style={{ backgroundImage: 'url("/demoFormBackground.png")' }}>
            </div>

            <div className="relative z-10 p-8">

                <div className="flex justify-center items-center ">
                    <div className="text-center w-[1172px] h-[177px]">
                        <p className="font-lato text-[32px] font-[700] leading-10 text-center ">PRO-TECH TITAN® improves business performance</p>
                        <p className=" font-lato text-[16px] font-[400] leading-[27px] text-center">Prepare a quote for two doors or 2,000 doors. PRO-TECH simplifies the process for projects of any size The feature-rich software automates many tasks to save you time and money.</p>
                        <Link href="/demo">
                            <button className=' w-[172.38px] h-[48px] bg-[#00A0D0] rounded-md px-[18px] py-[10px] mt-4 '>
                                <div className='flex items-center justify-between'>
                                    <span className=' w-[167px] h-5 font-lato text-[16px] font-[600] leading-5 text-white'>
                                        Request a Demo
                                    </span>
                                    <svg
                                        width="9.31"
                                        height="14.91"
                                        viewBox="0 0 10 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-white"
                                    >
                                        <path
                                            d="M9.14214 7.0007L2.43901 1.07101L1.46401 0.208511C0.732762 -0.438364 -0.445363 0.567886 0.326512 1.21476L7.02964 7.14445L7.39526 7.46789L1.30151 12.8585L0.367137 13.6851C-0.364113 14.3319 0.773387 15.3741 1.50464 14.6913L8.16714 8.79757L9.10151 7.97101C9.46714 7.75539 9.46714 7.2882 9.14214 7.0007Z"
                                            fill="currentColor"
                                        />
                                    </svg>


                                </div>

                            </button>
                        </Link>
                    </div>
                </div>

                {features.map((feature, index) => (
                    <div key={index}>{renderFeatures(feature.frontmatter.features)}</div>
                ))}


                <div className='flex justify-center'>
                    <div className='w-[90%]'>
                        <Link href="/pro-tech">
                            <button className=' min-w-[326.81px] h-[48px] bg-[#00A0D0] rounded-md px-[18px] py-[10px] mt-4 '>
                                <div className='flex items-center justify-between'>
                                    <span className=' min-w-[271px] h-5 font-lato text-[16px] font-[600] leading-5 text-white mr-3'>
                                        Learn more about PRO-TECH TITAN®
                                    </span>
                                    <svg
                                        width="9.31"
                                        height="14.91"
                                        viewBox="0 0 10 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-white"
                                    >
                                        <path
                                            d="M9.14214 7.0007L2.43901 1.07101L1.46401 0.208511C0.732762 -0.438364 -0.445363 0.567886 0.326512 1.21476L7.02964 7.14445L7.39526 7.46789L1.30151 12.8585L0.367137 13.6851C-0.364113 14.3319 0.773387 15.3741 1.50464 14.6913L8.16714 8.79757L9.10151 7.97101C9.46714 7.75539 9.46714 7.2882 9.14214 7.0007Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </div >
    );
}