import Link from 'next/link'

import { CheckIcon } from '@heroicons/react/20/solid'


const tiers = [
    {
        name: 'Freelancer/Self-employed',
        id: 'tier-freelancer',
        href: '#contact',
        price: '$600',
        description: 'A small one-page website for freelancers and self-employed individuals.',
        features: [
            '4 sections',
            '1000 users/day max',
            'Google analytics setup',
            '2 revisions',
            '+ $20 for domain setup (you have to pay for the domain)',
            '+ $10/month for hosting',
            'SEO',
            'WACC compliance',
        ],
        mostPopular: false,
    },
    {
        name: 'Small business',
        id: 'tier-small-business',
        href: '#contact',
        price: '$1500',
        description: 'A moderately complex website for small businesses.',
        features: [
            '10 sections',
            '10000 users/day max',
            'Google analytics setup',
            '5 revisions',
            '+ $20 for domain setup (you have to pay for the domain)',
            '+ $30/month for hosting',
            'SEO',
            'WACC compliance', 
        ],
        mostPopular: true,
    },
    {
        name: 'Enterprise',
        id: 'tier-enterprise',
        href: '#',
        price: '$4000+',
        description: 'Full-fledged, complex and functional website for enterprises.',
        features: [
            'A fully-customed web solution to your business, including e-commerce, blog, etc.',
            'Features are to be discussed. Please book with me first.',
        ],
        mostPopular: false,
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Services() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Choose the right package for your business
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
                    These prices are just an approximation. Prices might vary depending on how complex your website is. <Link href="#contact" className="text-indigo-600 font-semibold underline">Contact us</Link> to get a free quote.
                </p>
                <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {tiers.map((tier, tierIdx) => (
                    <div
                    key={tier.id}
                    className={classNames(
                        tier.mostPopular ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8',
                        tierIdx === 0 ? 'lg:rounded-r-none' : '',
                        tierIdx === tiers.length - 1 ? 'lg:rounded-l-none' : '',
                        'flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10',
                    )}
                    >
                    <div>
                        <div className="flex items-center justify-between gap-x-4">
                        <h3
                            id={tier.id}
                            className={classNames(
                            tier.mostPopular ? 'text-indigo-600' : 'text-gray-900',
                            'text-lg font-semibold leading-8',
                            )}
                        >
                            {tier.name}
                        </h3>
                        {tier.mostPopular ? (
                            <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">
                            Most popular
                            </p>
                        ) : null}
                        </div>
                        <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                        <p className="mt-6 flex items-baseline gap-x-1">
                            <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price}</span>
                            {/* <span className="text-sm font-semibold leading-6 text-gray-600">/month</span> */}
                        </p>
                        <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                        {tier.features.map((feature) => (
                            <li key={feature} className="flex gap-x-3">
                            <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600" />
                            {feature}
                            </li>
                        ))}
                        </ul>
                    </div>
                    <Link
                        href={tier.href}
                        aria-describedby={tier.id}
                        className={classNames(
                        tier.mostPopular
                            ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'
                            : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                        'mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                        )}
                    >
                        Book now
                    </Link>
                    </div>
                ))}
                </div>
                
                {/* Maintainance fee */}
                <div className='mt-20 w-full md:w-3/4 mx-auto'>
                    <p className="mt-2 text-lg sm:text-xl font-semibold tracking-tight text-gray-900">
                        I offer 2 matainance packages:
                    </p>
                    <ul className='list-disc ml-4'>
                        <li className='text-gray-600 mt-4'><strong>$50/month</strong>: I&apos;ll check your website daily to make sure everything is working well and dedicate 2 hours each month to fix any issue. Once the 2 hours end, it&apos;s $75/hour for every extra hour.</li>
                        <li className='text-gray-600 mt-4'><strong>$75/hour</strong>: You simply contact me when you need something fixed.</li>
                    </ul>  
                </div>
            </div>
        </div>
    )
}
