#!/bin/bash

# Create necessary directories
mkdir -p public/images/textures

# Download texture patterns from alternative sources
curl -L -o public/images/textures/papyrus.png "https://raw.githubusercontent.com/thomaspark/bootswatch/v5/dist/assets/img/papyrus.png"
curl -L -o public/images/textures/sand-grain.png "https://raw.githubusercontent.com/thomaspark/bootswatch/v5/dist/assets/img/sand-grain.png"
curl -L -o public/images/textures/paper.jpg "https://raw.githubusercontent.com/thomaspark/bootswatch/v5/dist/assets/img/paper.jpg"

# Download land image that failed
curl -L -o public/images/land-2.jpg "https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
curl -L -o public/images/land-3.jpg "https://images.pexels.com/photos/2310713/pexels-photo-2310713.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
curl -L -o public/images/indigenous-ceremony.jpg "https://images.pexels.com/photos/6231330/pexels-photo-6231330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"

echo "Additional textures downloaded successfully!" 