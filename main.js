console.log('html connected')
/*$(document).ready(function(){
	console.log('connected')
	class Game{
		constructor(moveU,moveO,reinvent1,reinvent2){
			this.moveU = moveU 
			this.moveO = moveO
			this.reinvent1 = reinvent1
			this.reinvent2 = reinvent2
		}


   makeNewPos(){
  
  this.moveU = $('#gameBoard').height() - 60; // gives it padding
  this.moveO = $('#gameBoard').width() -60;
  this.reinvent1 = moveU * Math.random();  /*adds the random movement, using math(ehich would assing a number 1-9)
  this.reinvent2 = moveO * Math.random();
  return [reinvent1,reinvent2]
}

  animateDiv(){
  	let random = makeNewPos();
  $('#piece1').animate({
  	top:random[0],
  	left:random[1]
  },1000,function(){
  	animateDiv()
  } );

   
}

}
   animateDiv()
});*/

function start(){
 
  let moveU = $('#gameBoard').height() - 60; // gives it padding, and stops it from going off the board
  let moveO = $('#gameBoard').width() -60;
  let reinvent1 = moveU * Math.random();   //adds the random movement, using math(ehich would assing a number 1-9)
  let reinvent2 = moveO * Math.random();
  return [reinvent1,reinvent2]
}

function moving(){
	let random = start();
  $('#piece1').animate({
  	top:random[0],
  	left:random[1]
  },5000,function(){
  	moving()         // need to call on it here, or it will move to a new position, and stop.
  } );

   
}

moving();

function image1(){
	$('#1').append('<img id="img1" src="https://pbs.twimg.com/profile_images/765796728243163137/gh305Klf.jpg">')
}
function image2(){
	$('#2').append('<img id="img2" src="http://az616578.vo.msecnd.net/files/2016/09/09/636090261058271584688285615_Dog.jpg">')
}
function image3(){
	$('#3').append('<img id="img1" src="https://static.pexels.com/photos/60224/pexels-photo-60224.jpeg">')
}
function image4(){
	$('#4').append('<img id="img2" src="http://www.clipartbest.com/cliparts/LiK/zpe/LiKzpeE4T.png">')
}
// image1()
let click = 0;

 //function call(){
	$('#piece1').on('click',function(){   // by putting the image1 function in this, it was able to 
		if(click===0) {
			image1();
		}
		if(click===1) {
			image2();
		}
		if(click===2) {
			image3()
		}
		if(click===3) {
			image4()
		}
		click+=1;			// this checks the click, and adds one so that the next event can happen.

						// call with the click event listener.
	})
	// $('#piece1').on('click',function(){
	// 	// click+=1;
	// 	console.log('2nd click', click);
	// 	if(click === 1) {return image2()}
	// })
	/*$('#piece1').on('click',function(){
		image3()
	})
	$('#piece1').on('click',function(){
		image4()
	})*/
	/*,function(){
		alert('call')
	})*/
		
	

// call()





