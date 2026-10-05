# oxlint `import/no-cycle` + `overrides` repro

Minimal reproduction for https://github.com/oxc-project/oxc/issues/27337.

`a.ts` and `b.ts` form a genuine 2-file import cycle. Two oxlint configs enable
`import/no-cycle` on them in different ways:

- `oxlint-top-level.config.ts` sets the rule at the top level. This correctly
  reports the cycle.
- `oxlint-override.config.ts` sets the exact same rule, with the exact same
  options, inside an `overrides[].rules` block whose `files` glob matches both
  files. This reports nothing — the rule never fires.

## Run it

```sh
npm install
npm run repro
```

Expected: both configs report the cycle.
Actual: only the top-level config does; the override-scoped one reports
`Found 0 warnings and 0 errors` even though its glob matches the cycle's files.
