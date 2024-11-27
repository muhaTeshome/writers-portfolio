'use client';

import React from 'react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for your message! I will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <main className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-serif">
            Let&apos;s Work Together
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            I&apos;d love to hear about your project. Send me a message and I&apos;ll
            get back to you as soon as possible.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <div>
            <h3 className="border-l border-blue-600 pl-6 font-semibold text-gray-900">
              Email
            </h3>
            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
              <a href="mailto:hello@example.com" className="hover:text-blue-600">
                hello@example.com
              </a>
            </address>
          </div>
          <div>
            <h3 className="border-l border-blue-600 pl-6 font-semibold text-gray-900">
              Location
            </h3>
            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
              San Francisco, CA
              <br />
              United States
            </address>
          </div>
          <div>
            <h3 className="border-l border-blue-600 pl-6 font-semibold text-gray-900">
              Social
            </h3>
            <div className="border-l border-gray-200 pl-6 pt-2 text-gray-600">
              <div className="flex flex-col space-y-2">
                <a
                  href="#"
                  className="hover:text-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="hover:text-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="hover:text-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="border-l border-blue-600 pl-6 font-semibold text-gray-900">
              Availability
            </h3>
            <div className="border-l border-gray-200 pl-6 pt-2 text-gray-600">
              <p>Monday - Friday</p>
              <p>9:00 AM - 5:00 PM PST</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
          <form action="#" method="POST" className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Phone number
              </label>
              <div className="mt-2.5">
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors duration-200"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
