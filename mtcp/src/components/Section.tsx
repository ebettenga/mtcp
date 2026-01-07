interface SectionProps {
  title?: string;
  text?: string;
  image?: string;
  imagePosition?: 'left' | 'right';
  children?: React.ReactNode;
  className?: string;
}

export default function Section({
  title,
  text,
  image,
  imagePosition = 'right',
  children,
  className = '',
}: SectionProps) {
  const imageElement = image && (
    <div className="flex w-full flex-shrink-0 justify-center md:w-auto md:justify-start">
      <img src={image} alt={title || 'Section image'} className="h-auto w-full max-w-md rounded-lg object-cover" />
    </div>
  );

  const contentElement = (
    <div className="flex w-full flex-1 flex-col items-center gap-4 md:items-start md:gap-0">
      {title && (
        <h2 className="text-center font-albert text-2xl font-semibold leading-9 text-white md:text-left md:text-3xl md:leading-[60px]">
          {title}
        </h2>
      )}
      {text && (
        <div className="w-full py-2.5 text-center md:text-left">
          <p className="font-open text-base leading-7 text-white">{text}</p>
        </div>
      )}
      {children}
    </div>
  );

  return (
    <section className={`bg-primary-500 py-12 md:py-16 ${className}`}>
      <div className="max-w-page mx-auto w-full px-6">
        <div
          className={`flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-8 ${
            imagePosition === 'left' ? 'md:flex-row-reverse' : ''
          }`}
        >
          {imagePosition === 'left' ? (
            <>
              {imageElement}
              {contentElement}
            </>
          ) : (
            <>
              {contentElement}
              {imageElement}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
