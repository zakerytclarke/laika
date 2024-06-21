const TILES = {
    "debug": "./assets/player.png",
    "moon": "./assets/moonsurface.png",
    "scaffold": "./assets/scaffold.png",
}

const WORLD = [
    {
        id: 0,
        objects:[],
        connections: {
            up: 0,
            down: 24,
            left: 23,
            right: 1,
        }
    },
    {
        id: 1,
        objects:[],
        connections: {
            up: 0,
            down: 0,
            left: 0,
            right: 2,
        }
    },
    {
        id: 2,
        objects:[],
        connections: {
            up: 0,
            down: 26,
            left: 1,
            right: 3,
        }
    },
    {
        id: 3,
        objects:[],
        connections: {
            up: 0,
            down: 0,
            left: 2,
            right: 4,
        }
    },
    {
        id: 4,
        objects:[],
        connections: {
            up: 0,
            down: 26,
            left: 3,
            right: 5,
        }
    },
    {
        id: 5,
        objects:[],
        connections: {
            up: 0,
            down: 0,
            left: 4,
            right: 6,
        }
    },
    {
        id: 6,
        objects:[],
        connections: {
            up: 0,
            down: 27,
            left: 5,
            right: 7,
        }
    },
    {
        id: 7,
        objects:[],
        connections: {
            up: 0,
            down: 0,
            left: 6,
            right: 8,
        }
    },
    {
        id: 8,
        objects:[],
        connections: {
            up: 0,
            down: 28,
            left: 7,
            right: 9,
        }
    },
    {
        id: 9,
        objects:[],
        connections: {
            up: 0,
            down: 0,
            left: 8,
            right: 10,
        }
    },
    {
        id: 10,
        objects:[],
        connections: {
            up: 0,
            down: 29,
            left: 9,
            right: 11,
        }
    },
    {
        id: 11,
        objects:[],
        connections: {
            up: 0,
            down: 0,
            left: 10,
            right: 12,
        }
    },
    {
        id: 12,
        objects:[],
        connections: {
            up: 0,
            down: 30,
            left: 11,
            right: 13,
        }
    },
    {
        id: 13,
        objects:[],
        connections: {
            up: 0,
            down: 0,
            left: 12,
            right: 14,
        }
    },
    {
        id: 14,
        objects:[],
        connections: {
            up: 0,
            down: 31,
            left: 13,
            right: 15,
        }
    },
    {
        id: 15,
        objects:[],
        connections: {
            up: 0,
            down: 0,
            left: 14,
            right: 16,
        }
    },
    {
        id: 16,
        objects:[],
        connections: {
            up: 0,
            down: 32,
            left: 15,
            right: 17,
        }
    },
    {
        id: 17,
        objects:[],
        connections: {
            up: 0,
            down: 0,
            left: 16,
            right: 18,
        }
    },
    {
        id: 18,
        objects:[],
        connections: {
            up: 0,
            down: 33,
            left: 17,
            right: 19,
        }
    },
    {
        id: 19,
        objects:[],
        connections: {
            up: 0,
            down: 0,
            left: 18,
            right: 20,
        }
    },
    {
        id: 20,
        objects:[],
        connections: {
            up: 0,
            down: 34,
            left: 19,
            right: 21,
        }
    },
    {
        id: 21,
        objects:[],
        connections: {
            up: 0,
            down: 0,
            left: 20,
            right: 22,
        }
    },
    {
        id: 22,
        objects:[],
        connections: {
            up: 0,
            down: 35,
            left: 21,
            right: 23,
        }
    },
    {
        id: 23,
        objects:[],
        connections: {
            up: 0,
            down: 0,
            left: 22,
            right: 0,
        }
    },

    {
        id: 24,
        objects:[],
        connections: {
            up: 0,
            down: 36,
            left: 35,
            right: 25,
        }
    },
    {
        id: 25,
        objects:[],
        connections: {
            up: 2,
            down: 0,
            left: 24,
            right: 26,
        }
    },
    {
        id: 26,
        objects:[],
        connections: {
            up: 4,
            down: 37,
            left: 25,
            right: 27,
        }
    },
    {
        id: 27,
        objects:[],
        connections: {
            up: 6,
            down: 0,
            left: 26,
            right: 28,
        }
    },
    {
        id: 28,
        objects:[],
        connections: {
            up: 8,
            down: 38,
            left: 27,
            right: 29,
        }
    },
    {
        id: 29,
        objects:[],
        connections: {
            up: 10,
            down: 0,
            left: 28,
            right: 30,
        }
    },
    {
        id: 30,
        objects:[],
        connections: {
            up: 12,
            down: 39,
            left: 29,
            right: 31,
        }
    },
    {
        id: 31,
        objects:[],
        connections: {
            up: 14,
            down: 0,
            left: 30,
            right: 32,
        }
    },
    {
        id: 32,
        objects:[],
        connections: {
            up: 16,
            down: 40,
            left: 31,
            right: 33,
        }
    },
    {
        id: 33,
        objects:[],
        connections: {
            up: 18,
            down: 0,
            left: 32,
            right: 34,
        }
    },
    {
        id: 34,
        objects:[],
        connections: {
            up: 20,
            down: 41,
            left: 33,
            right: 35,
        }
    },
    {
        id: 35,
        objects:[],
        connections: {
            up: 22,
            down: 0,
            left: 34,
            right: 24,
        }
    },

    {
        id: 36,
        objects:[],
        connections: {
            up: 24,
            down: 42,
            left: 41,
            right: 37,
        }
    },
    {
        id: 37,
        objects:[],
        connections: {
            up: 26,
            down: 0,
            left: 36,
            right: 38,
        }
    },
    {
        id: 38,
        objects:[],
        connections: {
            up: 28,
            down: 43,
            left: 37,
            right: 39,
        }
    },
    {
        id: 39,
        objects:[],
        connections: {
            up: 30,
            down: 0,
            left: 38,
            right: 40,
        }
    },
    {
        id: 40,
        objects:[],
        connections: {
            up: 32,
            down: 44,
            left: 39,
            right: 41,
        }
    },
    {
        id: 41,
        objects:[],
        connections: {
            up: 34,
            down: 0,
            left: 40,
            right: 36,
        }
    },

    {
        id: 42,
        objects:[],
        connections: {
            up: 36,
            down: 0,
            left: 44,
            right: 43,
        }
    },
    {
        id: 43,
        objects:[],
        connections: {
            up: 38,
            down: 0,
            left: 42,
            right: 44,
        }
    },
    {
        id: 44,
        objects:[],
        connections: {
            up: 40,
            down: 0,
            left: 43,
            right: 42,
        }
    },  
];


