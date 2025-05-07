function poga1(){
    document.getElementById( "Izteiksmeslauks").innerHTML+=1;
    }
    function poga2(){
    document.getElementById( "Izteiksmeslauks").innerHTML+=2;
    }
    function poga3(){
    document.getElementById( "Izteiksmeslauks").innerHTML+=3;
    }
    function poga4(){
    document.getElementById( "Izteiksmeslauks").innerHTML+=4;
    }
    function poga5(){
    document.getElementById( "Izteiksmeslauks").innerHTML+=5;
    }
    function poga6(){
    document.getElementById( "Izteiksmeslauks").innerHTML+=6;
    }
    function poga7(){
    document.getElementById( "Izteiksmeslauks").innerHTML+=7;
    }
    function poga8(){
    document.getElementById( "Izteiksmeslauks").innerHTML+=8;
    }
    function poga9(){
    document.getElementById( "Izteiksmeslauks").innerHTML+=9;
    }
    function poga0(){
    document.getElementById( "Izteiksmeslauks").innerHTML+=0;
    }
    function pogaplus(){
    document.getElementById( "Izteiksmeslauks").innerHTML+="+";
    }
    function pogaminus(){
    document.getElementById( "Izteiksmeslauks").innerHTML+="-";
    }
    function pogaReiz(){
    document.getElementById( "Izteiksmeslauks").innerHTML+="*";
    }
    function pogacoma(){
    document.getElementById( "Izteiksmeslauks").innerHTML+=".";
    }
    function pogaDal(){
    document.getElementById( "Izteiksmeslauks").innerHTML+="/";
    }
    function pogaCler(){
      document.getElementById("Izteiksmeslauks").innerHTML=""
    }
    function pogaequal(){
      let izteiksme;
      izteiksme=document.getElementById("Izteiksmeslauks").innerHTML
       
      izteiksme=eval(izteiksme)
      document.getElementById("Izteiksmeslauks").innerHTML=izteiksme
      console.log(izteiksme)
      
    }