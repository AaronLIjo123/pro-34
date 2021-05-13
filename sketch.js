const Engine = Matter.Engine;
const World = Matter.World; 
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var engine, world;
var sling, pendulum


function setup(){
    var canvas = createCanvas(windowWidth/2, windowWidth/1.5);
    engine = Engine.create(); 
    world = engine.world; 
 
    let canvasmouse = Mouse.create(canvas.elt)
    canvasmouse.pixelRatio = pixelDensity();
    let options = {
        mouse: canvasmouse
    };
    mConstraint = MouseConstraint.create(engine, options);
    World.add(world, mConstraint);

    bob1 = new Pendulum(340,450,"red");
    bob2 = new Pendulum(400,450,"red");
    bob3 = new Pendulum(460,450,"red");
    bob4 = new Pendulum(520,450,"red");
    bob5 = new Pendulum(580,450,"red");

    sling1 = new Sling(bob1.body,{x:340,y:200})
    sling2 = new Sling(bob2.body,{x:400,y:200})
    sling3 = new Sling(bob3.body,{x:460,y:200})
    sling4 = new Sling(bob4.body,{x:520,y:200})
    sling5 = new Sling(bob5.body,{x:580,y:200})

}

function draw(){
    
    background(0)

    Engine.update(engine);

    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();

    sling1.display();
    sling2.display();
    sling3.display();
    sling4.display();
    sling5.display();
}

function mouseDragged() {
    Matter.Body.setPosition(bob1.body,{ x:mouseX, y: mouseY});
}