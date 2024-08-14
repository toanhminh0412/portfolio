import Image from "next/image";
import client from "@/sanity/client"
import { PortableText } from "next-sanity";
  
const FEATURES_QUERY = `*[_type == "whyChooseMe"]{
    subheading,
    heading,
    tagline,
    features
}[0]`

const features = [
    {
        id: 1,
        icon: "fa-solid fa-star",
        name: "Beautiful design",
        description: "Visually stunning designs that align with your brand and captivate your audience."
    },
    {
        id: 2,
        icon: "fa-solid fa-mobile-screen-button",
        name: "Responsive design",
        description: "Smooth, functional layouts across all devices and screen sizes"
    },
    {
        id: 3,
        icon: "fa-solid fa-magnifying-glass",
        name: "SEO and WACC compliance",
        description: "Optimized for search engines and web accessibility standards, required for a strong online presence"
    },
    {
        id: 4,
        icon: "fa-solid fa-sliders",
        name: "Fully customizable",
        description: "Any functionality you need, tailored to your business needs"
    },
]

export default async function Features() {
    // const featuresContent = await client.fetch(FEATURES_QUERY);
    // const features = featuresContent.features;

    return (
        <section id="features" className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">Why me?</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">I can make anything happen on the web</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    These are guaranteed when you work with me
                </p>
                </div>
            </div>
            <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
                <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-auto lg:max-w-5xl lg:gap-x-8 lg:gap-y-16">
                {features.map((feature) => (
                    <div key={feature.id} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                        <i className={`${feature.icon ? feature.icon : ""} absolute left-1 top-1 h-5 w-5 text-indigo-600`} aria-hidden="true" />
                        {feature.name} <br></br>
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
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
  