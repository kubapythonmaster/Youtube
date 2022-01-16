

let przycisk = document.querySelector("button");



function wykonaj(){
    let personalnia = document.querySelector("#personalnia").value;
    let adres = document.querySelector("#adres").value;
    let telefon = document.querySelector("#telefon").value;
    let szablon = document.querySelector("#szablon").value;
    let tekst = document.querySelector("#tekst").value;

    


    let nowawizytówka = document.createElement("h2");
    nowawizytówka.classList.add("wizt");
    nowawizytówka.classList.add(szablon);



    document.querySelector(".lista_wizytówek").appendChild(nowawizytówka);

    let nowapersonalnia = document.createElement("div")
    let nowyadres = document.createElement("div")
    let nowytelefon = document.createElement("div")
    let nowytekst = document.createElement("div")
    let przycisk = document.createElement("button")

    
    


    nowapersonalnia.classList.add("personalia")
    nowyadres.classList.add("adres")
    nowytelefon.classList.add("telefon")
    nowytekst.classList.add("tekst")
    przycisk.classList.add("usun")
    

    nowapersonalnia.innerText = personalnia;
    nowyadres.innerText = adres;
    nowytelefon.innerText = telefon; 
    nowytekst.innerText = tekst;
    przycisk.innerText = "Usuń";
    

    nowawizytówka.appendChild(nowapersonalnia);
    nowawizytówka.appendChild(nowyadres);
    nowawizytówka.appendChild(nowytelefon)
    nowawizytówka.appendChild(nowytekst)
    nowawizytówka.appendChild(przycisk)
    
}

let przycisk_usuń = document.querySelector("usun")

function usun(){
    console.log("ssss")
}





przycisk.addEventListener("click",wykonaj)
przycisk_usuń.addEventListener("click",usun)


