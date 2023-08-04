<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Modifier user</title>
</head>
<body>
    modify user:

    <form action="" method="post">
        <p>saisir nom:</p>
        <input type="text" name="nom_util" id="nom" class="form-label rounded">
        <p>saisir prenom:</p>
        <input type="text" name="prenom_util" id="prenom" class="form-label rounded">
        <p>saisir mail:</p>
        <input type="text" name="mail_util" id="mail" class="form-label rounded">
        <p>saisir mdp:</p>
        <input type="text" name="mdp_util" id="mdp" class="form-label rounded">
        <p>saisir img:</p>
        <!-- <input type="text" name="img_util"> -->
        <input type="submit" value="Envoyer" class="btn btn-primary">
    </form>

    <script src="./asset/style/script.js"></script>
    
</body>
</html>