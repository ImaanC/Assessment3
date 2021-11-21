function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="Dean Hardscrabble"&& password=="23-19!")
{
    window.open('file:///C:/Users/User/Desktop/Website%20task/index.html');
    return false;

}
else
{
    alert("login failed");
}


}
