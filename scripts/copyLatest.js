import fs, { copyFile } from 'fs';
import { TS_CONFIGS } from './constants.js';

const ALLOWED_ARGS = ['*', ...TS_CONFIGS];

function removeNonSemVerFiles(files) {
  return files.filter((file) => {
    return file.match(/\d+\.\d+\.\d+/);
  });
}

function findLatestFile(directoryPath) {
  const files = fs.readdirSync(directoryPath);
  const semVerFiles = removeNonSemVerFiles(files);
  const sortedFiles = semVerFiles.sort((a, b) => {
    const semVerA = a.match(/\d+\.\d+\.\d+/)[0];
    const semVerB = b.match(/\d+\.\d+\.\d+/)[0];
    return compareSemanticVersions(semVerA, semVerB);
  });
  return sortedFiles[sortedFiles.length - 1];
}

function compareSemanticVersions(versionA, versionB) {
  const partsA = versionA.split('.').map((part) => parseInt(part, 10));
  const partsB = versionB.split('.').map((part) => parseInt(part, 10));

  for (let i = 0; i < 3; i++) {
    if (partsA[i] > partsB[i]) {
      return 1;
    } else if (partsA[i] < partsB[i]) {
      return -1;
    }
  }
  return 0;
}

if (process.argv.length !== TS_CONFIGS.length) {
  console.error(
    `Usage:\nnode scripts/copyLatest.js {${ALLOWED_ARGS.join(' | ')}}`
  );
  process.exit(1);
}

const tsconfigType = process.argv[2];

if (!ALLOWED_ARGS.includes(tsconfigType)) {
  console.error(
    `Invalid tsconfig type '${tsconfigType}'. Must be one of ${ALLOWED_ARGS.map(
      (str) => `'${str}'`
    ).join(', ')}`
  );
  process.exit(1);
}

const types = tsconfigType === '*' ? TS_CONFIGS : [tsconfigType];

types.forEach((tsconfigType) => {
  const directoryPath = `./${tsconfigType}`;
  if (!fs.existsSync(directoryPath)) {
    console.error(`Directory '${directoryPath}' does not exist.`);
    process.exit(1);
  }

  const latestFile = findLatestFile(directoryPath);
  console.log(`Latest for ${tsconfigType} is: ${latestFile}`);
  copyFile(
    `${directoryPath}/${latestFile}`,
    `${tsconfigType}/latest.json`,
    (err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
    }
  );
});
