const DEBUG = true;
const NUMBER_COLUMNS = 32;
const NUMBER_ROWS = 18;

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

function preload() {
    // const imageUrls = WORLD.flatMap(room => 
    //     room.objects.filter(object => object.image).map(object => object.image)
    // )+Object.values(TILES);

    const imageUrls = Object.values(TILES);

    for (var i in imageUrls) {
        var imageUrl = imageUrls[i];
        ASSETS[imageUrl] = loadImage(imageUrl);
    }

    ASSETS['./assets/player.png'] = loadImage('./assets/player.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;
    engine.world.gravity.y = 2.5;  // Set gravity strength (default is 1)

    // Create player character as a box
    box = Bodies.rectangle(50, 50, (windowWidth / NUMBER_COLUMNS), (windowHeight / NUMBER_ROWS), { frictionAir: 0.05 });
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
            density: obj.gravity ? 0.001 : 0,
            frictionAir: 0.05,
            collisionFilter: {
                category: 0x0002,
                mask: obj.type === "block" ? 0xFFFFFFFF : 0 // Collide with all if 'block', none if 'asset'
            }
        };
        // Every additional block in a direction add 0.5
        let x = (((obj.x + 0.5*(obj.width)+0.5) * (windowWidth / NUMBER_COLUMNS)) - (windowWidth / NUMBER_COLUMNS / 2));
        let y = ((obj.y + 0.5*(obj.height)) * (windowHeight / NUMBER_ROWS));




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
    background(0);
    text(ROOM, 50, 50);
    Engine.update(engine);

    // Apply continuous movement based on key state
    let movementForce = 0.025;
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
        const newRoom = WORLD[ROOM].connections[changed];
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
        Body.applyForce(box, { x: box.position.x, y: box.position.y }, { x: 0, y: -0.55 });
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
