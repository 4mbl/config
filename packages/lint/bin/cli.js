#!/usr/bin/env node

import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rawArgs = process.argv.slice(2);

const separatorIndex = rawArgs.indexOf('--');

const wrapperArgs =
  separatorIndex === -1 ? rawArgs : rawArgs.slice(0, separatorIndex);
const toolArgs = separatorIndex === -1 ? [] : rawArgs.slice(separatorIndex + 1);

const presetArgIndex = wrapperArgs.findIndex((a) => a === '--preset');

const presetName =
  presetArgIndex !== -1
    ? wrapperArgs[presetArgIndex + 1]
    : !existsSync('./oxlint.config.ts') && !existsSync('./.oxlintrc.json')
      ? 'base'
      : undefined;

const configPath = presetName
  ? path.resolve(__dirname, `../dist/${presetName}.js`)
  : undefined;

const hasPath = toolArgs.some((a) => !a.startsWith('-'));
const hasMaxWarn = toolArgs.some((a) => a.startsWith('--max-warnings'));
const hasReportUnused = toolArgs.some((a) =>
  a.startsWith('--report-unused-disable-directives'),
);

const finalArgs = [
  configPath ? '--config' : undefined,
  configPath,
  hasPath ? undefined : 'src',
  hasMaxWarn ? undefined : '--max-warnings=0',
  hasReportUnused ? undefined : '--report-unused-disable-directives',
  ...toolArgs,
].filter((a) => a !== undefined);

const result = spawnSync('oxlint', finalArgs, {
  stdio: 'inherit',
  shell: true,
});

process.exit(result.status ?? 1);
