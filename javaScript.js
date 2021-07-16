 function heart(clicked_id) {
     var x = document.getElementById(clicked_id).style.color ; 
    if(x!=="red"){
        document.getElementById(clicked_id).style.color = "red";
    }else{
        document.getElementById(clicked_id).style.color = "black";
    }
   
}
var somme = 0 ; 

    
  function price(clicked_id){
    var sum = document.getElementById("nour");
      var y = document.getElementById(clicked_id).value  ; 
      somme =somme + Number(y) ;
      sum.innerHTML = somme ;
      

  }
     