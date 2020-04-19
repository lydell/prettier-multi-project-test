# prettier-multi-project-test

This is an example where a “master repo” contains three different services (they could just as well be git submodules), all of which currently use different versions of Prettier. (It’s hard to keep everything up-to-date all the time, you know!)

Here’s a test for this setup:

1. Open the root of this repo in VSCode using `code .`.
2. Install the `prettier-vscode` extension.
3. Enable “Format on save”.
4. Make edits in all three `index.js` files (one for each service).

Expected behavior: `prettier-vscode` resolves Prettier for each file, so that `serviceA/` gets 2.0, `serviceB/` gets 1.19 and `serviceC/` gets 1.18.
