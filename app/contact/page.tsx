'use client';

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
            Contact Me
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Have a project in mind? Let's discuss how I can help you achieve your
            goals.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
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
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Subject
                </label>
                <div className="mt-2.5">
                  <select
                    name="subject"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option value="">Select a subject</option>
                    <option value="Content Writing">Content Writing</option>
                    <option value="Technical Writing">Technical Writing</option>
                    <option value="Content Strategy">Content Strategy</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div>
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
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 font-serif">
              Get in Touch
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              I'm always interested in new projects and opportunities. Feel free to
              reach out through any of these channels:
            </p>
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  Email
                </dt>
                <dd className="mt-1 text-base leading-7 text-gray-600">
                  contact@mehammedt.com
                </dd>
              </div>
              <div>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  Location
                </dt>
                <dd className="mt-1 text-base leading-7 text-gray-600">
                  San Francisco Bay Area, CA
                </dd>
              </div>
              <div>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  Social Media
                </dt>
                <dd className="mt-1 space-y-2">
                  <a
                    href="#"
                    className="text-base leading-7 text-gray-600 hover:text-gray-900"
                  >
                    LinkedIn
                  </a>
                  <br />
                  <a
                    href="#"
                    className="text-base leading-7 text-gray-600 hover:text-gray-900"
                  >
                    Twitter
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </main>
  );
}
