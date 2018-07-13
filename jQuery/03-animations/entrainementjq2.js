// Les animatiions jQuery

$(function(){


    //Déclarer une fonction callback qui annonce la fin d'une animation (on s'en servira plus loin ):
    function finAnim() {
        alert(' Animation finie !');
    }

    //----------------------
    // Les animation FADE : fadeIn(), fadeOut(), fadeToggle() et fadeTo :

    $('#fadein').click(function(){
        $('#rouge').fadeIn(); // fait apparaitre un élément en fondu (en jouant sur l'oppacité) pendant la durée spécifiée en ms. Sans argument, jQuery prend une valeur par défaut.
        $('#bleu').fadeIn(2000); //même effet en 2s
        $('#vert').fadeIn(1000).delay(1000).fadeOut(1000, finAnim); // on peut enchaîner les animations les unes à la suite des autres. On appelle la fonction callback finAnim à la fin du fadeOut().Attention pas de () sinon elle s'exécute sans attendre l'ordre du fadeOut
    });

    // Au clic sur le bouton #fadeOut, l'image #imageDisp disparaît en fondu en 1s:
    $('#fadeout').click(function(){
        $('#imageDisp').fadeOut(1000);
    });

    //Alterner le fadeIn() et le fadeOut() avec fadeToggle :
    $('#interr').click(function(){
        $('#black').fadeToggle(1000); //Alterne le fadeIn() et le fadeOut() en 1s.
    });

    //fadeTo :
    $('#exo1').click(function(){
        $('#orange').fadeTo(2000, 0.2);
        $('#violet').fadeTo(2000, 0.5);
    });

    //-------------------
    //Les animations Slide : slideDown(), slideUp() et slideToggle() :

    $('#barre').click(function(){
        // $('#rideau').slideDown(1000);// fait aparaître l'élément avec un mouvement de glissement vers le bas. Pour aller vers le haut : slideUp().
        $('#rideau').stop().slideToggle(1000); //stop() permet d'arrêter une animation en cours lorsqu'on reclique avant son éxécution totale (sinon les animations s'éxécutent autant de fois que des clics), et enchaîne sur l'animation suivaante.
    });    
    // $('#barre').click(function(){
    //     $('#rideau').slideUp(1000);
    // });    

    //----------------------
    //Les animations ANIMATE :
    //Les animations de type "animate" agissent sur les propriétés CSS numériques telles que le positionnement top, left, right, bottom, ou encore les tailles, l'oppacité, etc.Comme par défaut les éléments HTML ont une position "static" en CSS, nous sommes obligés de leur mettre une position "relative" ou "absolute" pour pouvoir déplacer avec animate().

    //Animate 1: une animation simple :
    $('#anim1').click(function() {
        $('#un').animate({ right : '-820px'}, 3000);// les propriétés CSS se mettent dans un objet entre accolades (et entre guillemets si elles contiennent un tiret). -820px est exprimé par rapport à la position d'origine de l'élément. Notez que l'on n'est pas obligé de préciser "px" car c'est l'unité par défaut 
    });

    //Animation 2 : 2 propriétés CSS dans la même animation :
    $('#anim2').click(function(){
        $('#deux').animate({ top : '-150px', left : '100px'},{ duration: 1000, easing : 'linear' });// on obtient une diagonale entre la position d'origine et la position finale : -150px et 100px sont par rapport à la position d'origine. O peut mettre les options de l'animation dans un second objet entre des {}. "duration" = durée en ms, "easing" = accélération/ralentissement de l'animation (valeur "linear" ou "swing" dans la version de base jQuerry, sinon utiliser une bibliothèque complémentaire)
    });

    // Animation 3 : 2 animations consécutives :
    $('#anim3').click(function(){
        $('#trois').animate({ top : '+=100px', left : '+=100px'  }, 1000)
                   .animate({top : '-=100px', left : '+=100px' }, 1000); //on peut passe un opérateur += ou -= en valeur d'une propriété CSS dans une animate (), ce qui poursuit indéfiniment l'animation = variation en relatif par rapport à la dernière position.
    }); 

    // Animation 4 : une animation continue :
    function anim4() {
        $('#quatre').animate({ left : '400px'  }, 3000)
                    .animate({ left : '0px' }, 3000, anim4);// 0px signifie 0 par rapport à la position d'origie = reviens à position d'origine. On aurait pu mettre -400px à la place. On peut mettre une fonction callback dans animate(), elle s'éxécute une fois l'animation complétement terminée. Ainsi, ici on appelle la fonction elle-même à chaque fin d'animation.
    };
    function vaEtVien() {  $('#anim4').click(anim4)}; // Ma fonction avec le click dans un nouvelle fonction vaEtVien.
   
    vaEtVien(); // on appelle la fonction qui contient notre fonction anim4.
    

    

   






});// fermeture ready