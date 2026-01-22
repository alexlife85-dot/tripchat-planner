const fs = require('fs');
const path = require('path');

console.log('📦 Building TripChat Planner for Azure Static Web Apps...');
console.log('ℹ️  Files already in place - no copying needed for static app');

// Verify required files exist
const requiredFiles = ['index.html', 'staticwebapp.config.json', 'src', 'public'];
let allFilesExist = true;

for (const file of requiredFiles) {
  if (fs.existsSync(path.join(__dirname, file))) {
    console.log(`  ✓ ${file} exists`);
  } else {
    console.log(`  ✗ ${file} missing!`);
    allFilesExist = false;
  }
}

if (allFilesExist) {
  console.log('✅ Build complete! All static files in place.');
} else {
  console.error('❌ Build failed! Some required files are missing.');
  process.exit(1);
}
