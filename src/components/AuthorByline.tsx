export interface AuthorBylineProps {
  authorName: string;
  authorImage?: string;
  date: string;
  readTimeMinutes: number;
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

export default function AuthorByline({
  authorName,
  authorImage,
  date,
  readTimeMinutes,
  className = '',
}: AuthorBylineProps) {
  const readTimeText = readTimeMinutes <= 1 ? '1 min read' : `${readTimeMinutes} min read`;

  return (
    <div
      className={`flex flex-wrap items-center gap-x-2 gap-y-1 py-5 font-open text-sm text-gray-600 ${className}`}
    >
      {authorImage ? (
        <img
          src={authorImage}
          alt={authorName}
          className="h-8 w-8 shrink-0 rounded-full object-cover"
        />
      ) : (
        <div
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-100 font-albert text-xs font-semibold text-primary-700"
          aria-hidden
        >
          {getInitials(authorName)}
        </div>
      )}
      <span className="font-semibold text-black">{authorName}</span>
      <span className="text-gray-400" aria-hidden>
        ·
      </span>
      <span>{readTimeText}</span>
      <span className="text-gray-400" aria-hidden>
        ·
      </span>
      <span>{date}</span>
    </div>
  );
}
