console.log("test");
let id_generate = 0;
let liste = document.getElementById("ma_liste");
console.log(liste);


let mon_text6 = "finalemenet je suis arrivé a 9h10";
ajouterElement(liste, mon_text6);


let mon_text5 = "Ces bon j'ai reussi a me connecter a ma session";
ajouterElement(liste, mon_text5);

let mon_text4 = "Creation d'un nouvel element list";
ajouterElement(liste, mon_text4);

let mon_text3 = "Nouvel chose";
ajouterElement(liste, mon_text3);




function ajouterElement(ma_liste, mon_text) {
    let element = document.createElement("li");

    element.setAttribute('id', id_generate);
    id_generate = id_generate + 1;
    element.innerText = mon_text;
    ma_liste.appendChild(element);
}

let mon_text1 = "je cree le premier element avec la fonction";
ajouterElement(liste, mon_text1);

let mon_text2 = "La j'écris une deuxieme chose avec la fonction";
ajouterElement(liste, mon_text2);




//fonction à appeler lors du déclenchement de l'évènement click cu bouton ajouter


//blocks de code pour l'évenement ajout
let button_ajouter = document.getElementById("bouton_ajouter");
button_ajouter.addEventListener('click', ajouter)
// button.addEventListener("click", event => {
//     let text_saisie = document.getElementById("saisie").value
//     ajouterElement(liste, text_saisie);
// })

function ajouter() {

    let text_saisie = document.getElementById("saisie").value
    ajouterElement(liste, text_saisie);
    console.log(text_saisie);
}

//blocks de code pour l'évenement suppression



let button_supprimer = document.getElementById("bouton_supprimer");


button_supprimer.addEventListener('click', supprimer);


function supprimer() {

    let text_saisie = document.getElementById("saisie_supression").value;
    supprimerElement(liste, text_saisie);


}

function supprimerElement(ma_liste, mon_id ){

let element = document.getElementById(mon_id);
element.remove()

}

 
 
$('.btn').tilt({ scale: 1.1, speed: 1000 });
