import { mysecret } from "./mysecret"

export function verySecretHello(name: string): string {
    return `This is a very secret hello message, your name is ${name}`
}

export function exposeMySecret(): void {
    console.log(mysecret)
}