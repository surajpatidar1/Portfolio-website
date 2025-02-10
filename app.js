var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-content");
function opentab(tabname){
 for(tablink of tablinks){
     tablink.classList.remove("active-links");
 }
 for(tabcontent of tabcontents){
     tabcontent.classList.remove("active-tab");
 }
 event.currentTarget.classList.add("active-links");
 document.getElementById(tabname).classList.add("active-tab");
}
var sidemenu = document.getElementById("sidemenu")
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwk_3pPINDIBAaow-bTyUCwaYRqj8I1Ugu5slEqVoKO6tCG_PPL2WyyUAxeSITBC_zJEA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent Successfully!"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})
