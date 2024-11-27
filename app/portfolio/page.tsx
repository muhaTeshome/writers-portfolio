export default function Portfolio() {
  const portfolioItems = [
    {
      title: "The Art of Storytelling",
      category: "Literary Analysis",
      date: "2024",
      description:
        "An in-depth exploration of narrative techniques in modern literature, examining how contemporary authors craft compelling stories that resonate with readers.",
      client: "Literary Magazine",
      link: "#",
      tags: ["Research", "Analysis", "Literature"],
    },
    {
      title: "Tech Innovations Weekly",
      category: "Technology Writing",
      date: "2023-2024",
      description:
        "A weekly column covering emerging technologies and their impact on society, making complex technical concepts accessible to general audiences.",
      client: "Tech Review Platform",
      link: "#",
      tags: ["Technology", "Innovation", "Weekly Column"],
    },
    {
      title: "Brand Voice Guidelines",
      category: "Content Strategy",
      date: "2023",
      description:
        "Developed comprehensive brand voice guidelines for a major retail company, ensuring consistent communication across all channels.",
      client: "Retail Corporation",
      link: "#",
      tags: ["Branding", "Strategy", "Guidelines"],
    },
    {
      title: "Environmental Impact Report",
      category: "Technical Writing",
      date: "2023",
      description:
        "Authored a detailed report on environmental sustainability initiatives, translating complex data into clear, actionable insights.",
      client: "Environmental NGO",
      link: "#",
      tags: ["Environment", "Research", "Technical"],
    },
    {
      title: "Digital Marketing Series",
      category: "Content Marketing",
      date: "2022",
      description:
        "Created a series of articles on digital marketing strategies, helping businesses navigate the evolving digital landscape.",
      client: "Marketing Agency",
      link: "#",
      tags: ["Marketing", "Digital", "Strategy"],
    },
    {
      title: "Healthcare Blog Series",
      category: "Medical Writing",
      date: "2022",
      description:
        "Wrote a series of blog posts explaining complex medical topics to a general audience, focusing on accessibility and clarity.",
      client: "Healthcare Provider",
      link: "#",
      tags: ["Healthcare", "Medical", "Blog"],
    },
  ];

  return (
    <main className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-serif">
            Portfolio
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A collection of my selected works across various writing styles and industries.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {portfolioItems.map((item) => (
            <article
              key={item.title}
              className="flex flex-col items-start bg-white p-6 rounded-2xl shadow-sm ring-1 ring-gray-200"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={item.date} className="text-gray-500">
                  {item.date}
                </time>
                <span className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600">
                  {item.category}
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={item.link}>
                    <span className="absolute inset-0" />
                    {item.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>
              </div>
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-900">
                  Client: {item.client}
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
