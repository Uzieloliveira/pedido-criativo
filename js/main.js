
const NoBtn = document.getElementById('no-button')

NoBtn.addEventListener("mouseover",()=>{

 const button = document.getElementById('no-button')
   
 const position = button.getBoundingClientRect()


 if(position.top < 50){
    button.style = `position: absolute; top: ${(position.top + 500)}px; left: ${(position.left * Math.random() + position.top)}px`;

 }else if(position.right < 50){

    button.style = `position: absolute; top: ${(position.top * Math.random())}px; left: ${(position.right * Math.random() - position.top)}px`;

 }else{
    button.style = `position: absolute; top: ${(position.top * Math.random())}px; left: ${(position.left * Math.random() + position.top)}px`;
 }

})