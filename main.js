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
	function image26(){
		$('#26').append('<img id="img5" src"">')
	}
	function image27(){
		$('#27').append('<img id="img5" src"">')
	}
	function image28(){
		$('#28').append('<img id="img5" src"">')
	}
	function image29(){
		$('#29').append('<img id="img5" src"">')
	}
	function image30(){
		$('#30').append('<img id="img5" src"">')
	}
	function image31(){
		$('#31').append('<img id="img5" src"">')
	}
	function image32(){
		$('#32').append('<img id="img5" src"">')
	}
	function image33(){
		$('#33').append('<img id="img5" src"">')
	}
	function image34(){
		$('#34').append('<img id="img5" src"">')
	}
	function image35(){
		$('#35').append('<img id="img5" src"">')
	}
	function image36(){
		$('#36').append('<img id="img5" src"">')
	}
	function image37(){
		$('#37').append('<img id="img5" src"">')
	}
	function image38(){
		$('#38').append('<img id="img5" src"">')
	}
	function image39(){
		$('#39').append('<img id="img5" src"">')
	}
	function image40(){
		$('#40').append('<img id="img5" src"">')
	}
	function image41(){
		$('#41').append('<img id="img5" src"">')
	}
	function image42(){
		$('#42').append('<img id="img5" src"">')
	}
	function image43(){
		$('#43').append('<img id="img5" src"">')
	}
	function image44(){
		$('#44').append('<img id="img5" src"">')
	}
	function image45(){
		$('#45').append('<img id="img5" src"">')
	}
	function image46(){
		$('#46').append('<img id="img5" src"">')
	}
	function image47(){
		$('#47').append('<img id="img5" src"">')
	}
	function image48(){
		$('#48').append('<img id="img5" src"">')
	}
	function image49(){
		$('#49').append('<img id="img5" src"">')
	}
	function image50(){
		$('#50').append('<img id="img5" src"">')
	}
	function image51(){
		$('#51').append('<img id="img5" src"">')
	}
	function image52(){
		$('#52').append('<img id="img5" src"">')
	}
	function image53(){
		$('#53').append('<img id="img5" src"">')
	}
	function image54(){
		$('#54').append('<img id="img5" src"">')
	}
	function image55(){
		$('#55').append('<img id="img5" src"">')
	}
	function image56(){
		$('#56').append('<img id="img5" src"">')
	}
	function image57(){
		$('#57').append('<img id="img5" src"">')
	}
	function image58(){
		$('#58').append('<img id="img5" src"">')
	}
	function image59(){
		$('#59').append('<img id="img5" src"">')
	}
	function image60(){
		$('#60').append('<img id="img5" src"">')
	}
	function image61(){
		$('#61').append('<img id="img5" src"">')
	}
	function image62(){
		$('#62').append('<img id="img5" src"">')
	}
	function image63(){
		$('#63').append('<img id="img5" src"">')
	}
	function image64(){
		$('#64').append('<img id="img5" src"">')
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
		}
		if(click===25) {
			image26();
		}
		if(click===26) {
			image27();
		}
		if(click===27) {
			image28()
		}
		if(click===28) {
			image29()
		}
		if(click===29) {
			image30()
		}
		if(click===30) {
			image31();
		}
		if(click===31) {
			image32();
		}
		if(click===32) {
			image33()
		}
		if(click===33) {
			image34()
		}
		if(click===34) {
			image35()
		}
		if(click===35) {
			image36();
		}
		if(click===36) {
			image37();
		}
		if(click===37) {
			image38()
		}
		if(click===38) {
			image39()
		}
		if(click===39) {
			image40()
		}
		if(click===40) {
			image41();
		}
		if(click===41) {
			image42();
		}
		if(click===42) {
			image43()
		}
		if(click===43) {
			image44()
		}
		if(click===44) {
			image45()
		}
		if(click===45) {
			image46();
		}
		if(click===46) {
			image47();
		}
		if(click===47) {
			image48()
		}
		if(click===48) {
			image49()
		}
		if(click===49) {
			image50()
		}
		if(click===50) {
			image51();
		}
		if(click===51) {
			image52();
		}
		if(click===52) {
			image53()
		}
		if(click===53) {
			image54()
		}
		if(click===54) {
			image55()
		}
		if(click===55) {
			image56();
		}
		if(click===56) {
			image57();
		}
		if(click===57) {
			image58()
		}
		if(click===58) {
			image59()
		}
		if(click===59) {
			image60()
		}
		if(click===60) {
			image61();
		}
		if(click===61) {
			image62();
		}
		if(click===62) {
			image63()
		}
		if(click===63) {
			image64()
		}
		if(click===64) {
			image65()
		}

		click+=1;			// this checks the click, and adds one so that the next event can happen.

						// call with the click event listener.
	})
	





