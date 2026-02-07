import type React from 'react';
import SectionGreen from './SectionGreen';
import SectionWhite from './SectionWhite';

export interface SectionButton {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface BaseSectionProps {
  title?: string | React.ReactNode;
  text?: string;
  image?: string;
  imagePosition?: 'left' | 'right';
  buttons?: SectionButton[];
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export type SectionProps = BaseSectionProps & {
  variant?: 'green' | 'white' | 'primary' | 'secondary';
};

function normalizeVariant(
  variant: SectionProps['variant']
): 'green' | 'white' {
  if (variant === 'secondary' || variant === 'white') return 'white';
  return 'green';
}

export default function Section({
  variant = 'primary',
  ...rest
}: SectionProps) {
  const resolved = normalizeVariant(variant);
  return resolved === 'green' ? (
    <SectionGreen {...rest} />
  ) : (
    <SectionWhite {...rest} />
  );
}
