let no1=document.getElementById('x1');
no1.addEventListener('click',function(){
   let flex=document.getElementById('no1')
   flex.classList.add('full');
})
let remove=document.getElementById('container')
remove.addEventListener('click',function(){
    let remove_flex=document.getElementById('no1')
     remove_flex.classList.remove('full');
})
