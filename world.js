const WORLD = [
    {
        id:0,
        objects: [
            { type: "block", x: 100, y: 300, width: 1000, height: 20, moveable: false, gravity: false, image:"./assets/platform.png"  },
            { type: "asset", x: 200, y: 500, width: 100, height: 100, moveable: false, gravity: false, image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.png"},
            { type: "block", x: 600, y: 0, width: 50, height: 50, moveable: true, gravity: true, image:"https://media.istockphoto.com/id/1249611748/vector/rocket-space-ship-launch.jpg?s=612x612&w=0&k=20&c=DMZ7gUIzBd34YjINjw_PKoLnos6Iq3VCqK3OYA-Uzsc="}, 
            { type: "block", x: 700, y: 0, width: 50, height: 50, moveable: true, gravity: true, image:"https://media.istockphoto.com/id/1249611748/vector/rocket-space-ship-launch.jpg?s=612x612&w=0&k=20&c=DMZ7gUIzBd34YjINjw_PKoLnos6Iq3VCqK3OYA-Uzsc=" }, 
            { type: "block", x: 800, y: 0, width: 50, height: 50, moveable: true, gravity: true },
            { type: "block", x: 600, y: 500, width: 100, height: 20, moveable: false, gravity: false, image:"./assets/platform.png"  },
            { type: "block", x: 300, y: 700, width: 100, height: 20, moveable: false, gravity: false, image:"./assets/platform.png"  },
            { type: "block", x: 800, y: 500, width: 100, height: 20, moveable: false, gravity: false, image:"./assets/platform.png"  },
            { type: "block", x: 400, y: 600, width: 100, height: 20, moveable: false, gravity: false, image:"./assets/platform.png" },
            { type: "block", x: 300, y: 800, width: 1000, height: 20, moveable: false, gravity: false, image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Solarsystemscope_texture_8k_moon.jpg/1600px-Solarsystemscope_texture_8k_moon.jpg?20201026210157"},
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
            { type: "block", x: 100, y: 300, width: 1000, height: 20, moveable: false, gravity: false, image:"./assets/platform.png"  },
            
            { type: "block", x: 500, y: 800, width: 3000, height: 20, moveable: false, gravity: false, image:"./assets/platform.png"   },
        ],
        connections:{
            up:2,
            down:1,
            left:1,
            right:0,
        }
    },
    {
        id:2,
        objects: [
            { type: "block", x: 100, y: 300, width: 1000, height: 20, moveable: false, gravity: false, image:"./assets/platform.png"  },
        ],
        connections:{
            up:2,
            down:1,
            left:2,
            right:2,
        }
    },


    
];


