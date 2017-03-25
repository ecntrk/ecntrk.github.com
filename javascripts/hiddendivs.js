function toggleDesc(id) {
        var el;
        el = document.getElementById(id);
        var txt = el.innerHTML.split('<',1);

var txtl = Math.round((txt[0].length/80)*25 +40);
txtl = txtl+ 'px';
        if(el.style.visibility==='hidden' || el.style.visibility==='')
        {          
          el.style.opacity = "1.0";
          el.style.visibility='visible';
          el.style.height = txtl;
        }
        else
        {
          el.style.opacity = "0.0";
          el.style.visibility='hidden';
          el.style.height = '1px';

        }
}