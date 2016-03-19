window.onload=function(){
	var bird={
		x:140,
		y:264,
		w:40,
		h:40,
	}
	var guandao=[
		{
		top:{x:300,y:0,w:80,h:300},
		bottom:{x:300,y:450,w:80,h:300}
		},
		{top:{x:600,y:0,w:80,h:300},bottom:{x:600,y:450,w:80,h:300,}
	    }
	];
	var ctx=document.querySelector("#canvas").getContext("2d");
	var a=1;
	var draw=function(){
		//画小鸟
		ctx.clearRect(0,0,320,568);
		a+=0.01;
		bird.y+=a*a;

		var img=new Image();
		img.src="./image/bird0_0.png";
		/*ctx.fillRect(bird.x,bird.y,bird.w,bird.h);*/
		img.onload=function(){
			ctx.drawImage(img,bird.x,bird.y);
		}
		//画管道
		var img2=new Image();
		img2.src='./image/pipe_down.png';
		img2.onload=function(){
			ctx.drawImage(img2,d.top.x,d.top.y,d.top.w,d.top.h);
		}
		var img3=new Image();
		img3.src='./image/pipe_up.png';
		img3.onload=function(){
			ctx.drawImage(img3,d.bottom.x,d.bottom.y,d.bottom.w,d.bottom.h);
		}
		var vs;
		for(var i=0;i<guandao.length;i++){
			var d=guandao[i];
			d.top.x-=3;
			d.bottom.x-=3;
			ctx.drawImage(img2,d.top.x,d.top.y,d.top.w,d.top.h);
			ctx.drawImage(img3,d.bottom.x,d.bottom.y,d.bottom.w,d.bottom.h);
			/*ctx.fillRect(d.top.x,d.top.y,d.top.w,d.top.h);
			ctx.fillRect(d.bottom.x,d.bottom.y,d.bottom.w,d.bottom.h);*/
			if(recvsrec(bird,d.top)||recvsrec(bird,d.bottom)){
				vs=true;
			}
		if(d.top.x<=-d.top.w){
			d.top.x=500;
			d.bottom.x=500;
			d.top.h=Math.random()*90+100;
            d.bottom.h=568-d.top.h-200;
            d.bottom.y=d.top.h+200;
		}
		if(vs){
			btn2.style.display="block";
			return;
		}
		}
		
		//边界判断
		if(bird.y>=568-40){
			ctx.fillRect(140,568,bird.w,bird.h);
		}else if(bird.y<=0){
			ctx.fillRect(140,0,bird.w,bird.h);
			btn2.style.display="block";
		}else{
			window.requestAnimationFrame(draw);
		}
		 ctx.drawImage(img,bird.x,bird.y);
		 ctx.drawImage(img2,d.top.x,d.top.y,d.top.w,d.top.h);
		 ctx.drawImage(img3,d.bottom.x,d.bottom.y,d.bottom.w,d.bottom.h);

	}

	canvas.onclick=function(){
		bird.y-=20;
		a=1;
	}

	var btn1=document.querySelector("#btn1");
	var btn2=document.querySelector("#btn2");
	btn1.onclick=function(){
		btn1.style.display="none";
		requestAnimationFrame(draw);
	}
	btn2.onclick=function(){
		btn1.style.display="none";
		window.location.reload();
	}
	
var recvsrec =  function(rect0,rect1){
    if (rect0.x >= rect1.x && rect0.x >= rect1.x + rect1.w) {
      return false;
    } else if (rect0.x <= rect1.x && rect0.x + rect0.w <= rect1.x) {
      return false;
    } else if (rect0.y >= rect1.y && rect0.y >= rect1.y + rect1.h) {
      return false;
    } else if (rect0.y <= rect1.y && rect0.y + rect0.h <= rect1.y) {
      return false;
    }
    return true;
  };
	
	
	
    
	
	

	
}