function toggleDesc(id) {
        var el;
        id2 = id+'_R';
        el = document.getElementById(id);
        el2 = document.getElementById(id2);
        var txt = el.innerHTML.split('<',1);

var txtl = Math.round((txt[0].length/80)*25 +40);
txtl = txtl+ 'px';
        if(el.style.visibility==='hidden' || el.style.visibility==='')
        {          
          el.style.opacity = "1.0";
          el.style.visibility='visible';
          el.style.height = txtl;
          el2.innerHTML =  "less ▲"
        }
        else
        {
          el.style.opacity = "0.0";
          el.style.visibility='hidden';
          el.style.height = '1px';
          el2.innerHTML = "more ▼"
        }
}

function toggleCur(id, choice) {
        var el;
        el = document.getElementById(id+'_R');
        el2 = document.getElementById(id);
        if(el2.style.visibility==='hidden'|| el2.style.visibility==='')
        {
        if(choice==='1' )
        {          
          el.style.opacity = "1.0";
          el.style.visibility='visible';
          el.style.height = '20px';
          el.innerHTML = "more ▼"
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