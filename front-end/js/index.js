const a=document.getElementById("table")
const b=document.getElementById("card")
function displayCard(){
    // a.style.display = "none";
    b.style.display="block";
}
function displayTable(){
    // a.style.display = "block";
    b.style.display = "none";
}
// for(i=0;i<=100;i++){
    for(i=0;i<=5;i++){
        if(i<=5){
            // for(i=i;i>=5;i--){
                // console.log(i);
                
            // }
        }
        else{
            console.log(i);
            
        }
        // console.log(i);
        let num=i
        console.log(i);
    }
    
// }
async function logeEmploy() {
    const res=await fetch("http://localhost:3001/getemploye")
    if(res.status=200){
        const employe=await res.json();
        console.log(employe);
        const valu=employe.length
        if(valu>5){
            let a=valu%5       
            console.log(a);
        }
        
        let str1=""
        let str2=""
        employe.forEach((employe,index)=> {
            str1+=`
                    <tr>
                        <td>${employe.id}</td>
                        <td>${employe.name}</td>
                        <td>${employe.department}</td>
                        <td>${employe.position}</td>
                        <td>${employe.email}</td>
                        <td>${employe.salary}</td>
                        <td>${employe.phone}</td>
                        <td>${employe.experiance}</td>
                            <td><img src="./assets/1.jpg" class="table-img" alt=""></td>
                        <td class="btn">
                            <a href="./pages/edit.html"><button class="edit" id="btm1">edit</button></a>
                            <button class="del" onclick="handelDelete('${employe._id}')" id="btn2">delete</button>
                        </td>
                    </tr> 

                `
            str2+=`
            <div class="card">
                        <div class="card-img">
                            <img src="./assets/2.jpg" alt=""> 
                        </div>
                        <div class="card-info">
                            <div class="info">
                                <h4>id:</h4>
                            </div>
                            <div class="info">
                                <h4 id=""> ${employe.id}</h4>
                            </div>
                        </div>
                        <div class="card-info">
                            <div class="info">
                                <h4>phone:</h4>
                            </div>
                            <div class="info">
                                <h4 id="">${employe.phone}</h4>
                            </div>
                        </div><div class="card-info">
                            <div class="info">
                                <h4>department:</h4>
                            </div>
                            <div class="info">
                                <h4 id="">${employe.department}</h4>
                            </div>
                        </div><div class="card-info">
                            <div class="info">
                                <h4>salary:</h4>
                            </div>
                            <div class="info">
                                <h4 id="">${employe.salary}</h4>
                            </div>
                        </div><div class="card-info">
                            <div class="info">
                                <h4>position:</h4>
                            </div>
                            <div class="info">
                                <h4 id="">${employe.position}</h4>
                            </div>
                        </div>
                        <div class="card-info">
                            <div class="info">
                                <h4>e-mail:</h4>
                            </div>
                            <div class="info">
                                <h4 id="">${employe.email}</h4>
                            </div>
                        </div>
                        <div class="card-info">
                            <div class="info" id="btns">
                                <a href="./pages/edit.html"><button id="btn1">edit</button></a>
                            <!-- </div>
                            <div class="info"> -->
                                <button id="btn2" onclick="handelDelete('${employe._id}')">delete</button>
                            </div>
                        </div>
                    </div>
            
            `
        });
        document.getElementById("display").innerHTML=str1
        document.getElementById("display2").innerHTML=str2
    }
}
logeEmploy()

async function handelDelete(_id) {
    const res=await fetch("http://localhost:3001/delete",{
        method:"DELETE",
        headers:{"Content-Type":"text/plain"},
        body:_id
    })
    console.log(res);
    if (res.status==200) {
        alert("succesfully deleted")
        logeEmploy()
    }
    else{
        alert("failed")
    }

}