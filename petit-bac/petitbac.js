console.log("Petitbac");

let jal = document.getElementById("Saisie");

let btnAjouter = document.getElementById("bouton_ajouter");
btnAjouter.addEventListener("click", ajouter);

let btnClean = document.getElementById("bouton_clean");
btnClean.addEventListener("click", clean);


let btnGenerer = document.getElementById("bouton_generer");
btnGenerer.addEventListener("click", generer);

let btnRénitialiser = document.getElementById("bouton_rénitialiser");
btnRénitialiser.addEventListener("click", rénitialiser);



// DEBUT DE MA FONCTION  


function ajouter() {


    let tr = document.createElement("tr");
    tr.classList.add("mes_choses")
    console.log(tr);
    ajouterCase("Lettre", tr);
    ajouterCase("Nom", tr);
    ajouterCase("Prenom", tr);
    ajouterCase("Objet", tr);
    ajouterCase("Animaux", tr);
    ajouterCase("Métiers", tr);
    ajouterCase("Pays", tr);
    ajouterCase("Fruits", tr);

}


function ajouterCase(mots, tr) {

    let jal = document.createElement("td")
    let saisie = document.getElementById(mots).value;
    jal.innerText = saisie;
    tr.appendChild(jal);

}




function clean() {

    nettoyerCase("Lettre");
    nettoyerCase("Nom");
    nettoyerCase("Prenom");
    nettoyerCase("Animaux");
    nettoyerCase("Métiers");
    nettoyerCase("Pays");
    nettoyerCase("Fruits");

}
 
 
function nettoyerCase(mots) {

    let celule = document.getElementById(mots).value = " ";
    console.log(Case); 


}
