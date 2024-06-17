const TILES = {
    "moon": "./assets/moonsurface.png",
    "scaffold": "./assets/scaffold.png"
}


const WORLD = [
    {
        id: 0,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 20, y: 0, width: 2, height: 2, moveable: true, gravity: true,
                tiles: [
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 0,
            down: 24,
            left: 23,
            right: 1,
        }
    },
    {
        id: 1,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 0,
            right: 2,
        }
    },
    {
        id: 2,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 1,
            right: 3,
        }
    },
    {
        id: 3,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 2,
            right: 4,
        }
    },
    {
        id: 4,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 3,
            right: 5,
        }
    },
    {
        id: 5,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 4,
            right: 6,
        }
    },
    {
        id: 6,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 5,
            right: 7,
        }
    },
    {
        id: 7,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 6,
            right: 8,
        }
    },
    {
        id: 8,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 7,
            right: 9,
        }
    },
    {
        id: 9,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 8,
            right: 10,
        }
    },
    {
        id: 10,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 9,
            right: 11,
        }
    },
    {
        id: 11,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 10,
            right: 12,
        }
    },
    {
        id: 12,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 11,
            right: 13,
        }
    },
    {
        id: 13,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 12,
            right: 14,
        }
    },
    {
        id: 14,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 13,
            right: 15,
        }
    },
    {
        id: 15,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 14,
            right: 16,
        }
    },
    {
        id: 16,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 15,
            right: 17,
        }
    },
    {
        id: 17,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 16,
            right: 18,
        }
    },
    {
        id: 18,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 17,
            right: 19,
        }
    },
    {
        id: 19,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 18,
            right: 20,
        }
    },
    {
        id: 20,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 19,
            right: 21,
        }
    },
    {
        id: 21,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 20,
            right: 22,
        }
    },
    {
        id: 22,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 21,
            right: 23,
        }
    },
    {
        id: 23,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 22,
            right: 0,
        }
    },

    {
        id: 24,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 0,
            down: 36,
            left: 35,
            right: 25,
        }
    },
    {
        id: 25,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 24,
            right: 26,
        }
    },
    {
        id: 26,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 25,
            right: 27,
        }
    },
    {
        id: 27,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 26,
            right: 28,
        }
    },
    {
        id: 28,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 27,
            right: 29,
        }
    },
    {
        id: 29,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 28,
            right: 30,
        }
    },
    {
        id: 30,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 29,
            right: 31,
        }
    },
    {
        id: 31,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 30,
            right: 32,
        }
    },
    {
        id: 32,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 31,
            right: 33,
        }
    },
    {
        id: 33,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 32,
            right: 34,
        }
    },
    {
        id: 34,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 33,
            right: 35,
        }
    },
    {
        id: 35,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 34,
            right: 24,
        }
    },

    {
        id: 36,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 24,
            down: 42,
            left: 41,
            right: 37,
        }
    },
    {
        id: 37,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 36,
            right: 38,
        }
    },
    {
        id: 38,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 37,
            right: 39,
        }
    },
    {
        id: 39,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 38,
            right: 40,
        }
    },
    {
        id: 40,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 39,
            right: 41,
        }
    },
    {
        id: 41,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },
            {
                type: "block", x: 17, y: 17, width: 15, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], 
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"]
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 40,
            right: 36,
        }
    },

    {
        id: 42,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 32, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"],  
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], 
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 44,
            right: 43,
        }
    },
    {
        id: 43,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 32, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"],  
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], 
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 42,
            right: 44,
        }
    },
    {
        id: 44,
        objects: [
            {
                type: "block", x: 0, y: 17, width: 32, height: 2, moveable: false, gravity: false,
                tiles: [
                    TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"], TILES["moon"],  
                    TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], TILES["scaffold"], 
                ]
            },

        ],
        connections: {
            up: 0,
            down: 0,
            left: 43,
            right: 42,
        }
    },

    
];


