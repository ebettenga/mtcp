export interface AuthorCardProps {
  authorName: string;
  authorImage?: string;
  authorBio: string;
  authorLink?: { url: string; label?: string };
  date: string;
  className?: string;
}

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export default function AuthorCard({
  authorName,
  authorImage,
  authorBio,
  authorLink,
  date,
  className = '',
}: AuthorCardProps) {
  return (
    <div
      className={`flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 sm:flex-row sm:items-start ${className}`}
    >
      <div className="flex shrink-0">
        {authorImage ? (
          <img
            src={authorImage}
            alt={authorName}
            className="h-14 w-14 rounded-full object-cover sm:h-16 sm:w-16"
          />
        ) : (
          <div
            className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 font-albert text-lg font-semibold text-primary-700 sm:h-16 sm:w-16"
            aria-hidden
          >
            {getInitials(authorName)}
          </div>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-open text-sm text-gray-500">
          Written by <span className="font-open font-semibold text-black">{authorName}</span>
        </p>
        <p className="font-open text-sm text-gray-500">{date}</p>
        <p className="font-open text-sm leading-6 text-gray-700" style={{ marginTop: '8px' }}>
          {authorBio}
          {authorLink && (
            <>
              {' '}
              <a
                href={authorLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary-500 underline hover:text-primary-600"
              >
                {authorLink.label ?? 'Connect'}
              </a>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
