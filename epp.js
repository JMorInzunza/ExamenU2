
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
