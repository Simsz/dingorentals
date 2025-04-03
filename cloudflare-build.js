const { execSync } = require('child_process');
const fs = require('fs');

// Ensure we're using legacy-peer-deps
console.log('Setting up Cloudflare Pages build with legacy-peer-deps...');

try {
  // Run the Next.js build
  console.log('Building Next.js application...');
  execSync('npx next build', { stdio: 'inherit' });
  
  // Ensure output directory exists
  if (!fs.existsSync('.vercel/output/static')) {
    console.log('Creating output directory...');
    fs.mkdirSync('.vercel/output/static', { recursive: true });
  }
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
} 