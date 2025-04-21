#!/bin/bash

# Create necessary directories
mkdir -p public/images/textures public/videos

# Download texture backgrounds
curl -L -o public/images/texture-bg.jpg "https://images.pexels.com/photos/3616764/pexels-photo-3616764.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"

# Download texture patterns
curl -L -o public/images/textures/handmade-paper.png "https://www.transparenttextures.com/patterns/handmade-paper.png"
curl -L -o public/images/textures/papyrus.png "https://www.transparenttextures.com/patterns/papyrus.png"
curl -L -o public/images/textures/sand-grain.png "https://www.transparenttextures.com/patterns/sand-grain.png"
curl -L -o public/images/textures/paper.jpg "https://www.transparenttextures.com/patterns/paper.jpg"

# Download land images
curl -L -o public/images/land-texture.jpg "https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
curl -L -o public/images/map-overlay.jpg "https://images.pexels.com/photos/4394349/pexels-photo-4394349.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
curl -L -o public/images/land-1.jpg "https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
curl -L -o public/images/land-2.jpg "https://images.pexels.com/photos/2449600/pexels-photo-2449600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
curl -L -o public/images/land-3.jpg "https://images.pexels.com/photos/533800/pexels-photo-533800.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
curl -L -o public/images/land-4.jpg "https://images.pexels.com/photos/7285464/pexels-photo-7285464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"

# Download the indigenous ceremony image
curl -L -o public/images/indigenous-ceremony.jpg "https://images.pexels.com/photos/5807873/pexels-photo-5807873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"

# Download a demo video
curl -L -o public/videos/gentle-nature.mp4 "https://download.samplelib.com/mp4/sample-5s.mp4"

echo "All assets downloaded successfully!" 