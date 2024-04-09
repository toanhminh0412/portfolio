import Image from "next/image";
import client from "@/sanity/client"
  
const FEATURES_QUERY = `*[_type == "whyChooseMe"]{
    subheading,
    heading,
    tagline,
    features
}[0]`

export default async function Features() {
    const featuresContent = await client.fetch(FEATURES_QUERY);
    const subheading = featuresContent.subheading;
    const heading = featuresContent.heading;
    const tagline = featuresContent.tagline;
    const features = featuresContent.features;

    return (
        <section id="features" className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">{subheading}</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{heading}</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    {tagline}
                </p>
                </div>
            </div>
            <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
                <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                {features.map((feature) => (
                    <div key={feature._key} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                        <i className={`${feature.icon ? feature.icon : ""} absolute left-1 top-1 h-5 w-5 text-indigo-600`} aria-hidden="true" />
                        {feature.name}: 
                    </dt>{' '}
                    <dd className="inline">{feature.description.map(block => block.children.map((child) => child.text).join('')).join('')}</dd>
                    </div>
                ))}
                </dl>
            </div>
            <div className="relative overflow-hidden pt-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <Image
                        src="/img/example-website.png"
                        alt="App screenshot"
                        className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                        width={2432}
                        height={1442}
                    />
                <div className="relative" aria-hidden="true">
                    <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
                </div>
                </div>
            </div>
        </section>
    )
}
  