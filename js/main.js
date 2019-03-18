


var alire = document.getElementById("alire")
var lu = document.getElementById("lu")
document.getElementById('add').addEventListener('click',function(){

var value = document.getElementById("item").value;


alire.insertAdjacentHTML("afterbegin",` <li>${value}<i class="far fa-check-square" id=${value} onClick=marquerLu(this.id)></i><i class="fas fa-trash" id=${value} onClick=supprimer(this.id)></i></li>`);



})

function supprimer(id){
  
 document.getElementById(id).parentElement.outerHTML = "";

}

function marquerLu(id){
    supprimer(id)
    lu.insertAdjacentHTML("afterbegin",` <li>${id}</i><i class="fas fa-trash" id=${id} onClick=supprimer(this.id)></i></li>`);

    console.log(id)
}