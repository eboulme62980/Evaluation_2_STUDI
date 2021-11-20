<!DOCTYPE html>
<html lang="fr">

    <head>
        <meta charset="utf-8" />
        <meta name="author" content="Boulmé Emmanuel" />
        <meta name="copyright" content="Boulmé Emmanuel" />
        <meta 
        name="description" 
        content="Evaluation n°2 Studi Dynamiser votre site web avec Javascript"
        />       
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index,follow" />
        <!-- Font's Style -->
        <link 
            href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300&display=swap" 
            rel="stylesheet"
        >
        <!-- Bootstrap's Style -->
        <link 
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
            rel="stylesheet" 
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" 
            crossorigin="anonymous"
        >
        <!-- Personnal CSS's Style -->
        <link rel="stylesheet" href="css/diceCss.css" />        
        <title>Jeu de dés</title>
    </head>

    <!--======= HTML's content=======-->
    <body>

        <!--=======Javascript disabled's message=======-->
        <div class="no-javascript d-flex justify-content-center">
            <noscript>
                <h2>Problème de fonctionnement</h2>
                <p>Désolé mais le Javascript n'étant pas activé vous ne pourrez pas jouer à ce jeu !</p>
            </noscript>
        </div><!--=======Javascript disabled's message=======-->
        
        <!--=======Game's frame=======-->
        <div class="d-flex justify-content-center game-container">
            <div class="d-flex align-items-center">
                <div class="container panel">
                    <div class="row position-relative main-panel bg-white">                         
                        <div class="col-6 player-0-panel active d-flex flex-column">
                            <div class="player-name" id="player-0">Joueur 1</div>
                            <div class="player-global-score mb-auto" id="global-0">65</div>
                            <div class="player-current-panel">
                                <div class="player-current-label">En cours</div>
                                <div class="player-current-score" id="current-0">10</div>
                            </div>
                        </div>
                        <div class="col-6 player-1-panel d-flex flex-column">
                            <div class="player-name" id="player-1">Joueur 2</div>
                            <div class="player-global-score mb-auto" id="global-1">80</div>
                            <div class="player-current-panel">
                                <div class="player-current-label">En cours</div>
                                <div class="player-current-score" id="current-1">10</div>
                            </div>
                        </div>                        
                        <div class="col-1 panel-command position-absolute">
                            <div class="panel-command-inner d-flex flex-column">
                                <div class="inner1 mb-auto">
                                    <p class="p1 d-inline">Rejouer</p>
                                </div>
                                <div class="content-dice">
                                    <img class="dice" src="images/dice-faces/dice-3.svg" alt="Résultat du lancer"/>
                                </div>
                                <div class="inner2 d-flex flex-column">
                                    <div>
                                        <p class="p2 d-inline">Lancer</p>
                                    </div>
                                    <div>
                                        <p class="p3 d-inline">Bloquer<p>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>                    
                </div>
            </div>
        </div><!--=======Game's frame=======-->
        
        <!--Bootstrap's script-->
        <script 
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" 
            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
            crossorigin="anonymous">
        </script>
        
        <!--Personnal JS's script-->    
        <script src="js/diceGame.js"></script>
    </body><!--======= HTML's content=======-->

</html>