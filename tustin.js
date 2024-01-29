

function dibujar_linea()
{
    var r=document.getElementById("resultado");
    var a= document.getElementById("input_a");
    var b= document.getElementById("input_b");
    var c= document.getElementById("input_c");
    var d= document.getElementById("input_d");
    var e= document.getElementById("input_e");
    var f= document.getElementById("input_f");
    var Tm= document.getElementById("input_Tm");

    
    var a=parseFloat(a.value);
    var b=parseFloat(b.value);
    var c=parseFloat(c.value);
    var d=parseFloat(d.value);
    var e=parseFloat(e.value);
    var f=parseFloat(f.value);
    var Tm=parseFloat(Tm.value)/1000;
    
    var boton=document.getElementById("boton");
    
    var az=0;
    var bz=0;
    var cz=0;
    var dz=0;
    var ez=0;
    var fz=0;


    az=4*a+(2*b+c*Tm)*Tm;
    bz=2*(4*a-c*Tm*Tm);
    cz=4*a-(2*b-c*Tm)*Tm;
    
    dz=4*d+(2*e+f*Tm)*Tm;
    ez=-2*(4*d-f*Tm*Tm);
    fz=4*d-(2*e-f*Tm)*Tm;

    console.log("az="+az);
    console.log("bz="+bz);
    console.log("cz="+cz);
    console.log("dz="+dz);
    console.log("ez="+ez);
    console.log("fz="+fz);
    

      r.innerHTML="          "+az+"z^2 + "+bz.toFixed(5)+"z + "+cz+"<br/>" + "G(z)=" + "----------------------------------------------------------------------<br/>"+"          "+dz+"z^2+ "+ez.toFixed(5)+"z + "+fz; 



    }
   



boton.addEventListener("click",dibujar_linea);