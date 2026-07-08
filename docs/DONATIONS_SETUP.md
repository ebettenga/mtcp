# Donations Setup Guide

MTPC accepts donations through a static, backend-free setup:

- **Venmo / Zelle / check** — manual methods with MTPC-issued tax receipts
- **Stripe Payment Links** — one-time and monthly card gifts with automatic Stripe receipts
- **Chariot DAFpay** — donor-advised fund grants with sponsor confirmation emails

## Configuration file

All donation settings live in one JSON file:

```
src/config/donations.config.json   ← your local file (gitignored)
src/config/donations.config.example.json   ← committed template
```

On first `yarn dev` or `yarn build`, the example file is copied automatically if your local config does not exist.

Fill in `donations.config.json` with your real values before going live.

### Example structure

```json
{
  "organization": {
    "legalName": "Minnesota Tennis Players Council",
    "ein": "XX-XXXXXXX",
    "mailingAddress": {
      "street": "123 Example St",
      "city": "St. Paul",
      "state": "MN",
      "zip": "55106"
    },
    "checkPayableTo": "Minnesota Tennis Players Council",
    "receiptEmail": "mtpctennis@gmail.com",
    "receiptTurnaround": "within 2 weeks",
    "receiptNote": "No goods or services were provided in exchange for this contribution."
  },
  "stripe": {
    "oneTimePaymentLink": "https://buy.stripe.com/...",
    "monthlyPaymentLink": "https://buy.stripe.com/..."
  },
  "chariot": {
    "connectId": "your-chariot-cid"
  },
  "venmo": {
    "handle": "MTPC",
    "url": "https://venmo.com/MTPC"
  },
  "zelle": {
    "emailOrPhone": "donations@example.com"
  },
  "daf": {
    "grantDesignation": "General support / youth tennis programs"
  }
}
```

### Environment variable overrides (optional)

These override the JSON values at build time (useful in GitHub Actions):

| Variable | Overrides |
|---|---|
| `VITE_STRIPE_LINK_ONETIME` | `stripe.oneTimePaymentLink` |
| `VITE_STRIPE_LINK_MONTHLY` | `stripe.monthlyPaymentLink` |
| `VITE_CHARIOT_CID` | `chariot.connectId` |

### Production deploy (GitHub Pages)

Option A — store the full JSON in a GitHub secret:

1. Repo → Settings → Secrets → Actions
2. Add `DONATIONS_CONFIG_JSON` with the full JSON contents
3. The deploy workflow writes this file before build

Option B — use individual secrets for Stripe/Chariot env vars and keep a local `donations.config.json` with org details only.

## Stripe setup (one-time + recurring)

No backend or secret keys are needed in this repo. Use **Stripe Payment Links**.

1. Create or log into your [Stripe dashboard](https://dashboard.stripe.com)
2. Register MTPC as a nonprofit (legal name, EIN, bank account)
3. Create a Product: **MTPC Donation**
4. Create a **one-time** Payment Link with customer-chooses-amount
5. Create a **monthly recurring** Payment Link (e.g. $10 / $25 / $50 tiers)
6. On each Payment Link:
   - Collect billing address
   - Add optional custom field: "Designation / note"
   - Set metadata: `source=website`, `fund=general`
   - Set success redirect URL to: `https://mtpctennis.com/donate/thanks` (or your domain)
7. Enable **Settings → Emails → Successful payments** for automatic receipts
8. Customize the receipt footer with your legal name, EIN, and:
   > No goods or services were provided in exchange for this contribution.
9. Copy both Payment Link URLs into `donations.config.json`

**Never put Stripe secret keys in this repo.** Payment Links are public URLs.

## Chariot DAF setup

1. Register MTPC at [Chariot](https://www.givechariot.com/) with your EIN
2. Complete nonprofit verification and bank details
3. Copy your **Connect ID (cid)** into `donations.config.json` → `chariot.connectId`
4. The DAF widget appears automatically on the Donations page

DAF donors receive grant confirmations from Chariot and their DAF sponsor. These are acknowledgments, not new tax receipts (the donor already received a deduction when funding the DAF).

## Manual methods (Venmo / Zelle / check)

- **Venmo**: donor includes name + "MTPC donation" in the note; MTPC emails a receipt manually
- **Zelle**: same memo guidance; receipt sent from `receiptEmail`
- **Check**: include name, email, and mailing address in the envelope; receipt sent after processing

## Receipt responsibility

| Method | Who sends the receipt |
|---|---|
| Stripe (card) | Stripe automatically |
| DAF (Chariot) | DAF sponsor + Chariot confirmation |
| Venmo / Zelle / check | MTPC manually via `receiptEmail` |

## Future: custom receipts (Phase 2)

If you later need branded receipts or a donor database, add a serverless worker (Cloudflare Workers) with:

- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `RESEND_API_KEY` (or similar email provider)

That worker would never live in this static site repo.
