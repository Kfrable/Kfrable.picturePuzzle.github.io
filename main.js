console.log('html connected')

function begin(){
	$('#start').on('click',function(){
		moving();
	})
}



function start(){
 
  let moveU = $('#gameBoard').height() - 60; // gives it padding, and stops it from going off the board
  let moveO = $('#gameBoard').width() -60;
  let reinvent1 = moveU * Math.random();   //adds the random movement, using math(ehich would assing a number 1-9)
  let reinvent2 = moveO * Math.random();
  return [reinvent1,reinvent2]  		//return an array with the two variables i created.
}

function moving(){
	let random = start();   // calling on the first function
  $('#piece1').animate({	// begins the radom animation
  	top:random[0],			//calling on the first position of the array, top and left were placed
  	left:random[1]			// because right and bottom threw the div off the board.
  },20000,function(){		//setting the speed.
  	moving()         // need to call on it here, or it will move to a new position, and stop.
  } );

   
}
begin()

function newGame(){
	$('#new').on('click',function(){
		location.reload();
	})
}
newGame();
 
 let clock = 1000;          //start time
 let position = $('#time');
 position.html(clock)    //this basically appends clock to position
 
 function countDown(){
 	let clear = setInterval(function(){
 		position.html(clock);
 		clock -=1;    //taking the time down with one.
 	   if(clock ===-1){   //the -1 makes it so that the count can reach one.
 	   	clearInterval(clear);
 	   	alert('Sorry try agian');
		 $('#puzzle').animate({height: '755px'});
		 $('#puzzle').animate({width: '1403px'});
		 $('#puzzle').animate({top:'74px'});
		 $('.box').animate({height:'147px'});
		 $('.box').animate({width:'277.4px'});
		 $('.img').animate({height:'147px'});
		 $('.img').animate({width:'277.4px'});
 	   	
 	   	// alert('Time is up!');
 	   	// location.reload()
 	   	}/*else{
 	   	clearInterval(clear);
 	   	}*/
 	   	
 	},800)
 }
  countDown()

class Game{
	constructor(timer){
		this.timer=timer
	}
	 expandP(){
	$('#puzzle').animate({height: '755px'});
	$('#puzzle').animate({width: '1403px'});
	$('#puzzle').animate({top:'74px'});
	$('.box').animate({height:'147px'});
	$('.box').animate({width:'277.4px'});
	$('.img').animate({height:'147px'});
	$('.img').animate({width:'277.4px'});
	$('.img').animate({height:'129px'});
	/*$('.img').animate({width:'184.4px'});		// for the media query
	$('.box').animate({height:'129px'});
	$('.box').animate({width:'184.4px'});
	$('#puzzle').animate({height:'663px'});
	$('#puzzle').animate({width:'941px'});
	$('#puzzle').animate({top:'50px'});*/
	
}
}
let game = new Game(100);


let pic = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];	
let click = 0;

	$('#piece1').on('click',function(){   // by putting the image1 function in this, it was able to 
		$('box').attr('id',`${click}`);  //calling the variable click
 		$(`#${click + 1}`).append(`<img class="img" src="images/piece${click + 1}.png">`);  // with the back tics, was able to call a variable
 		if(click===0){																		// where with out them, in side would just be text/string.
 			moving();
 		}
 		if(click===24){
		 	alert('winner');
		 	game.expandP(); 
 		}
 		click+=1;  
	})
	







