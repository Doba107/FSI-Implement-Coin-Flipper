// TODO: Declare any global variables we need
var TotalAttemps, h;

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons
const HeadsC = document.querySelector('#heads')

const HeadsP = document.querySelector("#heads-percent")

const FlipBtn = document.querySelector('#Flip')

FlipBtn.addEventListener('click', function(){

   if(Math.round(Math.random()) == 1){
       TotalAttemps ++;
       document.getElementById("heads").innerHTML ++;
       h = (1/TotalAttemps)*100
       document.getElementById("heads-percent").innerHTML = h%
   }
})

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})