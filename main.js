const DEBUG = false;
const NUMBER_COLUMNS = 32;
const NUMBER_ROWS = 18;
let SETUP = false;
let LOADED = false;


let HORIZONTAL_FORCE_MULTIPLIER = 1;
let VERTICAL_FORCE_MULTIPLIER = 1;

let ROOM = 0; // Index of the current room

let Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    engine, world, box, objects = [];

let keyState = {};  // Tracks the state of the arrow keys

let ASSETS = {};

function drawGrid() {
    strokeWeight(1); // Set line thickness
    stroke("red");

    // Draw vertical lines for each column
    for (let i = 0; i <= NUMBER_COLUMNS; i++) {
        const x = i * (windowWidth / NUMBER_COLUMNS);
        line(x, 0, x, height);
    }

    // Draw horizontal lines for each row
    for (let i = 0; i <= NUMBER_ROWS; i++) {
        const y = i * (windowHeight / NUMBER_ROWS);
        line(0, y, width, y);
    }
}

async function readPixelsFromPNG(imageUrl) {
    const img = new Image();
    img.src = imageUrl;

    try {
        await img.decode(); // Wait for image decoding

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        // Create 2D array to store hex codes
        const pixelGrid = new Array(canvas.height).fill(null).map(() => new Array(canvas.width));

        for (let y = 0; y < canvas.height; y++) {
            for (let x = 0; x < canvas.width; x++) {
                const i = (y * canvas.width + x) * 4; // Calculate index in flat array

                // Get individual RGBA values
                const red = data[i];
                const green = data[i + 1];
                const blue = data[i + 2];

                // Convert RGB values to hex string (ensure two digit format)
                const hex = "#" + (red.toString(16).padStart(2, "0")) + (green.toString(16).padStart(2, "0")) + (blue.toString(16).padStart(2, "0"));

                pixelGrid[y][x] = hex;
            }
        }
        return pixelGrid;
    } catch (error) {
        throw error; // Re-throw the error for handling
    }
}



const COLOR_TO_OBJECT = {
    // "#f69988":null
    "#b4b4b4": TILES["moon"],
    "#464646": TILES["scaffold"]
}


async function loadMap() {
    const pixels = await readPixelsFromPNG("./maps/map.png");

    const ROOM_OBJECTS = [];
    const room_width = 33;
    const room_height = 19;
    for (let y = 0; y < pixels.length; y++) {
        for (let x = 0; x < pixels[y].length; x++) {
            const room_index_x = Math.floor(x / room_width);
            const room_index_y = Math.floor(y / room_height);

            const value = pixels[y][x];

            // Calculate offset from room start
            const offset_x = x % room_width;
            const offset_y = y % room_height;

            const room_index = room_index_y * 24 + room_index_x;
            if(room_index==35){
                console.log(x, y);
            }
            if (value !== "#000000") {
                if (COLOR_TO_OBJECT[value]) {
                    ROOM_OBJECTS[room_index] = (ROOM_OBJECTS[room_index] || []).concat([
                        {
                            type: "block",
                            x: offset_x,
                            y: offset_y,
                            width: 1,
                            height: 1,
                            moveable: false,
                            gravity: false,
                            tiles: [COLOR_TO_OBJECT[value]],
                        }
                    ])

                }
            }
        }
    }

    return ROOM_OBJECTS;
}

let debug_var;

async function preload() {
    let ROOM_OBJECTS = await loadMap();
    debug_var = ROOM_OBJECTS;
    // const imageUrls = WORLD.flatMap(room => 
    //     room.objects.filter(object => object.image).map(object => object.image)
    // )+Object.values(TILES);

    for (var i = 0; i < ROOM_OBJECTS.length; i++) {
        if (ROOM_OBJECTS[i]) {
            WORLD[i].objects = WORLD[i].objects.concat(ROOM_OBJECTS[i]);
        }
    }

    const imageUrls = Object.values(TILES);

    for (var i in imageUrls) {
        var imageUrl = imageUrls[i];
        ASSETS[imageUrl] = loadImage(imageUrl);
    }

    ASSETS['./assets/player.png'] = loadImage('./assets/player.png');
    LOADED = true;
}

async function setup() {
    HORIZONTAL_FORCE_MULTIPLIER = 1;
    VERTICAL_FORCE_MULTIPLIER = 1;


    createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;
    engine.world.gravity.y = 2.5 * VERTICAL_FORCE_MULTIPLIER;  // Set gravity strength (default is 1)

    // Create player character as a box
    box = Bodies.rectangle(50, 50, (windowWidth / NUMBER_COLUMNS), (windowHeight / NUMBER_ROWS), { frictionAir: 0.05 * HORIZONTAL_FORCE_MULTIPLIER });
    box.image = './assets/player.png';
    Matter.Body.setInertia(box, Infinity);
    World.add(world, box);

    loadRoomObjects(); // Load objects for the initial room
}

function loadRoomObjects() {
    objects.forEach(obj => World.remove(world, obj)); // Remove old objects from the world
    objects = []; // Clear the array

    // Create objects from the current room configuration
    WORLD[ROOM].objects.forEach(obj => {
        let options = {
            isStatic: !obj.moveable,
            density: obj.gravity ? 0.001 * HORIZONTAL_FORCE_MULTIPLIER : 0,
            frictionAir: 0.05 * HORIZONTAL_FORCE_MULTIPLIER,
            collisionFilter: {
                category: 0x0002,
                mask: obj.type === "block" ? 0xFFFFFFFF : 0 // Collide with all if 'block', none if 'asset'
            }
        };
        // Every additional block in a direction add 0.5
        let x = (((obj.x + 0.5 * (obj.width) + 0.5) * (windowWidth / NUMBER_COLUMNS)) - (windowWidth / NUMBER_COLUMNS / 2));
        let y = ((obj.y + 0.5 * (obj.height)) * (windowHeight / NUMBER_ROWS));




        let w = (obj.width) * (windowWidth / NUMBER_COLUMNS);
        let h = (obj.height) * (windowHeight / NUMBER_ROWS);

        let newObj = Bodies.rectangle(x, y, w, h, options);
        Matter.Body.setInertia(newObj, Infinity);
        newObj.image = obj.image;
        newObj.tiles = obj.tiles;
        newObj.tileWidth = obj.width;
        newObj.tileHeight = obj.height;
        objects.push(newObj); // Store the created bodies for rendering
        World.add(world, newObj);
    });
}

function draw() {
    if (!LOADED) {
        return;
    }
    if(!SETUP){
        setup();
        SETUP = true;
    }
    background(0);
    text(ROOM, 50, 50);
    Engine.update(engine);

    // Apply continuous movement based on key state
    let movementForce = 0.015;
    if (keyState[RIGHT_ARROW]) {
        Body.applyForce(box, box.position, { x: movementForce, y: 0 });
    }
    if (keyState[LEFT_ARROW]) {
        Body.applyForce(box, box.position, { x: -movementForce, y: 0 });
    }

    displayObjects(); // Display the player character and other objects

    checkRoomChange(); // Check if room needs to be changed based on boundary conditions
    if (DEBUG) {
        drawGrid();
    }
}

function nextRoomIndex(currentIndex, direction) {
    const rows = 5;
    const columns = 24;
    
    let row = Math.floor(currentIndex / columns);
    let col = currentIndex % columns;
    
    if (direction === "up") {
        if (row > 0) {
            return currentIndex - columns;
        }
    } else if (direction === "down") {
        if (row < rows - 1) {
            return currentIndex + columns;
        }
    } else if (direction === "left") {
        return row * columns + (col - 1 + columns) % columns;
    } else if (direction === "right") {
        return row * columns + (col + 1) % columns;
    }
    
    // Return the same index if no valid movement
    return currentIndex;
}
  
  
function checkRoomChange() {
    let changed = false;

    if (box.position.x < 0) {
        Matter.Body.setPosition(box, { x: width, y: box.position.y });
        changed = "left";
    } else if (box.position.x > width) {
        Matter.Body.setPosition(box, { x: 0, y: box.position.y });
        changed = "right";
    }

    if (box.position.y < 0) {
        Matter.Body.setPosition(box, { x: box.position.x, y: height });
        changed = "up";
    } else if (box.position.y > height) {
        Matter.Body.setPosition(box, { x: box.position.x, y: 0 });
        changed = "down";
    }

    if (changed) {
        // const newRoom = WORLD[ROOM].connections[changed];
        const newRoom = nextRoomIndex(ROOM, changed);
        if (newRoom != ROOM) {
            ROOM = newRoom;
            loadRoomObjects();
        }
    }
}

function displayObjects() {
    fill(255);
    drawBody(box);  // Player character
    objects.forEach(drawBody);  // Render stored bodies
    fill(128);
}

function keyPressed() {
    keyState[keyCode] = true;
    if (keyCode === UP_ARROW && onGround()) {
        Body.applyForce(box, { x: box.position.x, y: box.position.y }, { x: 0, y: -0.25 * VERTICAL_FORCE_MULTIPLIER });
    }
}

function keyReleased() {
    keyState[keyCode] = false;
}

function onGround() {
    // Placeholder for ground check logic
    return true;  // Assume the player is on the ground for this example
}

function drawBody(body) {
    push();
    translate(body.position.x, body.position.y);
    rotate(body.angle);
    rectMode(CENTER);
    imageMode(CENTER);

    if (body.image && ASSETS[body.image]) {
        image(ASSETS[body.image], 0, 0, body.bounds.max.x - body.bounds.min.x, body.bounds.max.y - body.bounds.min.y);
    } else {
        // rect(0, 0, body.bounds.max.x - body.bounds.min.x, body.bounds.max.y - body.bounds.min.y);
    }

    // Draw tiles
    if (body.tiles) {
        for (let i = 0; i < body.tileWidth; i++) {
            for (let j = 0; j < body.tileHeight; j++) {
                let idx = j * body.tileWidth + i;
                let tileX = (i - body.tileWidth / 2 + 0.5) * (windowWidth / NUMBER_COLUMNS);
                let tileY = (j - body.tileHeight / 2 + 0.5) * (windowHeight / NUMBER_ROWS);
                image(ASSETS[body.tiles[idx]], tileX, tileY, windowWidth / NUMBER_COLUMNS, windowHeight / NUMBER_ROWS);
            }
        }
    }

    pop();
}
