let bg=document.getElementById("bg");
let moon=document.getElementById("moon");
let mountain=document.getElementById("mountain");
let road=document.getElementById("road");
let text=document.getElementById("text");

window.addEventListener('scroll',function(){
  var value=window.scrollY;
  bg.style.top=value * 0.5 + 'px';
  moon.style.left=-value*0.5+'px';
  mountain.style.top=-value*0.15+'px';
  road.style.top=value*0.15+'px';
  text.style.top=value*1+'px';

})


const observer=new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
      console.log(entry);
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }else{
        entry.target.classList.remove('show');
      }
  });
})

const hiddenelements =document.querySelectorAll('.hidden');
hiddenelements.forEach((el)=>observer.observe(el));