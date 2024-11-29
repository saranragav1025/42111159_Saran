let guess=(Math.floor(Math.random()*100)+1)
console.log(guess)
let count=0
const total_guesses = 11
let game_state = 0
const get_hints=document.getElementById('hints')
const get_att=document.getElementById('att')
const get_btn=document.getElementById('check')

function check(){
    let val=document.forms[0]['val'].value
    get_att.innerHTML=count
    count++
    console.log(val)
    console.log("count:",count);
    

    if (game_state == 0 && count < total_guesses) {
        if(val==guess){
            get_hints.innerHTML='guess is correct and game over'
            game_state = 1
            get_btn.innerHTML='Reset'
            console.log("guess is correct")
        }
        else if(val<guess){
            get_hints.innerHTML='guess is lower'
            console.log("guess is lower")
            console.log("Attempts: "+count)
            get_att.innerHTML='Attempts : '+count
        }
        else{
            get_hints.innerHTML='guess is higher'
            console.log("guess is higher")
            console.log("Attempts: "+count)
            get_att.innerHTML='Attempts : '+count
        }
    } else {
        console.log('game over');
         Reset();
    }

    if(count==10){
        get_hints.innerHTML="Game over"
        get_btn.innerHTML="Reset"
     
    }

}
function Reset(){
    count = 0
    guess=(Math.floor(Math.random()*100)+1)
    console.log("Attempts: "+count)
    get_hints.innerHTML = "Guess it"
    get_att.innerHTML='Attempts : '+count
}

