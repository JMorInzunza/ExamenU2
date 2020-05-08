
var ax, ay;
var x, y;
var wi, hi;
var trozos, repartir, resultado;

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  wi=windowWidth/2;
  hi=windowHeight/2;
}

function draw() 
{   
  ellipseMode(CENTER);
  fill(225,125,120);
  ellipse(400,200,300,300)
  ellipse(wi, 200, 300, 300)
  ellipse(windowWidth-400,200,300,300)
  noLoop();
}

function divide()
{
  slice = parseInt(document.getElementById("slice").value);

  if(slice>1)
  {   
    let radio=150, grados=360/slice, aux=grados;
	let xp1 = 400, xp2 = wi, xp3 = windowWidth-400, yp = 200
	draw()

    while(grados<=360){
      let x2=radio*Math.cos(grados* Math.PI / 180);
      let y2=radio*Math.sin(grados * Math.PI / 180);
	  let x2p1=xp1+x2;
	  let x2p2 = xp2 + x2
	  let x2p3 = xp3 + x2;
	  y2=yp+y2;
	  
	  x2p1=floor(x2p1);
	  x2p2=floor(x2p2);
	  x2p3 = floor(x2p3);
	  y2=floor(y2);

	  APP(xp1,yp,x2p1,y2);
	  APP(xp1,yp,x2p1,y2);
	  APP(xp1,yp,x2p1,y2);
	  ADDA(xp2,yp,x2p2,y2);
	  AB(xp3,yp,x2p3,y2);
        
      grados+=aux;
    } 
  }else draw();
}

