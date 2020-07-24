const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball, ball2, ball3, ball4;

function setup(){
    var canvas = createCanvas(400,400);

    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);

    var ball_options = {
        restitution: 1
    }

    ball = Bodies.circle(50, 200, 10, ball_options);
    World.add(world, ball);

    var ball2_options = {
        restitution: 0.6
    }

    ball2 = Bodies.circle(100, 150, 10, ball2_options);
    World.add(world, ball2);

    var ball3_options = {
        restitution: 0.9
    }

    ball3 = Bodies.circle(150, 230, 10, ball3_options);
    World.add(world, ball3);

    var ball4_options = {
        restitution: 0.5
    }

    ball4 = Bodies.circle(160, 300, 10, ball4_options);
    World.add(world, ball4);
}

function draw(){
    background(0);

    Engine.update(engine);

    fill("brown");

    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    fill("red");
    circle(ball.position.x, ball.position.y, 20);

    fill("green");
    circle(ball2.position.x, ball2.position.y, 20);

    fill("blue");
    circle(ball3.position.x, ball3.position.y, 20);

    fill("yellow");
    circle(ball4.position.x, ball4.position.y, 20);
}