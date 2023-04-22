var userinput = document.getElementById('userinput')
var userinput2 = document.getElementById('userinput2')
var homecontent = document.getElementById('homecontent')
var arr=[]
var alertName = document.getElementById("alertName")
var alerturl = document.getElementById("alerturl")
// ///////////////////////////////////////////////////////////////////
function additem()
{

    arr.push(userinput.value);
    disblaydata(arr)
}
// ///////////////////////////////////////////////////////////////////////
function disblaydata(arr)
{
    var container=``;
    for(var i=0; i<arr.length;i++)
    {
        container+=`<div class="container">
    <h2>${userinput.value}</h2>
    <a id="sub" class="btn btn-primary" href="https://${userinput2.value}" target="_blank">visit</a>
    <button id="sub1" class="btn btn-danger btndelete"onclick=deleteitems(${i})  >Delete</button>
</div>`
    }
    homecontent.innerHTML =container
}
// //////////////////////////////////////////////////////////////////////////////////////////////
function deleteitems(id)
{
    arr.splice(id,1)
    disblaydata(arr)
}
// ///////////////////////////////////////////////////////////////////////////////////
userinput.addEventListener("keyup",function(){
    let reg = /^[a-zA-Z ]{2,30}$/;
    if(reg.test(userinput.value) ==true){
        alertName.classList.replace("d-block","d-none")
        userinput.classList.add("is-valid")
        userinput.classList.remove("is-invalid")
        sub.classList.remove("disabled")

    }else{
        alertName.classList.replace("d-none","d-block")
        userinput.classList.add("is-invalid")
        userinput.classList.remove("is-valid")
        sub.classList.add("disabled")
        userinput2.value("")
    }
})
// /////////////////////////////////////////////////////////////////////////////
userinput2.addEventListener("keyup",function(){
    let reg = /^[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/
    if(reg.test(userinput2.value) ==true){
        alerturl.classList.replace("d-block","d-none")
        userinput2.classList.add("is-valid")
        userinput2.classList.remove("is-invalid")
        sub.classList.remove("disabled")
        return true;

    }else{
        alerturl.classList.replace("d-none","d-block")
        userinput2.classList.add("is-invalid")
        userinput2.classList.remove("is-valid")
        sub.classList.add("disabled")
        userinput2.value("")
        return false;
    }
})









// ///////////////////////////////////////////////////////////////////////////
// function validation() {                         
//     var userinput = document.getElementById(userinput).value;
//     console.log(userinput);
//     if (userinput.value == "")
//     alert("Enter First Name");
// }


// var userinput = ("")

// if (userinput2.value==("")) 
// {

//     // console.log("gooooooooo");
//     sub.classList.add("disabled")
// }
// else if(userinput2.value==(""))
// {
//     sub.classList.remove("disabled")
// }


