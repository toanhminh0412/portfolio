import Link from 'next/link';
import Image from 'next/image';

import { PortableText } from 'next-sanity';

import client from '@/sanity/client';
import urlFor from '@/sanity/imageBuilder';

const HEADER_QUERY = `*[_type == "header"][0]`;

export default async function Header() {
    const headerContent = await client.fetch(HEADER_QUERY);
    const imageUrl = urlFor(headerContent.image).url();

    return (
        <header id="header" className="bg-white">
            <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
                <div
                className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
                aria-hidden="true"
                />
                <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                            {headerContent.heading}
                        </h1>
                        <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                            <div className="text-lg leading-8 text-gray-600">
                                <PortableText value={headerContent.description} />
                            </div>
                        <div className="mt-10 flex items-center gap-x-6">
                            <Link
                            href={headerContent.primaryBtn.url.current}
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                            {headerContent.primaryBtn.text}
                            </Link>
                            <Link href={headerContent.secondaryBtn.url.current} className="text-sm font-semibold leading-6 text-gray-900">
                            {headerContent.secondaryBtn.text} <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                        </div>
                        <Image
                        width={700}
                        height={500}
                        src={imageUrl}
                        alt={headerContent.heading}
                        className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
                        />
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
            </div>
        </header>
    )
}
// https://cdn.sanity.io/images/bpqih9ks/production/ec0379df0a83b11cdf1139d4e0c680813665cce8-4032x3024.jpg