import { copyFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const target = join(root, 'src/config/donations.config.json');
const example = join(root, 'src/config/donations.config.example.json');

if (!existsSync(target)) {
  copyFileSync(example, target);
  console.log('Created src/config/donations.config.json from example template.');
}
