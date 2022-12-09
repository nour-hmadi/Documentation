






function afunction(){
    var nameX= document.getElementById("name");
    var surnameX= document.getElementById("city");
    var cityX= document.getElementById("surname");

      if ((nameX.value !="")  || (surnameX.value !="") || (cityX.value !="")) {
          nameX.value = "";
          surnameX.value = "";
          cityX.value = "";
        }

}
