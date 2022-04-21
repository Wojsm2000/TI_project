function Czas(){
    const d = new Date();
    tt=document.getElementById("zegar");
    
    var seconds = d.getSeconds();
    var minutes = d.getMinutes();
    var hour = d.getHours();
    if(hour<10)
    {
         hour= "0" + hour;   


    }
    if(minutes<10)
    {
         minutes= "0" + minutes;   


    }
    if(seconds<10)
    {
         seconds= "0" + seconds;   


    }
    zegar=hour+ " : "+minutes+" : "+seconds;
    document.getElementById("zegar").innerHTML=zegar;
    setInterval(Czas,1000);
    }
