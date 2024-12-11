function login(){
    const usr=document.getElementById("usr").value
    const pass=document.getElementById("pass").value
    if(usr=="sharon"){
        if(pass=="@sharon"){
            console.log(usr);
            window.location.href = "../index.html";
        }
        else{
            alert("enter valid user name and password")
        }
    }
    else{
        alert("enter valid user name and password")
    }
}