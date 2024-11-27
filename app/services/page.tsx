export default function Services() {
  const services = [
    {
      name: "Content Writing",
      description:
        "High-quality, engaging content tailored to your audience and goals. From blog posts to website copy, I'll help you communicate effectively.",
      features: [
        "Blog Posts & Articles",
        "Website Copy",
        "Newsletter Content",
        "Social Media Content",
      ],
      price: "Starting at $200/article",
    },
    {
      name: "Technical Writing",
      description:
        "Clear, concise technical documentation and content that makes complex information accessible to your target audience.",
      features: [
        "Technical Documentation",
        "User Guides",
        "API Documentation",
        "Process Documentation",
      ],
      price: "Starting at $300/document",
    },
    {
      name: "Content Strategy",
      description:
        "Comprehensive content strategy services to help you plan, create, and optimize your content for maximum impact.",
      features: [
        "Content Audit",
        "Strategy Development",
        "Editorial Calendar",
        "Content Guidelines",
      ],
      price: "Custom Quote",
    },
  ];

  const testimonials = [
    {
      content:
        "Mehammed's writing perfectly captured our brand voice while maintaining clarity and engagement. Highly recommended!",
      author: "Sarah Johnson",
      role: "Marketing Director",
      company: "Tech Solutions Inc.",
    },
    {
      content:
        "Working with Mehammed was a pleasure. Their technical writing skills made our complex product documentation accessible to all users.",
      author: "Michael Chen",
      role: "Product Manager",
      company: "InnovateSoft",
    },
    {
      content:
        "The content strategy Mehammed developed for us transformed our online presence and significantly increased our engagement.",
      author: "Emma Williams",
      role: "CEO",
      company: "Digital First Agency",
    },
  ];

  return (
    <main className="py-12 md:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 font-serif">
            Services
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg leading-7 md:leading-8 text-gray-700">
            Professional writing services tailored to your needs. From content
            creation to strategy development, I'm here to help you succeed.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mx-auto mt-8 md:mt-16 grid max-w-xl md:max-w-2xl lg:max-w-none grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
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
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="mt-6 md:mt-8 text-base md:text-lg font-semibold leading-7 text-blue-600">
                {service.price}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mx-auto mt-16 md:mt-32">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 font-serif">
            What Clients Say
          </h2>
          <div className="mx-auto mt-8 md:mt-16 grid max-w-xl md:max-w-2xl lg:max-w-none grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="card p-6 md:p-8 hover:scale-[1.02] transition-all duration-300"
              >
                <figure className="isolate">
                  <blockquote className="text-gray-900">
                    <p className="text-sm md:text-base lg:text-lg leading-6 md:leading-8 text-gray-700">
                      "{testimonial.content}"
                    </p>
                  </blockquote>
                  <figcaption className="mt-4 md:mt-6">
                    <div>
                      <div className="text-base md:text-lg font-semibold text-gray-900">
                        {testimonial.author}
                      </div>
                      <div className="text-xs md:text-sm text-gray-600">
                        {`${testimonial.role}, ${testimonial.company}`}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mx-auto mt-16 md:mt-32 text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl md:rounded-2xl p-6 md:p-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 font-serif">
            Ready to Work Together?
          </h2>
          <p className="mx-auto mt-4 md:mt-6 max-w-xl text-base md:text-lg leading-7 md:leading-8 text-gray-700">
            Let's discuss how I can help you achieve your content goals.
          </p>
          <div className="mt-8 md:mt-10">
            <a
              href="/contact"
              className="inline-flex items-center px-4 md:px-6 py-2.5 md:py-3 text-sm md:text-base font-semibold text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
