function getTask(){
    var myarray= new Array("wash dishes", "laundry", "clean bathroom", "clean kitchen", "clean floor (vacuum/mop)", "tidy desk");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
   document.getElementById("task").innerHTML=random;
}