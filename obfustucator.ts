import { readdir } from "node:fs/promises"
import obfustucator from "javascript-obfuscator"
import type { TInputOptions } from "javascript-obfuscator/typings/src/types/options/TInputOptions"
import path from "node:path"

// Paths to obfustucate any file under this folder/subfolders will be obfustucated
const PATHS = [
  // "dist", /* This will obfustucate every script in the final build */
  "dist/verysecret" /* Lets only obfustucate our very secret script */
]

// Preset
const PRESET: TInputOptions = {
  ...obfustucator.getOptionsByPreset("high-obfuscation"),
  disableConsoleOutput: false,
  debugProtection: false,
  selfDefending: false,
  deadCodeInjection: true,
  deadCodeInjectionThreshold: 1,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 1,
}

let files: string[] = []

// Get all files
for (const i in PATHS) {
  const newFiles = await readdir(PATHS[i]!, { recursive: true })
  files = files.concat(newFiles.map((f) => path.join(PATHS[i]!, f)))
}

// Only obfuscate the javascript files
files = files.filter((f) => f.endsWith(".cjs") || f.endsWith(".mjs"))

files.forEach(async (file) => {
  const text = await Bun.file(file).text()
  const result = obfustucator.obfuscate(text, PRESET)

  // Write the obfustucated code back
  await Bun.write(file, result.getObfuscatedCode())
  console.log(`Obfuscated ${file}`)
})
