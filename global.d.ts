declare interface Env {
  ZWS_ID: string
}

declare const env: Env

declare module '@env' {
  export = env
}
