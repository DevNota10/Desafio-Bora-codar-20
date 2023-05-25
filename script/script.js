window.onload = function(){
    const containerImg = document.querySelectorAll(".container")
    const body = document.querySelector('body')
    let backGround ;
           
    containerImg.forEach((img)=>{
        img.addEventListener('click', ()=>{
         img.classList.toggle('clickedImg');
        
        });
       
     })

}

