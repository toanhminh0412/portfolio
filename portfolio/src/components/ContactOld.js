/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import ContactForm from './ContactForm'

export default function Contact() {
    return (
        <section id="contact" className="relative isolate bg-white ring-1 ring-gray-900/10">
            <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">

                {/* Side notes */}
                <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                            <svg
                                className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                                aria-hidden="true"
                            >
                                <defs>
                                <pattern
                                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                                    width={200}
                                    height={200}
                                    x="100%"
                                    y={-1}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                                </pattern>
                                </defs>
                                <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                                <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                                </svg>
                                <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                        Please fill in the form, let me know what your needs are. I&apos;m here to help!
                        </p>
                        <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                        {/* <div className="flex gap-x-4">
                            <dt className="flex-none">
                            <span className="sr-only">Address</span>
                            <BuildingOffice2Icon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                            </dt>
                            <dd>
                            909 Darwin Ave
                            <br />
                            Victoria, BC
                            </dd>
                        </div> */}
                        <div className="flex gap-x-4">
                            <dt className="flex-none">
                            <span className="sr-only">Telephone</span>
                            <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                            </dt>
                            <dd>
                            <a className="hover:text-gray-900" href="tel:+1 (555) 234-5678">
                                +1 (778) 7006939
                            </a>
                            </dd>
                        </div>
                        <div className="flex gap-x-4">
                            <dt className="flex-none">
                            <span className="sr-only">Email</span>
                            <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                            </dt>
                            <dd>
                            <a className="hover:text-gray-900" href="mailto:hello@example.com">
                                toanhminh0412@gmail.com
                            </a>
                            </dd>
                        </div>
                        </dl>
                    </div>
                </div>
                {/* End side notes */}
                
                {/* Contact form */}
                <ContactForm />
                {/* End contact form */}

            </div>
        </section>
    )
}
