const myname =  document.getElementById('fullName');
let toggled = false;
    
    myname.addEventListener('click', function() {
        if (toggled === true) {
            document.getElementById('offName').style.display = 'none';
        }
        else {
            document.getElementById('offName').style.display = 'contents';
        }
        toggled = !toggled 
       
    });

