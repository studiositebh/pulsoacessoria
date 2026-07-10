/// <reference types="vite/client" />

type FbqArgs = [command: string, ...params: unknown[]];
type FbqQueue = FbqArgs[];

interface Fbq {
  (...args: FbqArgs): void;
  callMethod?: (...args: FbqArgs) => void;
  queue: FbqQueue;
  push: Fbq;
  loaded: boolean;
  version: string;
}

interface Window {
  fbq?: Fbq;
  _fbq?: Fbq;
}
