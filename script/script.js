window.onload = function(){
    const imgs = document.querySelectorAll("img")
    

    imgs.forEach((img)=>{
       img.addEventListener('click', ()=>{
        img.classList.toggle('clickedImg')
        // Criar janela expandir img
       
       }) 

    })

  
}