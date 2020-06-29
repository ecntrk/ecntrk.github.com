function toggleDesc(id) {
  el = document.getElementById(id);
  el2 = document.getElementById(id+'_R');
//  txLen = Math.max(document.getElementById(id+'_S').innerHTML.length, document.getElementById(id+'_TE').innerHTML.length);
  txLen =document.getElementById(id+'_S').innerHTML.length;
  var extraspace = "";
  var el2Height = "20px";
  if(el.clientWidth < txLen *5.75) //magic number!
  {
    extraspace="<br>";
    el2Height = "40px";
  }

  var txt = el.innerHTML.split('<',1);
  var txtl = Math.round((txt[0].length/80)*25 +40);
  if (id == 'job4' || id == 'job5')
  txtl = txtl+300;
  txtl = txtl+ 'px';

  if(el.style.visibility==='hidden' || el.style.visibility==='')
  { 
    el2.style.height = el2Height;         
    el2.innerHTML =  extraspace+"less ▲";
    el.style.opacity = "1.0";
    el.style.visibility='visible';
    el.style.height = txtl;
  }
  else
  {
    el2.style.height = '20px';         
    el.style.opacity = "0.0";
    el.style.visibility='hidden';
    el.style.height = '1px';
    el2.innerHTML = extraspace+"more ▼";
  }
}

//Mouseover
function toggleCur(id, choice) {
  var el;
  el = document.getElementById(id+'_R');
  el2 = document.getElementById(id);
  txLen =document.getElementById(id+'_S').innerHTML.length;

  var extraspace = "";
  var el2Height = "20px";
  if(el.clientWidth < txLen *5.75) //magic number!
  {
    extraspace="<br>";
    el2Height = "40px";
  }

  if(el2.style.visibility==='hidden'|| el2.style.visibility==='')
  {
  if(choice==='1' )
  {          
    el.style.opacity = "1.0";
    el.style.visibility='visible';
    el.style.height = el2Height;
    el.innerHTML = extraspace+"more ▼"+txLen+"," +el.clientWidth ;
    
  }
  else
  {
    el.style.opacity = "0.0";
    el.style.visibility='hidden';
    el.style.height = '1px';
    el.innerHTML = "▼"

  }
}

}