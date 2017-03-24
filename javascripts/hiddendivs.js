function toggleDesc(id) {
        var el;
        el = document.getElementById(id);

        if(el.style.visibility==='hidden' || el.style.visibility==='')
        {          
          el.style.opacity = "1.0";
          el.style.visibility='visible';
          el.style.height = '120px';
        }
        else
        {
          el.style.opacity = "0.0";
          el.style.visibility='hidden';
          el.style.height = '1px';

        }
}