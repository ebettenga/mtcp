interface PaymentQrCodeProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function PaymentQrCode({ src, alt, caption }: PaymentQrCodeProps) {
  return (
    <div className="flex flex-col items-start gap-3">
      <img
        src={src}
        alt={alt}
        className="h-48 w-48 rounded-lg border border-gray-200 bg-white p-2 shadow-sm"
      />
      {caption != null && caption !== '' && (
        <p className="font-open text-sm text-gray-700">{caption}</p>
      )}
    </div>
  );
}
