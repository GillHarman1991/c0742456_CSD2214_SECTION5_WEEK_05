function myFunction(a, b) {
   
    return a + b; //this fumction return 
}

function arrays() {
    var pens;
    pens = ["red", "green", "blue", "orange", "purple"];
 
    markers = pens;
    console.log(markers);

   
    for (i = 0; i < markers.length; i++) {
        alert(markers[i]);
    }
    alert("length of arrays" + markers.length);
}

