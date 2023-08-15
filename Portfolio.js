var tablinks = document.getElementsByClassName("tablinks");
var navitems = document.getElementById("navitems");
var tabcontents = document.getElementsByClassName("tabcontents");

function opentab(tabname)
{
 for(tablink of tablinks)
 {
     tablink.classList.remove("active");
 }
 for(tabcontent of tabcontents)
 {
     tabcontent.classList.remove("activetab");
 }
 event.currentTarget.classList.add("active");
 document.getElementById(tabname).classList.add("activetab");

}

function openmenu()
{
    navitems.style.right="0"
    navitems.style.display = "flex";
    navitems.style.flexDirection = "column"
}
function closemenu()
{
    navitems.style.right = "-200px";
}