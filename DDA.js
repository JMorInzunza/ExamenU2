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
