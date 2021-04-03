//Create variables here
var dog,foodS,foodStock,happyDog,database;

function preload()
{
	//load images here
  dogimg = loadImage("images/dogImg.png");
  dogHappy = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250,50,50);
  dog.addImage(dogimg);
  dog.scale = 0.2;
  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}

  drawSprites();
  //add styles here

}

function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x=-1;
  }
  
  database.ref('/').update({
    Food:x
  })
}
