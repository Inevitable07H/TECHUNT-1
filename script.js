var rows=3;
var cols=3;

var cb;//cb=current box;
var rb;//rb=rest box;

window.onload=function()
{
    for(let r=0;r<rows;r++)
    {
        for(let c=0;c<cols;c++)
        {
            let box=document.createElement("img");
            box.src="./blank.png";

            box.addEventListener("dragstart",dragStart);
            box.addEventListener("dragover",dragOver);
            box.addEventListener("dragenter",dragEnter);
            box.addEventListener("dragleave",dragLeave);
            box.addEventListener("drop",dragDrop);
            box.addEventListener("dragend",dragEnd);

            document.getElementById("board").append(box);
        }
    }

    let pieces=[];
    for(let i=1;i<=rows*cols;i++)
    {
        pieces.push(i.toString());
    }
	
    for(let i=0;i<pieces.length;i++)
    {
	  let box=document.createElement("img");
	  box.src="./pimages/" + pieces[i] + ".png";
		
      box.addEventListener("dragstart",dragStart);
      box.addEventListener("dragover",dragOver);
      box.addEventListener("dragenter",dragEnter);
      box.addEventListener("dragleave",dragLeave);
      box.addEventListener("drop",dragDrop);
      box.addEventListener("dragend",dragEnd);

      document.getElementById("pieces").append(box);
    }

    function dragStart()
    {
        cb=this;// this int his context refers to te images click.
    }
    function dragOver(d)
    {
        d.preventDefault();
    }
    function dragEnter(d)
    {
        d.preventDefault();
    }
    function dragLeave(d)
    {
        d.preventDefault();
    }
    function dragDrop()
    {
        rb=this;
    }
    function dragEnd()
    {
        if(cb.src.includes("blank"))
        {
            return;
        }
        let cimg=cb.src; //cimg=current images
        let rimg=rb.src; //rimg=rest images

        cb.src=rimg;
        rb.src=cimg;
    }
    
}
