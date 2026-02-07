import type { BaseSectionProps } from './Section';

export default function SectionGreen({
  title,
  text,
  image,
  imagePosition = 'left',
  buttons,
  children,
  className = '',
  id,
}: BaseSectionProps) {
  const hasImage = Boolean(image);
  const imageOrder = imagePosition === 'right' ? 2 : 1;
  const contentOrder = imagePosition === 'right' ? 1 : 2;

  const contentBlock = (
    <div className="flex min-h-0 flex-1 flex-col px-8 py-14 md:px-16 md:py-20">
      {title != null && (typeof title !== 'string' || title !== '') && (
        <h2 className="font-albert text-2xl font-semibold text-white md:text-3xl mb-8">
          {title}
        </h2>
      )}
      {text != null && text !== '' && (
        <p className="font-open text-base leading-7 text-white mb-6">
          {text}
        </p>
      )}
      {children}
      {buttons != null && buttons.length > 0 && (
        <div className="flex flex-wrap justify-center gap-4" style={{ marginTop: '5rem' }}>
            {buttons.map((btn, i) => {
              const style =
                'inline-block rounded-lg px-10 py-5 font-albert text-lg font-semibold text-black transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
              const colorStyle = 'bg-tertiary-500 hover:bg-tertiary-600 focus:ring-tertiary-500';
              const combinedStyle = `${style} ${colorStyle}`.trim();
            if (btn.href != null) {
              return (
                <a
                  key={i}
                  href={btn.href}
                  className={combinedStyle}
                  style={{ backgroundColor: '#E8A93C' }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#d18d28'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#E8A93C'; }}
                  target={btn.href.startsWith('http') ? '_blank' : undefined}
                  rel={btn.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {btn.label}
                </a>
              );
            }
            return (
              <button
                key={i}
                type="button"
                onClick={btn.onClick}
                className={combinedStyle}
                style={{ backgroundColor: '#E8A93C' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#d18d28'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#E8A93C'; }}
              >
                {btn.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );

  if (!hasImage) {
    return (
      <section
        id={id}
        className={`bg-primary-500 ${className}`.trim()}
        style={{ padding: '64px 32px' }}
      >
        <div className="mx-auto max-w-page">
          {contentBlock}
        </div>
      </section>
    );
  }

  return (
    <section id={id} className={`bg-primary-500 ${className}`.trim()}>
      <div className="flex flex-col md:flex-row md:items-stretch">
        <div
          className="flex w-full shrink-0 md:w-2/5 md:min-h-0"
          style={{ order: imageOrder }}
        >
          <img
            src={image}
            alt={typeof title === 'string' ? title : 'Section image'}
            className="h-auto w-full object-cover md:h-full md:min-h-0"
          />
        </div>
        <div
          className="flex min-h-0 flex-1 flex-col"
          style={{ order: contentOrder }}
        >
          {contentBlock}
        </div>
      </div>
    </section>
  );
}
