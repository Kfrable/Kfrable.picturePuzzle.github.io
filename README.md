# picture-game


## technologies used.
1. In this project, java script animations were very important. when a user wins or looses, the image should be able to expand. this was done through jquery, along with with ccs animation. Both were needed to work perfectly with one another so that the full experince could be achieved. 
2. Along with Html, and css, java script was the back bone to making this game come to life. When a user clicks on the moving div, functions needed to know that the right id, and image should be added. This approach started at a total of 32 functions, spanning over 100 lines of code. In the end, this was able to be condensed into a total of seven lines, making the code much easier to navigate through.
3. The time clock was another important part of this game. In order to know when a user losses, time had to be put in. This was at first a challenge to implement, and still has a few bugs to work out. As of now, the clock counts down, but countinues even if a user wins. This, with time should be a simple fix. This part is done in java script, and utilizes a set interval ,and clear interval so that the clock knows when to stop and reset. The clock runs untill -1 so that the program knows not to go past 0. If the clock was set to 0, the clock would stop at 1, because 0 would be the number that could not be reached.
4. The bouncing div, which is the ball a user chaces, came from a lesson in my class. I took apart the method used so that i could completely know how it was used, and made my own alterations so that it would be mine, and i could better understand through trial and error.

## User Stories
1. I had a few people test this game, to find bugs that i may have missed the first time around. Many found the challenging, because the piece that is chased is very quick.  This made me test out different speeds, so that i could find the best speed, matched with the right amount of time it would take for a user to win.

## Wire Frames.

https://trello-attachments.s3.amazonaws.com/58ed644360c7d5ab61acc0b7/58ed67e4a1d654ac1db77da9/0a80a8cf4334f452ff674e9102367090/wire_frame.jpg

https://trello-attachments.s3.amazonaws.com/58ed644360c7d5ab61acc0b7/58ed67e4a1d654ac1db77da9/e38456e744a1b806277177bcfba296a5/wire_frame2.jpg

https://trello-attachments.s3.amazonaws.com/58ed644360c7d5ab61acc0b7/58ed67e4a1d654ac1db77da9/8cdfe483277bc6b5d2525327b05466d2/wire_frame3.jpg

https://trello-attachments.s3.amazonaws.com/58ed644360c7d5ab61acc0b7/58ed67e4a1d654ac1db77da9/feafef64b6f9a98a472697f084acd291/wire_frame_4.jpg

## rules of the game
The player will begin by clicking on the ball, located in the upper left hand corner. The ball will begin to move quickly, where it is your job to chase it and continue to   click on it. Everytime you click it, the box on the left hand side will fill with a piece of the puzzle. The goal is to click on the ball until the image is complete. If you make it, you will recieve a message saying you have won, and the box, containing the image will grow to take up the screen giving a better view of what was just put together. If you don't make it in time, a message will appear saying that you have lost, and the image will still grow, to reveal what yu were able to piece together thus far. At any time, a new game can be started, and instructions can be viewed.

## Issues
As of right now, I'm still having issues with mobile, and getting the clock to stop if a user has won. Those are the only porblems that i can see, and should be resolved soon.

https://kfrable.github.io/Kfrable.picturePuzzle.github.io/instructions.html
