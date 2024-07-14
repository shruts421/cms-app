
// import { features } from "./config";
import Image from 'next/image';
import { FeatureData } from "../models/feature";
import { getAllFeatures } from "./lib/features";

const renderFeatures = (features: FeatureData[]) => {
    return (
        <div>
            {features.map((feature, index) => (
                <div key={index} className="mb-20">
                    <h2 className="text-3xl font-bold mb-8">{feature.title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {feature?.subSections?.map((subsection: any, subIndex: any) => (
                            <div key={subIndex} className="bg-white p-6 rounded-lg shadow-md">
                                <Image src={subsection.image} alt={subsection.title} width={64} height={64} />
                                <h3 className="text-xl font-semibold mb-4">{subsection.title}</h3>
                                <ul className="list-disc pl-5">
                                    {subsection.details.map((detail: any, detailIndex: any) => (
                                        <li key={detailIndex}>{detail.description}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
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
        <div>
            <div className="flex flex-col items-center mb-8 mt-6">
                <h2 className="text-3xl font-bold mb-4">PRO-TECH TITAN® improves business performance</h2>
                <p className="text-center mb-4">Prepare a quote for two doors or 2,000 doors. PRO-TECH simplifies the process for projects of any size! The feature-rich software automates many tasks to save you time and money.</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Request a Demo</button>
            </div>
            <div className="container mx-auto px-[125px] py-20">
                {features.map((feature, index) => (
                    <div key={index}>{renderFeatures(feature.frontmatter.features)}</div>
                ))}
            </div>
        </div>
    );
}