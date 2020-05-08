
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