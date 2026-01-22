const fs = require('fs');
const path = require('path');

console.log('📦 Building TripChat Planner for Azure Static Web Apps...');

// Create dist directory
const distDir = path.join(__dirname, 'dist');
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// Copy files and directories
function copyRecursive(src, dest) {
  const stats = fs.statSync(src);
  
  if (stats.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    const entries = fs.readdirSync(src);
    for (const entry of entries) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Copy all necessary files
console.log('  ✓ Copying index.html...');
fs.copyFileSync('index.html', path.join(distDir, 'index.html'));

console.log('  ✓ Copying staticwebapp.config.json...');
fs.copyFileSync('staticwebapp.config.json', path.join(distDir, 'staticwebapp.config.json'));

console.log('  ✓ Copying src/...');
copyRecursive('src', path.join(distDir, 'src'));

console.log('  ✓ Copying public/...');
copyRecursive('public', path.join(distDir, 'public'));

console.log('✅ Build complete! Output in dist/');
