/**
Challenge: 

- Make the styling more exciting once an activity idea comes 
back from the Bored API
    - Resources: DOM element "classList" property, uigradients.com, 
      Google Fonts, color.adobe.com
    - Some ideas:
      - Change the title from "BoredBot" to something more exciting!
      - Change the background to something less drab.
      - Bonus: Animate something on the screen to move around and add more 
        excitement to the page
*/
const btn=document.getElementById('action-button')
const url='https://apis.scrimba.com/bored/api/activity'
function activity(){
  fetch(url)
  .then(res=>res.json())
  .then(data=>{
    console.log(data);
    document.getElementById('activity-text').innerText=data.activity
    document.getElementById('activity-text').classList='subtitle-alt'
    document.getElementById('bot').innerText='🦾 HappyBot🦿'
    
  })
  
}
