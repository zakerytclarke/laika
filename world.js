const WORLD = [
    {
        id:0,
        objects: [
            { type: "block", x: 100, y: 300, width: 1000, height: 20, moveable: false, gravity: false },
            { type: "block", x: 200, y: 500, width: 100, height: 20, moveable: false, gravity: false },
            { type: "block", x: 600, y: 0, width: 50, height: 50, moveable: true, gravity: true }, 
            { type: "block", x: 700, y: 0, width: 50, height: 50, moveable: true, gravity: true }, 
            { type: "block", x: 800, y: 0, width: 50, height: 50, moveable: true, gravity: true },
            { type: "block", x: 600, y: 500, width: 100, height: 20, moveable: false, gravity: false },
            { type: "block", x: 300, y: 700, width: 100, height: 20, moveable: false, gravity: false },
            { type: "block", x: 800, y: 500, width: 100, height: 20, moveable: false, gravity: false },
            { type: "block", x: 400, y: 600, width: 100, height: 20, moveable: false, gravity: false },
            { type: "block", x: 300, y: 800, width: 1000, height: 20, moveable: false, gravity: false },
        ],
        connections:{
            up:0,
            down:0,
            left:1,
            right:0,
        }
    },
    {
        id:1,
        objects: [
            { type: "block", x: 100, y: 300, width: 1000, height: 20, moveable: false, gravity: false },
            
            { type: "block", x: 500, y: 800, width: 3000, height: 20, moveable: false, gravity: false },
        ],
        connections:{
            up:1,
            down:1,
            left:1,
            right:0,
        }
    },

    
];
