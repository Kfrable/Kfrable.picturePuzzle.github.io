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
  },10000,function(){		//setting the speed.
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
// moving();

/*class begin{
	constructor(){
		this.
	}
}*/

	function image1(){
		$('#1').append('<img class="img" src="https://pbs.twimg.com/profile_images/765796728243163137/gh305Klf.jpg">')
	}
	function image2(){
		$('#2').append('<img class="img" src="http://az616578.vo.msecnd.net/files/2016/09/09/636090261058271584688285615_Dog.jpg">')
	}
	function image3(){
		$('#3').append('<img class="img" src="https://static.pexels.com/photos/60224/pexels-photo-60224.jpeg">')
	}
	function image4(){
		$('#4').append('<img class="img" src="http://www.clipartbest.com/cliparts/LiK/zpe/LiKzpeE4T.png">')
	}
	function image5(){
		$('#5').append('<img id="img5" src"">')
	}
	function image6(){
		$('#6').append('<img id="img5" src"">')
	}
	function image7(){
		$('#7').append('<img id="img5" src"">')
	}
	function image8(){
		$('#8').append('<img id="img5" src"">')
	}
	function image9(){
		$('#9').append('<img id="img5" src"">')
	}
	function image10(){
		$('#10').append('<img id="img5" src"">')
	}
	function image11(){
		$('#11').append('<img id="img5" src"">')
	}
	function image12(){
		$('#12').append('<img id="img5" src"">')
	}
	function image13(){
		$('#13').append('<img id="img5" src"">')
	}
	function image14(){
		$('#14').append('<img id="img5" src"">')
	}
	function image15(){
		$('#15').append('<img id="img5" src"">')
	}
	function image16(){
		$('#16').append('<img id="img5" src"">')
	}
	function image17(){
		$('#17').append('<img id="img5" src"">')
	}
	function image18(){
		$('#18').append('<img id="img5" src"">')
	}
	function image19(){
		$('#19').append('<img id="img5" src"">')
	}
	function image20(){
		$('#20').append('<img id="img5" src"">')
	}
	function image21(){
		$('#21').append('<img id="img5" src"">')
	}
	function image22(){
		$('#22').append('<img id="img5" src"">')
	}
	function image23(){
		$('#23').append('<img id="img5" src"">')
	}
	function image24(){
		$('#24').append('<img id="img5" src"">')
	}
	function image25(){
		$('#25').append('<img id="img5" src"">')
	}
	
let click = 0;

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
			image25()
			alert('winner');  // add another if staement, yes or no to play again.
			location.reload();
		}

		click+=1;			// this checks the click, and adds one so that the next event can happen.

						// call with the click event listener.
	})
	





