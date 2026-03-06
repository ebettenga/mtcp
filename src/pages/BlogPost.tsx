import { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getBlogPostBySlug } from '../lib/blog';
import AuthorCard from '../components/AuthorCard';
import AuthorByline from '../components/AuthorByline';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | MTPC`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.description);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = post.description;
        document.head.appendChild(meta);
      }
    }
    return () => {
      document.title = 'MTPC';
    };
  }, [post]);

  if (!slug || !post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-white">
      <article
        className="bg-white"
        style={{ padding: '64px 32px', maxWidth: '720px', margin: '0 auto', minHeight: '400px' }}
      >
        <Link
          to="/blog"
          className="font-open text-sm font-medium text-primary-500 hover:underline"
          style={{ marginBottom: '24px', display: 'inline-block' }}
        >
          ← Back to blog
        </Link>
        {(post.authorName || post.publishedDate) && (
          <AuthorByline
            authorName={post.authorName ?? 'Author'}
            authorImage={post.authorImage}
            date={post.publishedDate ?? ''}
            readTimeMinutes={post.readTimeMinutes ?? 1}
            className="mb-6"
          />
        )}
        <h1 className="font-albert text-3xl pt-3 font-bold text-black md:text-4xl" style={{ marginBottom: '32px' }}>
          {post.title}
        </h1>
        {post.description && (
          <p className="font-open text-lg leading-7 text-gray-600" style={{ marginBottom: '32px' }}>
            {post.description}
          </p>
        )}
        <div className="blog-content font-open text-base leading-7 text-gray-800">
          {post.content && (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                p: ({ children }) => <p style={{ marginBottom: '1.25rem' }}>{children}</p>,
                strong: ({ children }) => <strong className="font-semibold text-black">{children}</strong>,
                em: ({ children }) => <em className="italic">{children}</em>,
                blockquote: ({ children }) => (
                  <blockquote
                    className="border-l-4 border-primary-500 pl-4 italic text-gray-700"
                    style={{ margin: '1.5rem 0' }}
                  >
                    {children}
                  </blockquote>
                ),
                hr: () => <hr className="my-8 border-gray-200" />,
              }}
            >
              {post.content}
            </ReactMarkdown>
          )}
        </div>

        {(post.authorName || post.publishedDate) && (
          <AuthorCard
            authorName={post.authorName ?? 'Author'}
            authorImage={post.authorImage}
            authorBio={post.authorBio ?? ''}
            authorLink={post.authorLink}
            date={post.publishedDate ?? ''}
            className="mt-10"
          />
        )}
      </article>
    </div>
  );
}
