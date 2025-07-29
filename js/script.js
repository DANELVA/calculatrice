// Variable pour savoir si le dernier affichage est un résultat
var dernierEstResultat = false;

// Fonction appelée quand on clique sur un bouton (chiffre ou opérateur)
function elementRecup(valeur) {
  var ecran = document.getElementById('calc_resultat'); // On récupère l'affichage

  // Si on appuie sur le bouton "←" (effacer)
  if (valeur === 'clean') {
    // Si le dernier affichage était un résultat ou une erreur, on efface tout
    if (dernierEstResultat || ecran.value === "Erreur") {
      ecran.value = '0'; // On remet à zéro
    } 
    // Sinon, on efface un seul caractère
    else if (ecran.value.length > 1) {
      ecran.value = ecran.value.slice(0, -1); // Supprime le dernier caractère
    } 
    else {
      ecran.value = '0'; // Si un seul caractère, on remet à zéro
    }
    dernierEstResultat = false; // On peut recommencer à taper
    return;
  }

  // Si le dernier affichage était un résultat
  if (dernierEstResultat) {
    // Si on tape un chiffre ou un point, on recommence un nouveau calcul
    if (/[0-9.]/.test(valeur)) {
      ecran.value = valeur;
    } 
    // Si on tape un opérateur (+, -, *, /), on continue avec le résultat
    else {
      ecran.value += valeur;
    }
    dernierEstResultat = false;
    return;
  }

  // Si l'écran affiche 0, on le remplace par le nouveau chiffre
  if (ecran.value === '0') {
    ecran.value = valeur;
  } 
  // Sinon, on ajoute la nouvelle valeur à la suite
  else {
    ecran.value += valeur;
  }
}

// Fonction appelée quand on clique sur le bouton "="
function reponse() {
  var ecran = document.getElementById('calc_resultat'); // On récupère l'affichage
  try {
    // On évalue l'expression (exemple : "12+3*2")
    ecran.value = eval(ecran.value).toString(); // On affiche le résultat
  } catch (e) {
    // Si erreur dans le calcul (ex : "12++"), on affiche "Erreur"
    ecran.value = "Erreur";
  }
  dernierEstResultat = true; // On signale qu'un résultat a été affiché
}
