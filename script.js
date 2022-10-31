const quotes = {
    "1- Président BOBO": '" La rivière qui dort a oublié d’allumer son réveil. "',
    
    "2- Président BOBO": '" Un chien a bien 4 pattes mais il ne peut pas suivre deux chemins a la fois. "',

    "3- Président BOBO": '" Celui qui mange ne mange pas que dans le mangeoir. "',
    
    "4- Président BOBO": '" Comme on le dis chez nous: la chenille ne porte pas de lunette quand elle voit de l\'eau. "',

    "5- Président BOBO": '" Mais les Oreilles, On dirait les Oreilles d\'une Kala Kala hein. "',

    "6- Président BOBO": '" L\'oiseau sur le baobab ne doit pas oublier qu\'il a porté des lunettes!!! "',

    "7- Président BOBO": '"  Avec ta grosse fesse la, comme l\'hippopotame que le botwanga va finir par perdre son triple A. "',

    "1- Nelson Mandela": '" Le courage n\'est pas l\'absence de peur, mais la capacité de vaincre ce qui fait peur. "',

    "- Gandhi": '" Vis comme si tu devais mourir demain. Apprends comme si tu devais vivre toujours. "',

    "- Martin Luther King": '" Ce qui compte, chez un homme, ce n\'est pas la couleur de sa peau ou la texture de sa chevelure, mais la texture et la qualité de son âme."',

    "- Socrate": '" Le premier savoir est le savoir de mon ignorance : c\'est le début de l\'intelligence. "',

    "2- Nelson Mandela": '" Un gagnant est un rêveur qui n\'abandonne jamais. "',

}

document.getElementById('generate').addEventListener('click', () => {
    let authors = Object.keys(quotes); // renvoie un tableau contenant les noms des propriétés de l'objet quotes 
    let author = authors[Math.floor(Math.random() * authors.length)];
    let quote = quotes[author];

    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;
});