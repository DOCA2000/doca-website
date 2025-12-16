const toggle=document.getElementById('toggle');

toggle.onclick=()=>{
 document.body.classList.toggle('day');
 document.body.classList.toggle('night');
 toggle.textContent=document.body.classList.contains('day')?'☀️':'🌙';
}
