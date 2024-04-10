"use client";

import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { ErrorAlert, SuccessAlert } from "./Alerts";

export default function ContactForm() {
    const formRef = useRef(null);

    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        // Clients must provide either email or phone
        const email = formRef.current.email.value;
        const phone = formRef.current['phone-number'].value;
        if (!email && !phone) {
            setErrorMsg("Please provide either email or phone number.");
            return;
        }

        setLoading(true);

        // Send email
        emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, formRef.current, {
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        })
        .then((result) => {
            console.log('Success!')
            console.log(result.text);

            // Reset form
            formRef.current.reset();
            setLoading(false);
            setErrorMsg("");
            setSuccessMsg("Form submitted successfully! I will get back to you as soon as possible.");
        }, (error) => {
            console.log('Error!')
            console.log(error.text);

            // Display error message
            setErrorMsg("Failed to submit form. Please try again later.");
            setLoading(false);
        });
    }

    return (
        <form ref={formRef} onSubmit={sendEmail} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                
                {/* Error message */}
                {errorMsg && 
                <div className="sm:col-span-2">
                    <ErrorAlert message={errorMsg} />
                </div>}
                    
                {/* Success message */}
                {successMsg &&
                <div className="sm:col-span-2">
                    <SuccessAlert message={successMsg} /> 
                </div>}

                {/* Name */}
                <div className="sm:col-span-2">
                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                    Name
                    </label>
                    <div className="mt-2.5">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder='Your name'
                        autoComplete="given-name"
                        required
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>

                {/* Email */}
                <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                    Email (Must specify either email or phone)
                    </label>
                    <div className="mt-2.5">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        placeholder='Your email address'
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>

                {/* Phone number */}
                <div className="sm:col-span-2">
                    <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                    Phone number (Must specify either email or phone)
                    </label>
                    <div className="mt-2.5">
                    <input
                        type="tel"
                        name="phone-number"
                        id="phone-number"
                        placeholder='Your phone number'
                        autoComplete="tel"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>

                {/* Business type */}
                <div className="sm:col-span-2">
                    <label htmlFor="business-type" className="block text-sm font-semibold leading-6 text-gray-900">
                    Business type
                    </label>
                    <div className="mt-2.5">
                    <input
                        type="text"
                        name="business-type"
                        id="business-type"
                        placeholder='What is your business?'
                        required
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                </div>
                

                {/* Message */}
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                    Describe the website you are looking for
                    </label>
                    <div className="mt-2.5">
                    <textarea
                        name="message"
                        id="message"
                        rows={8}
                        placeholder='What do you want to display on your website? How long do you want the website to be? What sections do you want to include? Provide an example if possible. Anything that helps me understand your needs better.'
                        required
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>
                </div>
                <div className="mt-8 flex justify-end">
                <button
                    type="submit"
                    className={`rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm ${loading || successMsg !== "" ? "" : "hover:bg-indigo-500"} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                    disabled={loading || successMsg !== ""}
                >
                    {loading ? 'Sending...' : 'Send message'}
                </button>
                </div>
            </div>
        </form>
    )
}