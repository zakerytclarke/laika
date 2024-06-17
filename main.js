let ROOM = 0; // Index of the current room

let Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    engine, world, box, objects = [];

let keyState = {};  // Tracks the state of the arrow keys

function setup() {
    createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;
    engine.world.gravity.y = 3;  // Set gravity strength (default is 1)

    // Create player character as a box
    box = Bodies.rectangle(50, 50, 40, 40, { frictionAir: 0.05 });
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
            density: obj.gravity ? 0.001 : 0 // Apply gravity if needed
        };
        let newObj = Bodies.rectangle(obj.x, obj.y, obj.width, obj.height, options);
        objects.push(newObj); // Store the created bodies for rendering
        World.add(world, newObj);
    });
}

function draw() {
    background(0);
    Engine.update(engine);

    // Apply continuous movement based on key state
    let movementForce = 0.005;
    if (keyState[RIGHT_ARROW]) {
        Body.applyForce(box, box.position, { x: movementForce, y: 0 });
    }
    if (keyState[LEFT_ARROW]) {
        Body.applyForce(box, box.position, { x: -movementForce, y: 0 });
    }

    displayObjects(); // Display the player character and other objects

    checkRoomChange(); // Check if room needs to be changed based on boundary conditions
}

function checkRoomChange() {
    let changed = false;
    if (box.position.x < 0) {
        box.position.x = width;
        changeRoom('left');
        changed = true;
    } else if (box.position.x > width) {
        box.position.x = 0;
        changeRoom('right');
        changed = true;
    }
    if (box.position.y < 0) {
        box.position.y = height;
        changeRoom('up');
        changed = true;
    } else if (box.position.y > height) {
        box.position.y = 0;
        changeRoom('down');
        changed = true;
    }

    if (changed) {
        loadRoomObjects(); // Reload room objects if room changed
    }
}

function changeRoom(direction) {
    let newRoom = WORLD[ROOM].connections[direction];
    if (newRoom !== undefined && newRoom !== 0) {
        ROOM = newRoom;
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
        Body.applyForce(box, { x: box.position.x, y: box.position.y }, { x: 0, y: -0.1 });
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
    rect(0, 0, body.bounds.max.x - body.bounds.min.x, body.bounds.max.y - body.bounds.min.y);
    pop();
}
