#!/usr/bin/env node

/**
 * Simple deployment script for the Industrial Fabricators website
 */

const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🚀 Industrial Fabricators Website Deployment Tool 🚀');
console.log('=================================================\n');

console.log('This script will help you deploy the website to Vercel.\n');

// Check if Vercel CLI is installed
try {
  execSync('vercel --version', { stdio: 'pipe' });
  console.log('✅ Vercel CLI is installed.\n');
} catch (error) {
  console.log('❌ Vercel CLI is not installed.');
  console.log('Installing Vercel CLI...');
  
  try {
    execSync('npm install -g vercel', { stdio: 'inherit' });
    console.log('✅ Vercel CLI installed successfully.\n');
  } catch (installError) {
    console.error('❌ Failed to install Vercel CLI.');
    console.log('Please install it manually with: npm install -g vercel');
    process.exit(1);
  }
}

// Ask for deployment type
rl.question('Do you want to deploy to production? (y/n): ', (answer) => {
  const isProduction = answer.toLowerCase() === 'y';
  
  console.log('\n🔍 Running build to check for errors...');
  try {
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build successful.\n');
  } catch (error) {
    console.error('❌ Build failed. Please fix the errors before deploying.');
    rl.close();
    process.exit(1);
  }
  
  console.log('📤 Deploying to Vercel...');
  try {
    if (isProduction) {
      execSync('vercel --prod', { stdio: 'inherit' });
    } else {
      execSync('vercel', { stdio: 'inherit' });
    }
    console.log('✅ Deployment successful!\n');
  } catch (error) {
    console.error('❌ Deployment failed.');
    rl.close();
    process.exit(1);
  }
  
  rl.close();
});

rl.on('close', () => {
  console.log('\n👋 Thank you for using the deployment tool!');
  process.exit(0);
});
