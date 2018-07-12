//Ce fichier est en jQuery

/* 
Document ready :
Les deux lignes suivantes ont la même signification : éxécuter le code JS aprés éavoir chargé le code HTML. Par conséquent, le lien vers la page JS peut se faire n'importe où dans la page HTML (dans le <head> ou avant la fermeture de <body>).
....

$(function(){
    //ici vous mettez tout votre code jQuery
});

Ou encore, autre syntaxe :
$(document).ready(function(){
      //ici vous mettez tout votre code jQuery
});
*/
$(function(){
    // le code s'éxécutera une fois le document HTML totalement chargé

    //----------
    //Fonction principale de jQuery, alias $, selecteur et événement:
    $('#monBouton').click(function(){//sélectionne la balise #monBouton et au clic appelle lafonction anonyme qui suit :
        $('#carre').hide();// sélectionne la balise #carre et la cache.
    });
    jQuery('#monBouton').click(function(){
        jQuery('#carre').hide();
    }); //En réalité le $ remplace le mot "jQuery" dont il est un alias. Les deux font la même chose : ils créent un objet jQuery.

    $('#carre').click(function(){ // selectionne la balise #carre et au clic => sélectionne toute les balise h3 et lles effaces
        $('h3').hide();
    });

    // Le contraire de hide() c'est show :

    jQuery('.photo').dblclick(function(){
        jQuery('#carre').show(1000);//hide() et show() peuvent prendre un argument : une durée en ms, ou encore 'slow' ou 'fast'
    }); 

    //pour alterner hide() et show() automatiquement:
    $('#interrupteur').click(function(){
        $('#on-off').toggle(); 
    }); 

    //--------------------
    //on() équivalent de addEventListener, eet son contraire off():
    $('#monBouton').on('click', function(){
        alert('déclanchement de la methode on');
    });//on permet d'associer un événement à un élément comme le ferai addEventLister en JS "pur".La seule différence ente la syntaxe ligne 2 et celle-ci réside dans le fait que cette dernière marche aussi avec les éléments créer dynamiquement (= ajouter avec le jQuery).

   
     // $('#monBouton').off('click'); // En ajoutant cette ligne on dissocie les clicks de l'élément #monBouton : les clics précédemment liés au bouton ne fonctionnent plus ! C'est un moyen simple de supprimer un événement.

    //---------
    //Evénement hover, modifier du CSS depuis jQuery :

    $('#vert').hover(
        function(){
            $('#rouge').css({
                width : '300px',
                'background-color': 'yellow'
            });                
        }, function(){
            $('#bleu').css({
                width : '300px',
                'background-color': 'yellow'
            });
        });
    //L'événement hover est une combinaison de mouseover et mouseout en JS : il possède 2 fonctions anonymes qui s'éxecutent l'une quand on entre, l'autre quand on sort de l'élément.
    //La méthode css() permet de modifier des propriétés CSS écrites dans un objet : on les met entre {} et sont séparées par une ",". Notez que les propriétés CSS qui contiennent un tiret s'écrivent dans des quotes.
    
    //-----------------
    //Récupérer ou modifier la valeur d'un input avec val()

    $('#mdp1').change(function(){
        var texte = $('#mdp1').val(); // val() sans argument retourne la valeur saisie dans le champ #mdp1 (getter)

        $('#mdp2').val(texte); //val(argument) permet de changer la valeur du champ #mdp2 (setter)
    });
    
    //-----------------
    //le mot this : 
    // this est nécessaire lorsqu'on sélectionne plusieurs éléments simultanément et qu'on a besoin d'en cibler un en particulier.
    $('input').focus(function(){
        $(this).css({border : '2px solid red'}); // this se réfère à l'input sur lequel je suis en focus précisement, sans sélectionner l'autre
    });
    $('input').blur(function(){
        $(this).css({border : ''}); //Avec la méthode css() je remets la bordure à son état initial (correspondant au string vide '' ) de l'input duquel je viens de sortir (= this)
    });

    //-----------------
    //Accéeder aux propriétés CSS avec la méthode css():
    // (complément) :
    var position = $('#violet').css('position');
    console.log('La propriété position du div est :' + position); // la méthode css() avec seulement une propriété sous forme de string en argument est un getter : elle fournit la valeur de la propriété spécifiée, même si celle-ci n'est pas dans un attribut style (va chercher y comprit dans les feuilles de styles)

    //-------------
    // Accéder aux attributs des balises avec attr()
    if ( $('.modifAlt').attr('alt') == '') {
        $('.modifAlt').attr('alt' , 'paysage');// attr() avec un seul argument est un guetteur : il permet récupérer la valeur de l'attribut préciser(ici de alt)
                $('.modifAlt').attr('alt', 'paysage'); // attr() avec deux arguments est un setter : il permet d'attribuer une valeur à un attribut : attr('attribut', 'valeur').
    }

    //---------------
    // Modifier le contenu d'une balise avec text() ou html() :
    // html() équivault à innerHTML:
    $('.texte').eq(0).html('<span>j\'ai ra jouter du texte avec la metode html() et eq(0) pour le mettre sur la première p.texte </span>' );// Avec la methode html(), les balise HTML sont interprétées et donc insérées dans le code HTML.

    $('.texte').eq(1).text('<span>j\'ai ra jouter du texte avec la metode text() et eq(1) pour le mettre sur la première p.texte </span>' );//Avec la methode text(), tout est interprété comme du texte brut, y compris les éventuelles balises.

    //Note: text() et html() sans arguments sont des getters : ils récupèrent le contenu de la balise sélectionnée.

    //------------------
    //Ajouter ou retirer une classe (définie dans le CSS) à un élément :
    $('#survol').mouseenter(function(){
        $(this).addClass('rouge'); // Ajoute .rouge à l'élément
    });
    $('#survol').mouseleave(function(){
        $(this).removeClass('rouge'); // Retire .rouge à l'élément
    });

    $('#classBleu').click(function(){
        $('#survol').toggleClass('bleu'); //alterne addClass() et removeClass() 
        // pas de $(this) car l'élément sur lequel on agit et différent.
    });

    // Parcourir les éléments sélectionnées avec une boucle each():
    $('h4').each(function(indice){ // each() parcourt tous les <h4> et éxécute la fonction pour chacun (=each) d'entre eux. Cette fonction possède un paramètre (=indice) qui correpond à l'indice de l'élément sur lequel la boucle se trouve.

        $(this).text('Ce <h4> a pour indice le numéro ' + indice); 

        // on ajoute la classe "rouge"
        if ( indice % 2 == 0 ) { 
            $(this).addClass('rouge');
        }
    });

    //---------------

       // Les speudo-sélecteurs spécifique à jQuery :first, :last, :visible et :hidden :   
       // :visible et :hidden :

        $('#afficher').click(function(){
        $('#galerie img:hidden').css({ opacity : 0.2 }); //selectionne les images caché et leur met une opacité de 0.2 
        $('#galerie img').show(); //puis on affiche toutes les images (pour voir le résultat)
        $('#effacer').click(function(){
            $('#galerie img').hide();
        });       

         // :first et :last :
        $('#afficher-premier').click(function(){
            $('#galerie img:first').show(); // sélectionne la première image et l'affiche. Marche aussi avec :last pour la dernière. Si vous voulez cibler une image au milieu, utilisez la méthode eq().

            //On peut combiner les pseudos-sélecteurs :
            console.log($('#galerie img:hidden:first').attr('src'));
        });     
        // $('#afficher-premier').click(function(){
        //     $('#galerie img:last').show();
 
        // });
    });

});//  fin du document ready (à ne pas supprimer)