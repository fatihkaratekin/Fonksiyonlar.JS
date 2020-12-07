var birincisayı = Math.ceil(Math.random()*100);  // Math.ceil sayıyı yuvarlama yaparak ondalıklı sayı olmaktan kurtarır 
var ikincisayı  = Math.ceil(Math.random()*100);
var üçüncüsayı  = Math.ceil(Math.random()*100);
var dördüncüsayı = Math.ceil(Math.random()*100);
var beşincisayı = Math.ceil(Math.random()*100);
var altıncısayı = Math.ceil(Math.random()*100);

console.log(" birincisayı : " + birincisayı + " ikincisayı : " + ikincisayı + " üçüncüsayı : " + üçüncüsayı + " dördüncüsayı : " +dördüncüsayı + " beşincisayı : " +
 beşincisayı + " altıncısayı : " + altıncısayı) ;


 //  Kendi fonksiyonumuzu yazarken ve çagırırken.

 function sayıüretimi(){ 
  return  Math.ceil(Math.random()*100)
 }
 var yedincisayı = sayıüretimi();
 var sekizincisayı  = sayıüretimi();
 var dokuzuncusayı = sayıüretimi();
 var onuncusayı = sayıüretimi();
 var onbirincisayı = sayıüretimi();
 var onikincisayı = sayıüretimi();

 console.log(" yedincisayı: " + yedincisayı+ " sekizincisayı: " + sekizincisayı+ " dokuzuncusayı : " + dokuzuncusayı + " onuncusayı: " + onuncusayı+ " onbirincisayı: " +
 onbirincisayı + " onikincisayı : " + onikincisayı) ;

 
// parametr ekledigimiz fonksiyonlar ise şu şekilde yazılır 

function sayıüretimi(girilenSayı = 50){ // eger kullanıcı hiçbir sayı girmezse default olarak 50 arasında sayı üretilecek.
    return  Math.ceil(Math.random()*girilenSayı)
   }
   var onüçüncüsayı= sayıüretimi(300);
   var ondörtüncüsayı  = sayıüretimi(200);
   var onbeşincisayı = sayıüretimi(600);
   var onaltıncısayı = sayıüretimi();
   var onyedincisayı = sayıüretimi();
   var onsekizincisayı = sayıüretimi();
  
   console.log(" onüçüncüsayı : " + onüçüncüsayı + " ondörtüncüsayı " + ondörtüncüsayı + " onbeşincisayı : " + onbeşincisayı + " onaltıncısayı : " + onaltıncısayı+ " onyedincisayı : " +
   onyedincisayı + " onsekizincisayı : " + onsekizincisayı ) ;
