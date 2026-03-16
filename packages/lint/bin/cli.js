#!/usr/bin/env node

import { spawnSync } from 'node:child_process';

const args = process.argv.slice(2);

const hasPath = args.some((a) => !a.startsWith('-'));
const hasMaxWarn = args.some((a) => a.startsWith('--max-warnings'));
const hasReportUnused = args.some((a) =>
  a.startsWith('--report-unused-disable-directives'),
);

const finalArgs = [
  ...(hasPath ? [] : ['src']),
  ...(hasMaxWarn ? [] : ['--max-warnings=0']),
  ...(hasReportUnused ? [] : ['--report-unused-disable-directives']),
  ...args,
];

const result = spawnSync('oxlint', finalArgs, {
  stdio: 'inherit',
  shell: true,
});

process.exit(result.status ?? 1);
