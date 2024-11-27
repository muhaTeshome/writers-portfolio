export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "The Future of Content Creation in the AI Era",
      description:
        "Exploring how artificial intelligence is reshaping the landscape of content creation and what it means for writers.",
      date: "March 16, 2024",
      category: "Technology",
      readTime: "5 min read",
      image: "/blog/ai-content.jpg",
    },
    {
      id: 2,
      title: "Crafting Compelling Characters: A Writer's Guide",
      description:
        "Learn the essential techniques for creating memorable characters that resonate with your readers.",
      date: "March 10, 2024",
      category: "Writing Tips",
      readTime: "7 min read",
      image: "/blog/characters.jpg",
    },
    {
      id: 3,
      title: "The Power of Storytelling in Marketing",
      description:
        "How businesses can leverage storytelling techniques to create more engaging and effective marketing content.",
      date: "March 5, 2024",
      category: "Marketing",
      readTime: "6 min read",
      image: "/blog/storytelling.jpg",
    },
    {
      id: 4,
      title: "SEO Writing: Balancing Creativity and Optimization",
      description:
        "Tips and strategies for writing content that appeals to both search engines and human readers.",
      date: "February 28, 2024",
      category: "SEO",
      readTime: "8 min read",
      image: "/blog/seo.jpg",
    },
  ];

  return (
    <main className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-serif">
            Blog
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Thoughts, insights, and expertise on writing, content creation, and
            industry trends.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-between group"
            >
              <div className="relative w-full">
                <div className="aspect-[16/9] w-full rounded-2xl bg-gray-100 sm:aspect-[2/1] lg:aspect-[3/2]" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-gray-500">
                    {post.date}
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600">
                    {post.category}
                  </span>
                  <span className="text-gray-500">{post.readTime}</span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={`/blog/${post.id}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
                    {post.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Categories Section */}
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 font-serif">
            Categories
          </h2>
          <div className="mt-6 flex flex-wrap gap-4">
            {["Writing Tips", "Technology", "Marketing", "SEO", "Industry Insights", "Personal Stories"].map(
              (category) => (
                <a
                  key={category}
                  href={`/blog/category/${category.toLowerCase()}`}
                  className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                  {category}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
