import { Link } from 'react-router-dom';
import { getBlogPosts } from '../lib/blog';
import AuthorByline from '../components/AuthorByline';

export default function Blog() {
  const posts = getBlogPosts();

  return (
    <div className="min-h-screen">
      <section
        className="bg-white"
        style={{ padding: '64px 32px', maxWidth: '800px', margin: '0 auto' }}
      >
        <h1 className="font-albert text-3xl font-bold text-black md:text-4xl" style={{ marginBottom: '48px' }}>
          From the Blog
        </h1>
        <div className="flex flex-col gap-10">
          {posts.map((post) => (
            <article key={post.slug}>
              <Link
                to={`/blog/${post.slug}`}
                className="group block rounded-lg border border-gray-200 p-6 transition-colors hover:border-primary-500 hover:bg-gray-50"
              >
                <h2 className="font-albert text-xl font-semibold text-black md:text-2xl group-hover:text-primary-600" style={{ marginBottom: '8px' }}>
                  {post.title}
                </h2>
                {post.description && (
                  <p className="font-open text-base leading-7 text-gray-600">
                    {post.description}
                  </p>
                )}
                {(post.authorName || post.publishedDate) && (
                  <AuthorByline
                    authorName={post.authorName ?? 'Author'}
                    authorImage={post.authorImage}
                    date={post.publishedDate ?? ''}
                    readTimeMinutes={post.readTimeMinutes ?? 1}
                    className="mt-4"
                  />
                )}
                <span className="mt-3 inline-block font-open text-sm font-medium text-primary-500 group-hover:underline">
                  Read more →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
