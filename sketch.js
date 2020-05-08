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

function APP(x1,y1,x2,y2)
{
	let aux;
	if(x2<x1)
	{
		aux=x2;
		x2=x1; 
		x1=aux;
		aux = y2;
		y2=y1;
		y1=aux;
	}

	let dx = x2-x1, dy = y2-y1
	let m = dy/dx, b = y1-(m * x1);

	point(x1,y1)
	if(x1==x2)
	{
		if(y1>y2)
		{
			aux=y1;
			y1=y2;;
			y2=aux;
		}
		let y = y1 + 1;
		while(y!=y2)
		{
			point(x1,y);
			y++;
		}
	}
	else{
		let x = x1+ 1;
		let y = m * x + b;
		
		while(x!=x2)
		{
			y = m * x + b;
			y = floor(y);
			point(x, y);
			x++;
		}
  }
}
function ADDA(x1, y1, x2, y2) 
{
  let dx=x2-x1;
  let dy=y2-y1;
  let fin;

  if(Math.abs(dx)>Math.abs(dy)) 
  	fin=Math.abs(dx) 
  else fin=Math.abs(dy)

  let xi=dx/fin;
  let yi=dy/fin;
  let x=x1;
  let y= y1;
  
  for(let i=0;i<fin;i++)
  {
    point(x, y)
    x+=xi
    y+=yi
  }
}

function AB(x1, y1, x2, y2) 
{
	let incE, incNE;
	let x, y, p;
	let px, py;
	let dx = x2 - x1;
	let dy = y2 - y1;

	if(dx < 0) 
	{
		dx = -dx;
		px = -1;
	}else px = 1;

	if(dy < 0) {
		dy = -dy;
		py = -1;
	}else py = 1;
	
	x = x1;
	y = y1;
	point(x,y);

	if(dx>dy) 
	{
		p = 2*dy-dx;
		incE = 2*dy;
		incNE = 2 * (dy-dx);
		while(x != x2) 
		{
			x += px;
			if(p < 0) {
				p += incE;
			}else {
				y+=py;
				p+=incNE;
			}
			point(x,y);
		}
	}else
	{
		p = 2 * dx - dy;
		incE = 2*dx;
		incNE = 2 * (dx-dy);
		while(y != y2) 
		{
			y+=py;

			if(p < 0) p += incE
			else 
			{
				x+=px;
				p+=incNE;
			}
			point(x,y);
	}
  }
}
