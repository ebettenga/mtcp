import rawConfig from './donations.config.json';

export interface DonationsConfig {
  organization: {
    legalName: string;
    ein: string;
    mailingAddress: {
      street: string;
      city: string;
      state: string;
      zip: string;
    };
    checkPayableTo: string;
    receiptEmail: string;
    receiptTurnaround: string;
    receiptNote: string;
  };
  stripe: {
    oneTimePaymentLink: string;
    monthlyPaymentLink: string;
  };
  chariot: {
    connectId: string;
  };
  venmo: {
    handle: string;
    url: string;
  };
  zelle: {
    emailOrPhone: string;
  };
  daf: {
    grantDesignation: string;
  };
}

function envOrValue(envKey: string, value: string): string {
  const envValue = import.meta.env[envKey];
  if (typeof envValue === 'string' && envValue.trim() !== '') {
    return envValue.trim();
  }
  return value;
}

const config = rawConfig as DonationsConfig;

export const donationsConfig: DonationsConfig = {
  ...config,
  stripe: {
    oneTimePaymentLink: envOrValue('VITE_STRIPE_LINK_ONETIME', config.stripe.oneTimePaymentLink),
    monthlyPaymentLink: envOrValue('VITE_STRIPE_LINK_MONTHLY', config.stripe.monthlyPaymentLink),
  },
  chariot: {
    connectId: envOrValue('VITE_CHARIOT_CID', config.chariot.connectId),
  },
};

export function formatMailingAddress(): string {
  const { street, city, state, zip } = donationsConfig.organization.mailingAddress;
  const parts = [street, `${city}, ${state} ${zip}`.trim()].filter(Boolean);
  return parts.join(', ');
}

export function isStripeConfigured(): boolean {
  return Boolean(
    donationsConfig.stripe.oneTimePaymentLink || donationsConfig.stripe.monthlyPaymentLink,
  );
}

export function isChariotConfigured(): boolean {
  return Boolean(donationsConfig.chariot.connectId);
}

export function isZelleConfigured(): boolean {
  return Boolean(donationsConfig.zelle.emailOrPhone);
}

export function isOrganizationConfigured(): boolean {
  const { legalName, ein, mailingAddress } = donationsConfig.organization;
  return Boolean(legalName && ein && mailingAddress.street && mailingAddress.city && mailingAddress.zip);
}
