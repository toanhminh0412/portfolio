"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react'
import client from '@/sanity/client';

import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import PopLink from './motions/PopLink';

const NAVBARY_QUERY = `*[_type == "navbar"][0]`;

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [navbarContent, setNavbarContent] = useState(null);

    useEffect(() => {
        const getNavbarContent = async () => {
            const navbarContent = await client.fetch(NAVBARY_QUERY);
            setNavbarContent(navbarContent);
        }
        getNavbarContent();
    }, []);

    if (!navbarContent) return null;

    return (
        <div id="navbar" className="fixed inset-x-0 top-0 z-50 bg-black bg-opacity-10">

            {/* Laptop navbar */}
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <PopLink
                        href={navbarContent.name.url.current}
                        className="-m-1.5 p-1.5 font-semibold text-2xl text-black"
                    >{navbarContent.name.text}</PopLink>
                </div>
                <div className="flex lg:hidden">
                    <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(true)}
                    >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navbarContent.items.map((item) => (
                    <PopLink 
                        key={item._key} 
                        href={item.url.current} 
                        className="text-sm font-semibold leading-6 text-gray-900">
                        {item.text}
                    </PopLink>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <PopLink href={navbarContent.actionBtn.url.current} className="text-sm font-semibold leading-6 text-gray-900">
                        {navbarContent.actionBtn.text} <span aria-hidden="true">&rarr;</span>
                    </PopLink>
                </div>
            </nav>
            {/* End laptop navbar */}

            {/* Phone navbar */}
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                    <Link href={navbarContent.name.url.current} className="-m-1.5 p-1.5 font-semibold text-2xl text-black">
                        {navbarContent.name.text}
                    </Link>
                    <button
                        type="button"
                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    </div>
                    <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">
                        {navbarContent.items.map((item) => (
                            <Link
                            key={item._key}
                            href={item.url.current}
                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                            {item.text}
                            </Link>
                        ))}
                        </div>
                        <div className="py-6">
                        <Link
                            href={navbarContent.actionBtn.url.current}
                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                            {navbarContent.actionBtn.text}
                        </Link>
                        </div>
                    </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
            {/* Phone navbar */}

        </div>
    )
}