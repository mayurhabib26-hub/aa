import fs from 'fs';
import path from 'path';

const PUBLIC_IMAGES_DIR = path.resolve('public', 'images');
if (!fs.existsSync(PUBLIC_IMAGES_DIR)) {
  fs.mkdirSync(PUBLIC_IMAGES_DIR, { recursive: true });
}

// Find all files in src/ plus index.html
function getFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const res = path.resolve(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getFiles(res));
    } else if (/\.(tsx?|jsx?|html|css|json)$/.test(entry.name)) {
      files.push(res);
    }
  }
  return files;
}

const targetFiles = [...getFiles('src'), path.resolve('index.html')];

// Regex for Unsplash images
const unsplashRegex = /https:\/\/images\.unsplash\.com\/(photo-[a-zA-Z0-9_-]+)[^'"`\s\)]*/g;

const photoUrls = new Map(); // photoId -> sampleUrl

for (const file of targetFiles) {
  const content = fs.readFileSync(file, 'utf-8');
  let match;
  while ((match = unsplashRegex.exec(content)) !== null) {
    const fullUrl = match[0];
    const photoId = match[1];
    if (!photoUrls.has(photoId)) {
      // Use w=1600&q=85 for good quality/size balance
      const downloadUrl = `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1600&q=85`;
      photoUrls.set(photoId, downloadUrl);
    }
  }
}

console.log(`Found ${photoUrls.size} unique Unsplash images to download.`);

async function downloadAll() {
  for (const [photoId, url] of photoUrls.entries()) {
    const destPath = path.join(PUBLIC_IMAGES_DIR, `${photoId}.jpg`);
    if (fs.existsSync(destPath) && fs.statSync(destPath).size > 1000) {
      console.log(`Already exists: ${photoId}.jpg`);
      continue;
    }

    try {
      console.log(`Downloading: ${photoId}...`);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
      }
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      fs.writeFileSync(destPath, buffer);
      console.log(`Saved: ${photoId}.jpg (${Math.round(buffer.length / 1024)} KB)`);
    } catch (err) {
      console.error(`Error downloading ${photoId}:`, err);
    }
  }

  // Now replace all occurrences in the files
  console.log('\nReplacing URLs in files...');
  for (const file of targetFiles) {
    let content = fs.readFileSync(file, 'utf-8');
    let changed = false;

    // Replace any https://images.unsplash.com/photo-ID... with /images/photo-ID.jpg
    const fileUnsplashRegex = /https:\/\/images\.unsplash\.com\/(photo-[a-zA-Z0-9_-]+)[^'"`\s\)]*/g;
    if (fileUnsplashRegex.test(content)) {
      content = content.replace(fileUnsplashRegex, (match, photoId) => {
        return `/images/${photoId}.jpg`;
      });
      fs.writeFileSync(file, content, 'utf-8');
      console.log(`Updated: ${path.relative(process.cwd(), file)}`);
    }
  }

  console.log('\nAll images saved and references updated!');
}

downloadAll().catch(console.error);
