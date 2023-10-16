//tableau contenant les faces du dé
const face_de = {
  1: "/image/de1.png",
  2: "/image/de2.png",
  3: "/image/de3.png",
  4: "/image/de4.png",
  5: "/image/de5.png",
  6: "/image/de6.png",
};
const valeurDe = Object.keys(face_de);
console.log(valeurDe);

const de = document.getElementById("de");

//finction qui nous permet de générer aléatoirement un chiffre en 0 et 5
function alea() {
  const aleatoire = Math.trunc(Math.random() * 6) + 1;
  return aleatoire;
}

function lancerDe(face) {
  let card = document.createElement("img");
  card.src = face_de[face];
  card.dataset.value = valeurDe[face - 1];
  card.classList.add("shadow");
  de.appendChild(card);
}

const lancement_partie = document.querySelector(".nouvelle_partie img");
const formulaire = document.querySelector(".formulaire");
const btn_formulaire = document.querySelector(".bouton");

//gestion du nom des nouveaux joueurs
const lancer_de = document.querySelectorAll(".lancer_de");
const form_player1 = document.getElementById("form_player1");
const form_player2 = document.getElementById("form_player2");
const name_player1 = document.getElementById("name_player1");
const name_player2 = document.getElementById("name_player2");
const hold = document.querySelector(".hold");
const score_p1 = document.querySelector(".score_p1");
const score_p2 = document.querySelector(".score_p2");
const actif_p1 = document.querySelector(".actif_p1");
const actif_p2 = document.querySelector(".actif_p2");
const shadow = document.querySelector("#de img");
const score_player1 = document.getElementById("score_player1");
const score_player2 = document.getElementById("score_player2");

//event qui fait apparaitre le block pour les noms des joueurs
lancement_partie.addEventListener("click", () => {
  formulaire.style.display = "block";
});

//event qui met à jour le nom des joueurs
btn_formulaire.addEventListener("click", () => {
  name_player1.innerHTML = form_player1.value;
  name_player2.innerHTML = form_player2.value;
  formulaire.style.display = "none";
  actif_p1.style.display = "block";
});

console.log(parseInt(score_p1.innerHTML));
//partie joueur 1
for (let lancer of lancer_de) {
  lancer.addEventListener("click", () => {
    de.children[0].remove();
    lancerDe(alea());
    let valeurDuDe = de.firstElementChild.dataset.value;
    score_player1.innerHTML =
      Number(score_player1.innerHTML) + Number(valeurDuDe);
    if (valeurDuDe == 1) {
      return (score_player1.innerHTML = 0);
    }

    hold.addEventListener("click", () => {
      score_p1.innerHTML =
        Number(score_p1.innerHTML) + Number(score_player1.innerHTML);
      score_player1.innerHTML = 0;
      if (parseInt(score_p1.innerHTML) >= 100) {
        alert("vous avez gagnééé");
        return (score_p1.innerHTML = 0);
      }
      console.log(score_p1.innerHTML);
    });
  });
}

//partie joueur 2
