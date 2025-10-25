import fs from 'node:fs/promises';
import path from 'node:path';

const pkgPath = path.resolve('package.json');
const distConfigDir = path.resolve('dist');

async function* walk(dir, parent = '') {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    const rel = path.join(parent, entry.name);
    if (entry.isDirectory()) {
      yield* walk(full, rel);
    } else {
      yield rel;
    }
  }
}

const pkg = JSON.parse(await fs.readFile(pkgPath, 'utf8'));
pkg.exports = {};

for await (const relPath of walk(distConfigDir)) {
  if (!relPath.endsWith('.json')) continue;
  if (relPath === 'base.json') continue;

  const name = relPath.replace(/\.json$/, '');
  const exportPath = `./${name.replace(/\\/g, '/')}`;

  pkg.exports[exportPath] = `./dist/${relPath.replace(/\\/g, '/')}`;
}

await fs.writeFile(pkgPath, JSON.stringify(pkg, null, 2));
console.info('Updated package.json exports!');
