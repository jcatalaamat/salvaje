#!/bin/bash

# Create directory for textures if it doesn't exist
mkdir -p public/images/textures

# Download a simple texture generator script
cat > generate_texture.js << 'EOL'
const { createCanvas } = require('canvas');
const fs = require('fs');

function createTexture(filename, pattern = 'dots', color = '#D2B48C') {
  const width = 400;
  const height = 400;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // Fill background
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, width, height);
  
  ctx.fillStyle = color;
  
  if (pattern === 'dots') {
    // Draw dots
    for (let x = 0; x < width; x += 20) {
      for (let y = 0; y < height; y += 20) {
        ctx.beginPath();
        ctx.arc(x, y, 1, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  } else if (pattern === 'lines') {
    // Draw lines
    for (let y = 0; y < height; y += 10) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = color;
      ctx.stroke();
    }
  } else if (pattern === 'grid') {
    // Draw grid
    for (let x = 0; x < width; x += 20) {
      for (let y = 0; y < height; y += 20) {
        ctx.beginPath();
        ctx.rect(x, y, 10, 10);
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = color;
        ctx.stroke();
      }
    }
  } else if (pattern === 'noise') {
    // Draw noise
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;
    
    for (let i = 0; i < data.length; i += 4) {
      const value = Math.floor(Math.random() * 50);
      data[i] = value;     // red
      data[i + 1] = value; // green
      data[i + 2] = value; // blue
      data[i + 3] = 20;    // alpha (transparency)
    }
    
    ctx.putImageData(imageData, 0, 0);
  }
  
  // Save to file
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(filename, buffer);
  console.log(`Texture ${filename} created successfully!`);
}

// Generate textures
const textures = [
  { filename: 'public/images/textures/papyrus.png', pattern: 'lines', color: '#B8997A' },
  { filename: 'public/images/textures/sand-grain.png', pattern: 'dots', color: '#D2B48C' },
  { filename: 'public/images/textures/paper.jpg', pattern: 'noise', color: '#F5F5DC' }
];

textures.forEach(texture => {
  createTexture(texture.filename, texture.pattern, texture.color);
});
EOL

# Try to install canvas if needed
npm install canvas

# Run the texture generator
node generate_texture.js

echo "Custom textures created successfully!" 