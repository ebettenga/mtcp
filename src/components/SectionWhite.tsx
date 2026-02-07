import type { BaseSectionProps } from './Section';

export default function SectionWhite({
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
    <div className="flex min-h-0 flex-1 flex-col bg-white px-8 py-14 md:px-16 md:py-20">
      {title != null && (typeof title !== 'string' || title !== '') && (
        <h2 className="font-albert text-2xl font-semibold text-black md:text-3xl mb-8">
          {title}
        </h2>
      )}
      {text != null && text !== '' && (
        <p className="font-open text-base leading-7 text-black mb-6">
          {text}
        </p>
      )}
      {children}
      {buttons != null && buttons.length > 0 && (
        <div className="flex flex-wrap justify-center gap-4" style={{ marginTop: '5rem' }}>
            {buttons.map((btn, i) => {
              const style =
                'inline-block rounded-lg bg-primary-500 px-10 py-5 font-albert text-lg font-semibold text-white transition-colors hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white';
            if (btn.href != null) {
              return (
                <a
                  key={i}
                  href={btn.href}
                  className={style}
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
                className={style}
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
        className={`bg-white ${className}`.trim()}
        style={{ padding: '64px 32px' }}
      >
        <div className="mx-auto max-w-page">
          {contentBlock}
        </div>
      </section>
    );
  }

  return (
    <section id={id} className={`bg-white ${className}`.trim()}>
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
