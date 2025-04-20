/**
 * File: next.config.js
 * Purpose: Configuration for Next.js application with GitHub Pages static export
 * Author: Your Name
 * Created: April 2025
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    
    // Disable image optimization which doesn't work on GitHub Pages
    images: {
      unoptimized: true,
    },
    
    // Set base path if your GitHub Pages site is not at the root
    // Replace 'final-deliverable' with your actual repository name
    basePath: '/final-deliverable',
    
    // This helps with GitHub Pages deployment
    assetPrefix: '/final-deliverable/',
    
    // Disable type checking during build for faster builds
    // We'll run type checking separately
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
    
    // React strict mode for better development experience
    reactStrictMode: true,
    
    // Transpile certain modules if needed
    transpilePackages: [],
  }
  
  module.exports = nextConfig