'use client';

import React from 'react';

const SERVICES = [
  {
    name: 'Content Writing',
    description:
      'High-quality, engaging content tailored to your audience and goals. From blog posts to website copy, I&apos;ll help you communicate effectively.',
    features: [
      'Blog Posts & Articles',
      'Website Copy',
      'Newsletter Content',
      'Social Media Content',
    ],
    price: 'Starting at $200/article',
  },
  {
    name: 'Technical Writing',
    description:
      'Clear, concise technical documentation and content that makes complex information accessible to your target audience.',
    features: [
      'Technical Documentation',
      'User Guides',
      'API Documentation',
      'Process Documentation',
    ],
    price: 'Starting at $300/document',
  },
  {
    name: 'Content Strategy',
    description:
      'Comprehensive content strategy services to help you plan, create, and optimize your content for maximum impact.',
    features: [
      'Content Audit',
      'Strategy Development',
      'Editorial Calendar',
      'Content Guidelines',
    ],
    price: 'Custom Quote',
  },
];

const TESTIMONIALS = [
  {
    content:
      'Mehammed&apos;s writing perfectly captured our brand voice while maintaining clarity and engagement. Highly recommended!',
    author: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'Tech Solutions Inc.',
  },
  {
    content:
      'Working with Mehammed was a pleasure. Their technical writing skills made our complex product documentation accessible to all users.',
    author: 'Michael Chen',
    role: 'Product Manager',
    company: 'InnovateSoft',
  },
  {
    content:
      'The content strategy Mehammed developed for us transformed our online presence and significantly increased our engagement.',
    author: 'Emma Williams',
    role: 'CEO',
    company: 'Digital First Agency',
  },
];

const Services = () => {
  return (
    <main className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 font-serif">
            Services
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg leading-7 md:leading-8 text-gray-700">
            Professional writing services tailored to your needs. From content
            creation to strategy development, I&apos;m here to help you succeed.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mx-auto mt-8 md:mt-16 grid max-w-xl md:max-w-2xl lg:max-w-none grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.name}
              className="card p-6 md:p-8 hover:scale-[1.02] transition-all duration-300"
            >
              <h3 className="text-lg md:text-xl font-semibold leading-7 text-gray-900">
                {service.name}
              </h3>
              <p className="mt-3 md:mt-4 text-sm md:text-base leading-6 md:leading-7 text-gray-600">
                {service.description}
              </p>
              <ul className="mt-6 md:mt-8 space-y-2 md:space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3 text-sm md:text-base leading-6 md:leading-7 text-gray-700">
                    <svg
                      className="h-5 w-5 md:h-6 md:w-6 flex-none text-blue-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200">
                <p className="text-base md:text-lg font-semibold text-gray-900">
                  {service.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mx-auto mt-16 md:mt-24">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 font-serif">
            Client Testimonials
          </h2>
          <div className="mt-8 md:mt-12 grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.author}
                className="card p-6 md:p-8"
              >
                <p className="text-gray-700">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="mt-6">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;
