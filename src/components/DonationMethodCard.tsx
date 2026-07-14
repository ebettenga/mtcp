import type { ReactNode } from 'react';

interface DonationMethodCardProps {
  title: string;
  description: string;
  children?: ReactNode;
  action?: ReactNode;
}

export default function DonationMethodCard({
  title,
  description,
  children,
  action,
}: DonationMethodCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="font-albert text-xl font-semibold text-[#123a6e]">{title}</h3>
      <p className="mt-4 font-open text-base leading-7 text-black">{description}</p>
      {children != null && <div className="mt-4 space-y-3">{children}</div>}
      {action != null && <div className="my-6">{action}</div>}
    </div>
  );
}
