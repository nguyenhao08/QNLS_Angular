var xhttp = new XMLHttpRequest();
xhttp.open('GET', 'http://localhost:3000/nhan-vien/', true);
xhttp.onload = function()   { 
    if (this.status == 200) {
           console.log(this.response);
        }
}
xhttp.send();

document.querySelector('.add').addEventListener('click', function() {


var xhttp = new XMLHttpRequest();
xhttp.open('POST', 'http://localhost:3000/nhan-vien/', true);
var data = "name= Vo Nguyen Hao";

xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.onload = function() {
    console.log(this.response);
}
xhttp.send(data);
});


document.querySelector('.delete').addEventListener('click', function() {


    var xhttp = new XMLHttpRequest();
    xhttp.open('DELETE', 'http://localhost:3000/nhan-vien/5', true);
    var data = "name= Vo Nguyen Hao";
    
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onload = function() {
        console.log(this.response);
    }
    xhttp.send();
    });