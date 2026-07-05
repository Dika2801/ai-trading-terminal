const input=document.getElementById("image");
const preview=document.getElementById("preview");

input.onchange=()=>{
preview.src=URL.createObjectURL(input.files[0]);
preview.style.display="block";
}
