<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />

    <link rel="stylesheet" href="style/css/style.css">
    <link rel="stylesheet" type="text/css" href="fontawesome/css/all.css">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet">

    <title>Outil CRM Définition : Prospection commerciale et de suivi</title>
</head>

<body>
    <nav class="navbar ">
        <a href="index.php" class="logo"><img src="image/navbar/logiciel-de-prospection.png" alt="logo"></a>
        <div class="wrapperBurger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
        <div class="wrapperLink">
            <span class="navbar__item">Le CRM</span>
            <div class="wrapperDropidown">
                <!-- ATTENTION les scipts et le css est déjà codé pour l'ajout d'un onglet dropdown, te retape pas le boulot !!! -->
                <div class="dropidown-button">
                    <a href="leFichier.php" class="navbar__item navbar__item--onPage">Le Fichier</a>
                    <ul class="dropidown-menu">
                        <li><a href="leFichier.php">Pour quoi un ficher ?</a></li>
                    </ul>
                </div>
            </div>
            <a href="offre.php" class="navbar__item">L'Offre</a>
            <span>
                <div class="testButton">Essayer</div>
            </span>
        </div>
    </nav>

    <?php include("squelette/header.php"); ?>

    <?php include("squelette/popup.php"); ?>

    <main>
        <section>
            <div class="title">
                <h1>Un fichier complet</h1>
                <div class="chevron">
                    <i class="fas fa-3x fa-chevron-down"></i>
                </div>
            </div>

            <div class="wrapperContent">
                <div class="wrapperDiagramme">
                    <div>
                        <canvas id="diagramme"></canvas>
                        <h1>Plus de 1,2 Millions de Sociétés françaises de <span>toutes tailles.</span></h1>
                    </div>
                    <div>
                        <canvas id="diagramme2"></canvas>
                        <h1>Plus de 1,2 Millions de Sociétés françaises de <span>toutes activités.</span></h1>
                    </div>
                </div>

                <div class="line line--leFichier">
                    <img src="image/leFichier__content/RGPD.jpg"
                        alt="RGPD" class="img__line1--leFichier borderFade">
                    <div class="content__line1--leFichier">
                        <h2>Des fichiers sécurisés et Constamment mis à jour</h2>
                        <p>
                            Les fichiers proposés par Pré-CRM™ proviennent de sources de données légales et fiables.
                        </p>
                        <p>
                            Ces fichiers proviennent uniquement de sources officielles partenaires de A-QUIA (Éditeur).
                        </p>
                        <p>
                            Pour en garantir le meilleur niveau de qualité possible, les fichiers Pré-CRM™ sont mis à jour quotidiennement.
                        </p>
                        <p>
                        Conformément aux directives de la Commission Européenne portant sur la protection des données à 
                        caractère personnel au regard de la protection de la vie privée et des libertés et droits fondamentaux 
                        des personnes, les serveurs et données de Pré-CRM™ sont hébergées en France.
                        </p>
                    </div>
                </div>

                <div class="line line2">
                    <div class="contactSheet img__line2--leFichier"></div>
                    <div class="content__line2--leFichier">
                        <h2>Votre site internet : Votre autre source de prospects </h2>
                        <p>
                            La relation clients rendue plus simple et plus fluide.
                        </p>
                        <p>
                            Le formulaire de contact de votre site web se connecte directement au logiciel et 
                            vous permet de retrouver l'ensemble de vos contacts en ligne en toute simplicité 
                            et de façon la plus intuitive. Votre site internet devient enfin un outil central 
                            du développement de vos ventes.
                        </p>
                        <p>
                            Les demandes sont directement transformées en opportunités et l'expérience client est radicalement transformée. 
                        </p>
                    </div>
                </div>

                <div class="line">
                    <div class="content__line3--leFichier">
                        <h2>Un fichier à jour pour un développement commercial optimal </h2>
                        <p>
                            Un fichier à jour pour un développement commercial optimal
                        </p>
                        <p>
                            Nous vous offrons un fichier de près de 470 000 entreprises françaises pour mener 
                            (Dans la limite des conditions particulières de vente) toutes les ciblages nécessaires 
                            à votre prospection.
                        </p>
                        <p>
                            Mis à jour toutes les jours, ce fichier assure un haut niveau de qualité des données 
                            pour une recherche clients exhaustive à la hauteur de vos besoins 
                        </p>
                        <p>
                            La base de données de contacts qualifiés, transformée en opportunités en quelques clics.
                        </p>
                    </div>
                    <img src="image/leFichier__content/location_map2.jpg"
                        alt="Carte de France de l'application" class="img__line3--leFichier borderFade">
                </div>
            </div>
        </section>
    </main>

    <?php include("squelette/footer.php"); ?>

    <script type="text/javascript" src="//code.jquery.com/jquery-1.12.0.min.js"></script>
    <script type="text/javascript" src="js/Chart.js"></script>
    <script type="text/javascript" src="js/leFichier.js"></script>
    <script type="text/javascript" src="js/script.js"></script>
</body>

</html>