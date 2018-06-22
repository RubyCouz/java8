//creation de la fonction
function parentalAdvisory(){
  //déclaration des variables
  var age = document.getElementById('age').value;
  var regex = /^[\d]+$/
  //vérification de la saisie
  if (regex.test(age) == false) {
    alert('Recommencez votre saisie');
  } else {
    //vérification de l'âge
    if (age >= 18) {
    alert('vous êtes majeur');
  } else {
    alert('vous êtes mineur');
  }
}
}
