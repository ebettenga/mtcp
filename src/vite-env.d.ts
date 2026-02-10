/// <reference types="vite/client" />

// Uppercase image extensions (Vite only declares lowercase)
declare module '*.JPG' {
  const src: string
  export default src
}
declare module '*.JPEG' {
  const src: string
  export default src
}
declare module '*.PNG' {
  const src: string
  export default src
}
