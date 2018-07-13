$(function() {
    //----------------------
    //Naviguer dans le DOM:

    //Les méthodes next() et children() :
    // au clic sur un <h3> "affacer galerie...", la galerie qui suit s'efface :
    $('#galeries h3').click(function() {
        //$(this).next().fadeOut(1000); // la méthode next permet de sélectionner la balise directùent suivante, ici le <div.galerie> qui suit le <h3> sur lequel on a cliqué. Ainsi, quelque soit le <h3> cliqué, seule la balise qui le suit s'efface. next()peutprendre un sélecteur en argument pour ne sélectionner que les balises suivantes répondant à celui-ci.

        //cependant on voudrait effacer les <img> contennues dans les <div.galerie> :
        // $(this).next().children('img').fadeOut(1000); // la méthode children permet de sélectionner TOUs les éléments directs d'une balise, ici toutes les balises <img> qui se trouvent dans <div.galerie> qui suit directement le <h3> que l'on a cliqué. Sans argument, children() sélectionne les enfants directs sans distinction.
    });


        // La méthode parent() :
        // au clic sur une image, la bordure du parent devient rouge :
        $('#galeries img').click(function(){
            $(this).parent('.galerie').css({ border : '2px solid red'});
        }); 


        // La méthode prev() ( pour previous= précédent), contraire de next :

        $('p').click(function(){
            $(this).prev().css({ border : ''}); //prev() permet de sélectioner directement l'élément précedent, ici le <div.galerie> précedent dont on réinitialise la bordure. prev() peut prendre un sélecteur en argument pour ne sélectionner que des balises prédentes répondant à celui ci.
        }); 

        //la methode find() : au clic sur le bouton "effacer toutes les galeries , les <img> descendantes de #galeries sont effacées :
        $('button').eq(0).click(function(){
            $('#galeries').find('img').fadeOut(1000); //find() permet de sélectionner tous les descendants directs ou indirects correspondants au sélecteur précisé, ici "trouve" toutes les balises <img> qui se situent dans la balise #galerie
        });

        //Exercice "accordéon": vous rendez fonctionnel l'accordeon du HTML: au clic de "section 1" ou "section 2" ou "sectiio 3" le <div> qu'on quitte se ferme, alors que le ferùe<div> de la nouvelle s'ouvre. Utiliser la Classe "on" pour ouvrir un élément, et laa classe "off" pour fermer un élément.

        $('#accordion h3').click((function(){
           $('.on').addClass('off').removeClass('on');
           $(this).next().addClass('on').removeClass('off');
        }));
       
});//fin ready