console.log('html connected')

function begin(){
	$('#start').on('click',function(){
		moving();
	})
}
/*	let clock = 1000;          //start time
 let position = $('#time');
 position.html(clock)    //this basically appends clock to position
 
 function countDown(){
 	let clear = setInterval(function(){
 		position.html(clock);
 		clock -=1;    //taking the time down with one.
 	   if(clock ===-1){   //the -1 makes it so that the count can reach one.
 	   	clearInterval(clear);
 	   	alert('Time is up!');
 	   	location.reload()
 	   	}
 	},800)
 }
  
}*/


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
  },1000,function(){		//setting the speed.
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
 	   	alert('Time is up!');
 	   	location.reload()
 	   	}
 	},800)
 }
  countDown()

class Game{
	constructor(timer){
		this.timer=timer
	}
	 expandP(){
	$('#puzzle').animate({height: '631px'});
	$('#puzzle').animate({width: '1316px'});
	$('.box').animate({height:'123px'});
	$('.box').animate({width:'260px'});
	$('.img').animate({height:'123px'});
	$('.img').animate({width:'260px'})
}
}
let game = new Game(100);
/*function expandP(){
	$('#puzzle').animate({height: '631px'});
	$('#puzzle').animate({width: '1316px'});
	$('.box').animate({height:'123px'});
	$('.box').animate({width:'260px'});
	$('.img').animate({height:'123px'});
	$('.img').animate({width:'260px'})
}*/
/*expandP();*/

	function image1(){
		$('#1').append('<img class="img" src="images/piece 1.png">');
	}
	function image2(){
		$('#2').append('<img class="img" src="images/piece2.png">');
	}
	function image3(){
		$('#3').append('<img class="img" src="images/piece3.png">');
	}
	function image4(){
		$('#4').append('<img class="img" src="images/piece 4.png">');
	}
	function image5(){
		$('#5').append('<img class="img" src="images/piece5.png">');
	}
	function image6(){
		$('#6').append('<img class="img" src="images/piece6.png">');
	}
	function image7(){
		$('#7').append('<img class="img" src="images/piece7.png">');
	}
	function image8(){
		$('#8').append('<img class="img" src="images/piece8.png">');
	}
	function image9(){
		$('#9').append('<img class="img" src="images/piece9.png">');
	}
	function image10(){
		$('#10').append('<img class="img" src="images/piece10.png">');
	}
	function image11(){
		$('#11').append('<img class="img" src="images/piece11.png">');
	}
	function image12(){
		$('#12').append('<img class="img" src="images/piece12.png">');
	}
	function image13(){
		$('#13').append('<img class="img" src="images/piece13.png">');
	}
	function image14(){
		$('#14').append('<img class="img" src="images/piece14.png">');
	}
	function image15(){
		$('#15').append('<img class="img" src="images/piece15.png">');
	}
	function image16(){
		$('#16').append('<img class="img" src="images/piece16.png">');
	}
	function image17(){
		$('#17').append('<img class="img" src="images/piece17.png">');
	}
	function image18(){
		$('#18').append('<img class="img" src="images/piece18.png">');
	}
	function image19(){
		$('#19').append('<img class="img" src="images/piece19.png">');
	}
	function image20(){
		$('#20').append('<img class="img" src="images/piece20.png">');
	}
	function image21(){
		$('#21').append('<img class="img" src="images/piece21.png">');
	}
	function image22(){
		$('#22').append('<img class="img" src="images/piece22.png">');
	}
	function image23(){
		$('#23').append('<img class="img" src="images/piece23.png">');
	}
	function image24(){
		$('#24').append('<img class="img" src="images/piece24.png">');
	}
	function image25(){
		$('#25').append('<img class="img" src="images/piece25.png">');
	}
	
let click = 0;

	$('#piece1').on('click',function(){   // by putting the image1 function in this, it was able to 
		if(click===0) {
			// begin();
			console.log(click)
			moving();  // this call on the move function up top to start the game.
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
		if(click===4) {
			image5()
		}
		if(click===5) {
			image6();
		}
		if(click===6) {
			image7();
		}
		if(click===7) {
			image8()
		}
		if(click===8) {
			image9()
		}
		if(click===9) {
			image10()
		}
		if(click===10) {
			image11();
		}
		if(click===11) {
			image12();
		}
		if(click===12) {
			image13()
		}
		if(click===13) {
			image14()
		}
		if(click===14) {
			image15()
		}
		if(click===15) {
			image16();
		}
		if(click===16) {
			image17();
		}
		if(click===17) {
			image18()
		}
		if(click===18) {
			image19()
		}
		if(click===19) {
			image20()
		}
		if(click===20) {
			image21();
		}
		if(click===21) {
			image22();
		}
		if(click===22) {
			image23()
		}
		if(click===23) {
			image24()
		}
		if(click===24) {
			image25();
			alert('winner');
			game.expandP(); 
			/*expandP();*/
			 // add another if statement, yes or no to play again.
			// location.reload();
		}

		click+=1;			// this checks the click, and adds one so that the next event can happen.

						// call with the click event listener.
	})
	





