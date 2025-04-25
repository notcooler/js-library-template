# js-library-template

A template I built myself, uses bun to develop, bunup to build, and it has obfustucation support. Ready to use for both commonjs and esmodules.
Supports nodejs and bun, and possibly the browser as well i am not sure yet.

## Commands

To install dependencies: `bun install`

To develop: `bun dev`

To Build: `bun run build`

To Obfuscate: `bun obfuscate`

To Build and Obfuscate: `bun prepublishOnly`

To Publish: `bun publish` *(Runs `bun prepublishOnly` before publishing)*

## Guide

See the files in src as they explain more about how what gets exported and what not.

To decide what you want to obfuscate in the final build check out `obfustucator.js`, you can also change the preset there.

To add entrypoints go to `bunup.config.ts`, only the exports in the entrypoint files will be actually exported in the final build.