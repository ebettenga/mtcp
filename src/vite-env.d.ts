/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_STRIPE_LINK_ONETIME?: string;
  readonly VITE_STRIPE_LINK_MONTHLY?: string;
  readonly VITE_CHARIOT_CID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Uppercase image extensions (Vite only declares lowercase)
declare module '*.JPG' {
  const src: string;
  export default src;
}
declare module '*.JPEG' {
  const src: string;
  export default src;
}
declare module '*.PNG' {
  const src: string;
  export default src;
}
