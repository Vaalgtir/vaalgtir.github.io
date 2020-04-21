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
        <a href="nondvp.php" class="navbar__item">L'Offre</a>
        <span>
            <div class="testButton">Essayer</div>
        </span>
    </div>
</nav>

    <?php include("squelette/header.php"); ?>

    <?php include("squelette/popup.php"); ?>

    <main>
        <section>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe magni quidem, esse repellendus animi quam eum, vitae maxime aut enim eos porro quia tenetur qui voluptate quod nesciunt unde. Cum aperiam deleniti porro ratione maiores atque obcaecati, expedita incidunt rem ipsam aliquam vitae eligendi nulla voluptatum! Dolore voluptas alias eum!
        </section>
    </main>

    <?php include("squelette/footer.php"); ?>

    <script src="//code.jquery.com/jquery-1.12.0.min.js"></script>
    <script src="js/script.js"></script>
</body>

</html>