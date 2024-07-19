import fs from 'fs';
import { TS_CONFIGS } from './constants.js';

for (const tsconfigType of TS_CONFIGS) {
  const configPath = `./${tsconfigType}/latest.json`;

  fs.rmSync(configPath, { force: true });
}
