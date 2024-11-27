import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative isolate px-6 pt-10 lg:px-8">
        <div className="mx-auto max-w-2xl py-12 sm:py-16 lg:py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-serif">
              Crafting Stories That Inspire, Inform, and Engage
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Professional writer specializing in creative storytelling, compelling content creation, and engaging narratives that captivate readers and deliver results.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <Link
                href="/portfolio"
                className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                View Portfolio
              </Link>
              <Link href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
                Contact Me <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif">
              Featured Work
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              A selection of my most impactful writing projects and publications.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                title: 'The Art of Storytelling',
                description: 'An in-depth exploration of narrative techniques in modern literature.',
                category: 'Literary Analysis',
                href: '/portfolio/storytelling',
              },
              {
                title: 'Tech Innovations Weekly',
                description: 'Regular column covering emerging technologies and their impact on society.',
                category: 'Technology Writing',
                href: '/portfolio/tech-weekly',
              },
              {
                title: 'Brand Voice Guidelines',
                description: 'Comprehensive guide for maintaining consistent brand communication.',
                category: 'Content Strategy',
                href: '/portfolio/brand-voice',
              },
            ].map((post) => (
              <article key={post.title} className="flex flex-col items-start">
                <div className="relative w-full">
                  <div className="h-48 w-full bg-gray-200 rounded-2xl" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime="2024-03-16" className="text-gray-500">
                      Mar 16, 2024
                    </time>
                    <span className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600">
                      {post.category}
                    </span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <Link href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">
                      {post.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
