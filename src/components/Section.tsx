interface SectionProps {
  title?: string;
  text?: string;
  image?: string;
  children?: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  id?: string;
}

export default function Section({
  title,
  text,
  image,
  children,
  className = '',
  variant = 'primary',
  id,
}: SectionProps) {
  const isPrimary = variant === 'primary';
  const bgColor = isPrimary ? '#57944f' : '#467a3f';
  const textColor = 'white';

  return (
    <section
      id={id}
      className={className}
      style={{ padding: '64px 32px', backgroundColor: bgColor }}
    >
      {title && (
        <h2
          className="font-albert text-2xl font-semibold md:text-3xl"
          style={{ marginBottom: '32px', color: textColor }}
        >
          {title}
        </h2>
      )}
      {text && (
        <p
          className="font-open text-base leading-7"
          style={{ marginBottom: children ? '32px' : '0', color: textColor }}
        >
          {text}
        </p>
      )}
      {children}
      {image && (
        <img
          src={image}
          alt={title || 'Section image'}
          className="h-auto w-full max-w-md rounded-lg object-cover"
          style={{ marginTop: '32px' }}
        />
      )}
    </section>
  );
}
