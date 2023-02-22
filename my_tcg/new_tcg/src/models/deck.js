export default class Deck {
  
    constructor(config) {
      this.cards = config.cards;
    }
  
    shuffle() {
      if (this.cards.length < 2) {
        return false;
      }
  
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
  
      return true;
    }
  
    insertAt(card, position = null) {
      if (position !== null) {
        this.cards.splice(position, 0, card);
      } else {
        this.cards.push(card);
      }
  
      return true;
    }
  
    draw() {
      if (this.cards.length === 0) {
        return false;
      }
  
      return this.cards.shift();
    }
  
    getCardsCount() {
      return this.cards.length;
    }
  }
  
  /**

   * Le constructeur accepte un objet de configuration avec une propriété cards contenant un tableau de cartes.

  La méthode shuffle() utilise l'algorithme de Fisher-Yates pour mélanger le tableau de cartes. Elle retourne true si le mélange a réussi, false si le tableau contient moins de deux éléments.

  La méthode insertAt() permet d'insérer une carte à une position donnée dans le tableau de cartes. Si la position n'est pas donnée, la carte est ajoutée à la fin du tableau. La méthode retourne true.

  La méthode draw() permet de piocher la première carte du paquet. Elle retourne la première carte du paquet et l'enlève du tableau. Si le tableau est vide, elle retourne false.

  La méthode getCardsCount() retourne le nombre de cartes actuellement dans le tableau.

   */