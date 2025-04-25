import { exposeMySecret, verySecretHello } from "./verysecret"

export function hello(name: string): string {
  return `Hello ${name}`
}

export function sayHello(name: string): void {
  console.log(hello(name))
}

export function moreSecrets(): void {
  console.log(verySecretHello("bera"))
  exposeMySecret()
}