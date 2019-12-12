// A inclure en tant que <script> dans votre <head>.

const switchButtonSelector = '#switch-btn'
const secondThemeClass = 'theme-b'

// Permet d'attendre que toute la page soit chargée, pour avoir accès à tous les éléments.
// En détail: j'écoute l'évènement correspondand au chargement complet du contenu,
// et au moment où il intervient, j'exécute la function qui suit.
document.addEventListener('DOMContentLoaded', function() {
  
  // Les scripts Javascript se réexécutent à chaque chargement de nouvelle page.
  // Donc pour éviter que le thème ne soit reset à chaque changement de page, je dois conserver une valeur entre les pages.
  // localStorage est une mini base de données dans le navigateur, qui me permet de conserver des données sur tout mon site.
  
  // Au chargement de la page, je vérifie donc dans le localStorage si le thème avait déjà été modifié dans une autre page.
  const isSecondTheme = localStorage.getItem(secondThemeClass)
  if (isSecondTheme) {
    document.body.classList.add(secondThemeClass)
  }
  
  // Pour changer Je récupère l'élément bouton.
  const switchButton = document.querySelector(switchButtonSelector)
  
  // J'écoute l'événement de clic sur le bouton, et au moment où il intervient, j'exécute la fonction qui suit.
  switchButton.addEventListener('click', function() {
    
    // Si le second thème est déjà en place,
    // je retire la clé du localStorage et la classe CSS du <body>, pour ne plus écraser les styles du thème par défaut.
    if (isSecondTheme) {
      document.body.classList.remove(secondThemeClass)
      localStorage.removeItem(secondThemeClass)
    } 
    // Si le second thème n'est pas en place,
    // j'assigne dynamiquement la classe CSS sur <body>, ce qui me permet d'écraser les styles du thème par défaut,
    // et je lui assigne une clé dans le localStorage.
    else {
      document.body.classList.add(secondThemeClass)
      localStorage.setItem(secondThemeClass, 'ok')
    }
    
  })
})