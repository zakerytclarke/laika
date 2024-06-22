let img;
let outputDiameter = 400;

function preload() {
    img = loadImage('https://zclarke.dev/laika/maps/map.png'); // Replace with your image URL
}

function setup() {
    createCanvas(outputDiameter, outputDiameter);
    loadImageToCircle(img, outputDiameter);
}

function loadImageToCircle(img, diameter) {
    let radius = diameter / 2;
    let centerX = radius;
    let centerY = radius;

    loadPixels();
    img.loadPixels();
    for (let y = 0; y < diameter; y++) {
        for (let x = 0; x < diameter; x++) {
            let dx = x - centerX;
            let dy = y - centerY;
            let distance = sqrt(dx * dx + dy * dy);

            if (distance <= radius) {
                let angle = atan2(dy, dx);
                // Map the angle to the image width
                let srcX = constrain(round((angle + PI) / TWO_PI * img.width), 0, img.width - 1);
                
                // Map the distance to the image height, inverted
                let srcY = constrain(round(map(distance, 0, radius, img.height, 0)), 0, img.height - 1);

                let index = (srcY * img.width + srcX) * 4;
                let r = img.pixels[index];
                let g = img.pixels[index + 1];
                let b = img.pixels[index + 2];
                let a = img.pixels[index + 3];

                let destIndex = (y * diameter + x) * 4;
                pixels[destIndex] = r;
                pixels[destIndex + 1] = g;
                pixels[destIndex + 2] = b;
                pixels[destIndex + 3] = a;
            }
        }
    }

    updatePixels();
}

function draw() {
    // No animation needed
}
