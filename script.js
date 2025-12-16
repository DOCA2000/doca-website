function sendWhatsApp(e){
 e.preventDefault();
 let name=document.getElementById('name').value;
 let service=document.getElementById('service').value;
 let msg=`Hello, I am ${name}. I need help with ${service}`;
 window.open(`https://wa.me/918979382308?text=${encodeURIComponent(msg)}`);
}

let night=true;
function toggleSky(){
 document.getElementById('sky').style.background = night ? 'linear-gradient(#87ceeb,#fff)' : 'linear-gradient(#001,#004)';
 night=!night;
}
