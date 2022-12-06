// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("button");
var btn_save = document.getElementById("button__save")

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
btn_save.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}




// Modal Thông tin cá nhân
var modal_infor= document.getElementById("modalInformation");
var btn_open = document.getElementById("details");
var btn_adjust = document.getElementById("button__adjust");
var btn_back = document.getElementById("button__back");
var span_close= document.getElementsByClassName("close")[1];

btn_open.onclick = function() {
  modal_infor.style.display = "block";
}
btn_adjust.onclick = function() {
  modal_infor.style.display = "none";
}
btn_back.onclick = function() {
  modal_infor.style.display = "none"; 
}
span_close.onclick = function() {
  modal_infor.style.display = "none";
}


// Modal Cập nhật thông tin
var modal_update= document.getElementById("modal_Update_Information");
var btn_show = document.getElementById("adjust--infor");
var btn_update = document.getElementById("button__update");
var span_modal= document.getElementsByClassName("close")[2];

btn_show.onclick = function() {
  modal_update.style.display = "block";
}
btn_update.onclick = function() {
  modal_update.style.display = "none";
}
span_modal.onclick = function() {
  modal_update.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal_update || event.target == modal_infor || event.target == modal) {
    modal_update.style.display = "none";
    modal_infor.style.display = "none";
    modal.style.display = "none";
  }
}