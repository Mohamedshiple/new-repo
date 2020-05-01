
function getfuction()
{

var em = document.getElementById("Email").value;

var makanat = em.indexOf("@");

var UserName = em.substring(0,makanat);

document.getElementById("UserName").value =  UserName;

var UserDomain = em.substring(makanat +1 );

document.getElementById("UserDomain").value = UserDomain;




}
