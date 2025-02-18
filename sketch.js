let ball, floor;
let speed = 0;
let maxSpeed = 3;
let acceleration = 2;
let sprintmulti = 2;
let isJumping = false;
let coin
let score
let tileSize = 32;
let map, ground, brick, wall;

function preload(){
    bg=loadImage('background 2.jpg')
    groundImg = loadImage('ground.png');
    brickImg = loadImage('brick.png');
    coinImg = loadImage('coin.png')
    playerImg = loadImage('player2.png')
}

function setup(){
    new Canvas(windowWidth,1000);
    displayMode('centered');
    world.gravity.y = 10;

    ball = new Sprite(16,1000);
    ball.friction = 0;
    ball.rotationLock = false;
    ball.w = 30;
    ball.h = 34;
    ball.spriteSheet = playerImg
    ball.addAnis({
        spin: { row: 0, frames: 4, frameDelay:5 }, 
        idle: { row: 1, frame: 1,}
      });
      ball.scale = 1;
      ball.debug = true;

    ground = new Group();
    ground.collider = 's';
    ground.tile = '=';
    ground.image = groundImg;
    ground.w = tileSize;
    ground.h = tileSize;

  
    wall = new Group();
    wall.collider = 's';
    wall.tile = 'w';
    wall.w = tileSize;
    wall.h = tileSize;

    brick = new Group();
    brick.collider = 's';   
    brick.tile = 'b';
    brick.image = brickImg;
    brick.w = tileSize;
    brick.h = tileSize;

    coin = new Group();
    coin.w = 16;
    coin.h = 15;
    coin.spriteSheet = coinImg;
    coin.addAnis({
      spin: { row: 0, frames: 4, frameDelay:5 }
    });
    coin.tile = "l";
    coin.collider = 'static';
    coin.scale = 4;

    ``

    new Tiles(
        [
            '......................................................................................................................................................................................................................................................................................',
            '......................................................................................................................................................................................................................................................................................',
            '......................................................................................................................................................................................................................................................................................',
            '......................................................................................................................................................................................................................................................................................',
            '......................................................................................................................................................................................................................................................................................',
            '......................................................................................................................................................................................................................................................................................',
            '......................................................................................................................................................................................................................................................................................',
            '......................................................................................................................................................................................................................................................................................',
            '......................................................................................................................................................................................................................................................................................',
            '......................................................................................................................................................................................................................................................................................',
            '......................................................................................................................................................................................................................................................................................', '......................................................................................................................................................................................................................................................................................',
            '......................................................................................................................................................................................................................................................................................',
            '......................................................................................................................................................................................................................................................................................',
            '......................................................................................................................................................................................................................................................................................',
            '......................................................................................................................................................................................................................................................................................',
            '......................................................................................................................................................................................................................................................................................',
            '......................................................................................................................................................................................................................................................................................',
            '......................................................................................................................................................................................................................................................................................',
            '......................................................................................................................................................................................................................................................................................',
            '......................................................................................................................................................................................................................................................................................',
            '......................................................................................................................................................................................................................................................................................',
            '......................................................................................................................................................................................................................................................................................',
            '......................................................................................................................................................................................................................................................................................',
            '......................................................................................................................................................................................................................................................................................',
            '......................................................................................................................................................................................................................................................................................',
            '......................................................................................................................................................................................................................................................................................',
            '......................................................................................................................................................................................................................................................................................',
            '............................................................=.........................................................................................................................................................................................................................',
            '..l...................................................................................................................................................................................................................................................................................',
            '......................................................................................................................................................................................................................................................................................',
            '.........................................................=............................................................................................................................................................................................................................',
            '............=..........................................=.............................................................................................................................................................................................................................',
            '............b.........................................................................................................................................................................................................................................................................',
            '....===.....b...............................l........=................................................................................................................................................................................................................................',
            '.......=....b.........................................................................................................................................................................................................................................................................',
            '............b...................................===...................................................................................................................................................................................................................................',
            '............b....................=.................................==.................................................................................................................................................................................................................',
            '............b............=......=b........=...........................................................................................................................................................................................................................................',
            '............b.........=..b......bb...=................................................................................................................................................................................................................................................',
            '............b.........b..b......bb...b................................................................................................................................................................................................................................................',
            '==============........b..b......bb...b...............................================================================================================================================================================================================================================',
        ],
        0,
        16,
        tileSize,
        tileSize - 1
      );
    }

function draw(){
    clear()
     background(bg);
    textSize(100)
    fill('white')
    //text("please money", 200,200)

    if (ball.x < 200) {
        camera.x = 200;
      } else {
        camera.x = ball.x;
      }
      if (ball.y < 200) {
        camera.y = 200;
      } else {
        camera.y = ball.y-100;
      }
  
      camera.on();
      camera.off();

    if (kb.pressing('up') && !isJumping){
        ball.vel.y = -7;
        isJumping = true;
        ball.changeAni('spin');

 
        if (kb.pressing('left')){
            ball.vel.x = -maxSpeed;
            ball.mirror.x = false;
            ball.changeAni('spin');
        }
        else if (kb.pressing('right')){
            ball.vel.x = maxSpeed;
            ball.mirror.x = true;
        }
    }


    if (kb.pressing('down') && isJumping){
        ball.vel.y += 4; 
        ball.changeAni('idle');
    }

    if(ball.collides(ground)){
        isJumping = false;
        ball.vel.y = 0; 
        ball.vel.x = 0; 
        ball.friction = 1;
    } else {
        ball.friction = 0;
    }

    if(ball.collides(brick)){
        isJumping = false;
        ball.vel.y = 0; 
        ball.vel.x = 0; 
        ball.friction = 1;
    } else {
        ball.friction = 0;
    }

if(ball.collides(coin)){
    coin.remove();
}


    if (ball.y > 1500) {
        ball.x = 16;
        ball.y = 16;
        ball.vel.x = 0;
        ball.vel.y = 0;
        isJumping = false;
    }

}
