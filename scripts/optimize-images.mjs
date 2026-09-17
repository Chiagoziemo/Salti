// One-off/rerunnable optimizer for public/images/ — resizes full-resolution
// camera photos down to reasonable web dimensions and re-compresses them.
// Run: node scripts/optimize-images.mjs
import { readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const DIR = join(import.meta.dirname, '..', 'public', 'images');
const MAX_DIMENSION = 2000;
const QUALITY = 82;

const files = (await readdir(DIR)).filter((f) => /\.(jpe?g|png)$/i.test(f));

let beforeTotal = 0;
let afterTotal = 0;

for (const file of files) {
  const path = join(DIR, file);
  const before = (await stat(path)).size;
  beforeTotal += before;
  const isPng = /\.png$/i.test(file);

  // PNGs here are product cutouts with real alpha (transparent background)
  // — flattening to JPEG would fill that in with a solid color, so they
  // stay PNG (resized + recompressed) while JPEGs re-encode as before.
  let pipeline = sharp(path)
    .rotate()
    .resize({ width: MAX_DIMENSION, height: MAX_DIMENSION, fit: 'inside', withoutEnlargement: true });
  pipeline = isPng ? pipeline.png({ compressionLevel: 9 }) : pipeline.jpeg({ quality: QUALITY, mozjpeg: true });

  const buffer = await pipeline.toBuffer();
  await sharp(buffer).toFile(path + '.tmp');
  await import('node:fs/promises').then((fs) => fs.rename(path + '.tmp', path));

  const after = (await stat(path)).size;
  afterTotal += after;
  console.log(`${file}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`);
}

console.log(`\nTotal: ${(beforeTotal / 1024 / 1024).toFixed(1)}MB -> ${(afterTotal / 1024 / 1024).toFixed(1)}MB`);
