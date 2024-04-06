
let nameSite = document.getElementById("nameSite");
let urlSite  =  document.getElementById("urlSite");
let inputext = document.getElementById("inputext");
let inpturl = document.getElementById("inpturl");
let pop = document.getElementById("pop");
let overlay = document.getElementById("over");
let info = [];


let reg = /^[a-z]{3,}$/;

nameSite.onkeyup = () => {
    
    if (reg.test(nameSite.value))
    {
       inputext.classList.remove("newcontE");
        inputext.classList.add("newcont");
        nameSite.classList.remove("danger");
        nameSite.classList.add("correct");
    }

    else
    {
      inputext.classList.remove("newcont");
      inputext.classList.add("newcontE");
      nameSite.classList.remove("correct");
      nameSite.classList.add("danger");
    }

    if (nameSite.value == '') {
        inputext.classList.remove("newcontE");
        inputext.classList.remove("newcont");
         nameSite.classList.remove("danger");
    }
 
}


let regUrl = /^[a-z]{3,15}\.com$/;
urlSite.onkeyup = () => {
    
    if (regUrl.test(urlSite.value))
    {
        inpturl.classList.remove("newcontE");
        inpturl.classList.add("newcont");
        urlSite.classList.remove("danger");
        urlSite.classList.add("correct");
    }

    else
    {
      inpturl.classList.remove("newcont");
      inpturl.classList.add("newcontE");
      urlSite.classList.remove("correct");
      urlSite.classList.add("danger");
    }

    if (urlSite.value == '') {
        inpturl.classList.remove("newcontE");
        inpturl.classList.remove("newcont");
        urlSite.classList.remove("danger");
    }
 
}
 
if (localStorage.length > 0)
{
    info = JSON.parse(localStorage.sites);
}

let getElements = () => {
    
    let obj = {
        name: nameSite.value,
        url: urlSite.value,
    };

    if (reg.test(nameSite.value) && regUrl.test(urlSite.value)) {
         info.push(obj);
         clear();
    }

    else
    {
        pop.style.visibility = "visible";
        overlay.classList.add("overlay");
    }
      
    localStorage.setItem("sites", JSON.stringify(info));
    display();
}


let clear = () => {
    nameSite.value = '';
    urlSite.value = '';
    inputext.classList.remove("newcontE");
    inputext.classList.remove("newcont");
    inpturl.classList.remove("newcontE");
    inpturl.classList.remove("newcont");
    urlSite.classList.remove("correct");
    urlSite.classList.remove("danger");

    nameSite.classList.remove("correct");
    nameSite.classList.remove("danger");
    
}


let display = () => {
    let table = '';
    for (let i = 0; i < info.length; i++)
    {
        table += `
            <tr>
                    <td>${i+1}</td>
                    <td>${info[i].name}</td>
                    <td>
                        <a href="https://${info[i].url}" class="btn btn-success" target="_blank" >
                            <i class="fa-solid fa-eye me-1"></i>
                            visit
                        </a>
                    </td>
                    <td>
                        <button onclick= "deleteItem(${i})" class="btn btn-danger">
                            <i class="fa-solid fa-trash  me-1"></i>
                             delete</button>
                    </td>
                </tr>
        `;
    }

    document.getElementById("tbody").innerHTML = table;
}




 let deleteItem = (i)=> {
     info.splice(i,1);
     localStorage.setItem("sites", JSON.stringify(info));
     display();
 }
display();


let hide = () => {
    pop.style.visibility = "hidden";
     overlay.classList.remove("overlay");
}

