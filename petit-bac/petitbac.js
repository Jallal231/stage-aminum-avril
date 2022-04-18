console.log("Début du petit bac");

let petitbac = document.getElementById("tableSaisie");

let btnAjouter = document.getElementById("bouton_ajouter");
btnAjouter.addEventListener("click", ajouter);

let btnClean = document.getElementById("bouton_clean");
btnClean.addEventListener("click", clean);

let btnGenerer = document.getElementById("bouton_generer");
btnGenerer.addEventListener("click", genererLETTRE);

let btnRenitialiser = document.getElementById("bouton_renitialiser");
btnRenitialiser.addEventListener("click", renitialiser);



// DEBUT DE MA FONCTION  AJOUTER



function ajouter() {


    let tr = document.createElement("tr");
    tr.classList.add("rajout_ligne")
    
    console.log(tr);
    ajouterCellule("Lettre", tr);
    ajouterCellule("Nom", tr);
    ajouterCellule("Prenom", tr);
    ajouterCellule("Objet", tr);
    ajouterCellule("Animaux", tr);
    ajouterCellule("Métiers", tr);
    ajouterCellule("Pays", tr);
    ajouterCellule("Fruits", tr);
    petitbac.appendChild(tr);
}


function ajouterCellule(mots, tr) {

    let cellule = document.createElement("td"); 
    let saisie = document.getElementById(mots).value;
    cellule.innerText = saisie;
    tr.appendChild(Case);

}



// DEBUT DE MA FONCTION CLEAN 

 
function clean() {

    nettoyerCellule("Lettre");
    nettoyerCellule("Nom");
    nettoyerCellule("Prenom");
    nettoyerCellule("Animaux");
    nettoyerCellule("Métiers");
    nettoyerCellule("Pays");
    nettoyerCellule("Fruits");

}
 
 
function nettoyerCellule(mots) {

    let cellule = document.getElementById(mots).value = " ";
    console.log(cellule);  
    // celule.innerText =" ";
    console.log(cellule); 



}

 
// DEBUT DE MA FONCTION GENERER
 
 
function genererLETTRE() {
    let min = 1;
    let max = 26;
    let num_lettre = Math.round(Math.random() * (max - min) + min);
    let lettre = String.fromCharCode(64 + chiffre);
    console.log(lettre);


    let maLettre = document.getElementById("Lettre_de_jeu");
    console.log(maLettre);
    maLettre.innerText = lettre;
}

 
 // DEBUT DE MA FONCTION RENITIALISER 
  

function renitialiser() {
    let liste_lignes = document.getElementsByClassName('rajout_ligne')
         // console.log(rajout_ligne);
    //let nb_elements = liste_lignes.length
         for (let  element in liste_lignes){

             
         liste_lignes[element].innerHTML=""


    }
      
