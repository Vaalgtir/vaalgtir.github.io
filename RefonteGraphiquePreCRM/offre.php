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
                    <a href="leFichier.php" class="navbar__item">Le Fichier</a>
                    <ul class="dropidown-menu">
                        <li><a href="leFichier.php">Pour quoi un ficher ?</a></li>
                    </ul>
                </div>
            </div>
            <a href="offre.php" class="navbar__item navbar__item--onPage">L'Offre</a>
            <span>
                <div class="testButton">Essayer</div>
            </span>
        </div>
    </nav>

    <?php include("squelette/popup.php"); ?>

    <main>
        <section>
            <div class="wrapperOffre">
                <div class="offreCloud">
                    <h1>Basic</h1>
                    <div class="suscriptionButton suscriptionButton--basic">Prospectez</div>
                    <p>Évolutions et Mises à jour en temps réel</p>
                    <p>Vos données BtoB sur un serveur privé</p>
                </div>
                <div class="offreSaas">
                    <h1>Advanced</h1>
                    <div class="suscriptionButton suscriptionButton--advanced">Prospectez</div>
                    <p>Base de données BtoB privée</p>
                    <p>Évolutions et Mises à jour en temps réel</p>
                </div>
                <div class="offreLocal">
                    <h1>Premium</h1>
                    <div class="suscriptionButton suscriptionButton--premium">Prospectez</div>
                    <p>Service de prospection commerciale sur vos serveurs</p>
                    <p>Évolutions, Mises à jour et Maintenance logicielle par A-QUIA</p>
                </div>
            </div>
            <div class="wrapperTab">
                <table class="tableOffre">
                    <thead>
                        <tr>
                            <td></td>
                            <th>Basic</th>
                            <th>Advanced</th>
                            <th>Premium</th>
                            <th>Personnalisé</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th class="categ">Pilotage business lite inclus</th>
                            <td class="colBasic"><i class="fas fa-check active"></i></td>
                            <td class="colAdvanced"><i class="fas fa-check active"></i></td>
                            <td class="colPremium"><i class="fas fa-check active"></i></td>
                            <td class="colPerso"><i class="fas fa-check"></i></td>
                        </tr>
                        <tr>
                            <th class="categ">Prise en main incluse</th>
                            <td class="colBasic"><i class="fas fa-check active"></i></td>
                            <td class="colAdvanced"><i class="fas fa-check active"></i></td>
                            <td class="colPremium"><i class="fas fa-check active"></i></td>
                            <td class="colPerso"><i class="fas fa-check"></i></td>
                        </tr>
                        <tr>
                            <th class="categ">Pilotage business full</th>
                            <td class="colBasic"><i class="fas fa-check"></i></td>
                            <td class="colAdvanced"><i class="fas fa-check active"></i></td>
                            <td class="colPremium"><i class="fas fa-check active"></i></td>
                            <td class="colPerso"><i class="fas fa-check"></i></td>
                        </tr>
                        <tr>
                            <th class="categ">Partage des prospects entre utilisateurs</th>
                            <td class="colBasic"><i class="fas fa-check"></i></td>
                            <td class="colAdvanced"><i class="fas fa-check active"></i></td>
                            <td class="colPremium"><i class="fas fa-check active"></i></td>
                            <td class="colPerso"><i class="fas fa-check"></i></td>
                        </tr>
                        <tr>
                            <th class="categ">Création de guides d'entretiens personnalisés</th>
                            <td class="colBasic"><i class="fas fa-check"></i></td>
                            <td class="colAdvanced"><i class="fas fa-check active"></i></td>
                            <td class="colPremium"><i class="fas fa-check active"></i></td>
                            <td class="colPerso"><i class="fas fa-check"></i></td>
                        </tr>
                        <tr>
                            <th class="categ">Gestion Multi-campagnes</th>
                            <td class="colBasic"><i class="fas fa-check"></i></td>
                            <td class="colAdvanced"><i class="fas fa-check active"></i></td>
                            <td class="colPremium"><i class="fas fa-check active"></i></td>
                            <td class="colPerso"><i class="fas fa-check"></i></td>
                        </tr>
                        <tr>
                            <th class="categ">Intégration SendinBlue</th>
                            <td class="colBasic"><i class="fas fa-check"></i></td>
                            <td class="colAdvanced"><i class="fas fa-check active"></i></td>
                            <td class="colPremium"><i class="fas fa-check active"></i></td>
                            <td class="colPerso"><i class="fas fa-check"></i></td>
                        </tr>
                        <tr>
                            <th class="categ">Paramétrage de l'application</th>
                            <td class="colBasic"><i class="fas fa-check"></i></td>
                            <td class="colAdvanced"><i class="fas fa-check"></i></td>
                            <td class="colPremium"><i class="fas fa-check active"></i></td>
                            <td class="colPerso"><i class="fas fa-check"></i></td>
                        </tr>
                        <tr>
                            <th class="categ">Reprise d'activité</th>
                            <td class="colBasic"><i class="fas fa-check"></i></td>
                            <td class="colAdvanced"><i class="fas fa-check"></i></td>
                            <td class="colPremium"><i class="fas fa-check active"></i></td>
                            <td class="colPerso"><i class="fas fa-check"></i></td>
                        </tr>
                        <tr>
                            <th class="categ">Accès au Fichier prospects Pré-CRM</th>
                            <td class="colBasic"><i class="fas fa-check"></i></td>
                            <td class="colAdvanced"><i class="fas fa-check"></i></td>
                            <td class="colPremium"><i class="fas fa-check active"></i></td>
                            <td class="colPerso"><i class="fas fa-check"></i></td>
                        </tr>
                        <tr class="avderline">
                            <th class="categ">Formation avancée</th>
                            <td class="colBasic"><i class="fas fa-check"></i></td>
                            <td class="colAdvanced"><i class="fas fa-check"></i></td>
                            <td class="colPremium"><i class="fas fa-check active"></i></td>
                            <td class="colPerso"><i class="fas fa-check"></i></td>
                        </tr>
                        <tr>
                            <th class="categ"><span class="action"><span class="cancel">Annuler modifications</span><span class="viewAll">View all</span></span></th>
                            <td class="colBasic"><div class="commandeButton commandeButton1">Passer commande</div></td>
                            <td class="colAdvanced"><div class="commandeButton commandeButton2">Passer commande</div></td>
                            <td class="colPremium"><div class="commandeButton commandeButton3">Passer commande</div></td>
                            <td class="colPerso"><div class="commandeButton commandeButtonPerso">Passer commande</div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </main>

    <?php include("squelette/footer.php"); ?>

    <script type="text/javascript" src="//code.jquery.com/jquery-1.12.0.min.js"></script>
    <script type="text/javascript" src="js/offre.js"></script>
    <script type="text/javascript" src="js/script.js"></script>
</body>

</html>