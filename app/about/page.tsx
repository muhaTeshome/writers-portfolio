'use client';

import React from 'react';

const About = () => {
  const skills = [
    {
      name: 'Creative Writing',
      description: 'Crafting engaging stories and narratives that captivate readers',
    },
    {
      name: 'Content Strategy',
      description: 'Developing comprehensive content plans aligned with business goals',
    },
    {
      name: 'SEO Writing',
      description: 'Creating search-engine optimized content that ranks and converts',
    },
    {
      name: 'Technical Writing',
      description: 'Translating complex concepts into clear, accessible content',
    },
    {
      name: 'Editorial Writing',
      description: 'Producing well-researched articles and opinion pieces',
    },
    {
      name: 'Brand Storytelling',
      description: 'Crafting compelling brand narratives that resonate with audiences',
    },
  ];

  return (
    <main className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Introduction Section */}
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-serif">
            About Me
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Hi, I&apos;m Mehammed T. A passionate writer with over 5 years of experience in crafting compelling narratives and engaging content.
          </p>
        </div>

        {/* Experience & Background */}
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 font-serif">
            Experience &amp; Background
          </h2>
          <div className="mt-6 space-y-8 text-gray-600">
            <p>
              My journey in writing began with a deep love for storytelling and a desire to connect with readers on a meaningful level. Over the years, I&apos;ve had the privilege of working with diverse clients across various industries, helping them tell their stories and engage their audiences.
            </p>
            <p>
              I specialize in creative writing, content strategy, and digital storytelling. My work has been featured in several notable publications, and I&apos;ve helped businesses transform their communication through compelling narratives.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 font-serif">
            Core Skills
          </h2>
          <dl className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div key={skill.name} className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <div className="absolute left-1 top-1 h-5 w-5 text-indigo-600">
                    <span className="text-2xl">•</span>
                  </div>
                  {skill.name}
                </dt>
                <dd className="inline ml-1 text-gray-600">
                  {" - "}{skill.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Education & Certifications */}
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 font-serif">
            Education &amp; Certifications
          </h2>
          <div className="mt-6 space-y-8 text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-900">Bachelor&apos;s in English Literature</h3>
              <p>University Name, 2015-2019</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Content Strategy Certification</h3>
              <p>Content Marketing Institute, 2020</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
