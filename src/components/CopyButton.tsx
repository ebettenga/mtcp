import { useState } from 'react';

interface CopyButtonProps {
  value: string;
  label?: string;
}

export default function CopyButton({ value, label = 'Copy' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="font-albert text-sm font-semibold rounded-full border border-[#123a6e]/20 bg-white px-4 py-2 text-[#123a6e] transition-colors hover:bg-gray-50"
    >
      {copied ? 'Copied!' : label}
    </button>
  );
}
