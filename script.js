function toggleBot(){
  document.getElementById('botBox').style.display='block';
}

function botReply(type){
  alert('Bot: Please WhatsApp us for '+type+' assistance');
}

function login(){
  if(cid.value==='client123' && pass.value==='1234'){
    window.location='dashboard.html';
  }else{
    alert('Invalid demo credentials');
  }
}
