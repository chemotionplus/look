<!DOCTYPE html>
<html lang="fr" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Look</title>
    <link rel="stylesheet" href="css/cmplus.css">
    <link rel="stylesheet" href="css/dialog.css">
  </head>
  <body>
    <div class="main-container">
      <div class="logo-container">
        <div class="logo">
          <img src="media/images/look-logo.png" alt="">
        </div>
      </div>
      <div class="connection-action">
        <div class="login-button">
          <a href="#connection-modal" class="modal-link"><p>Se Connecter</p></a>
        </div>
      </div>
    </div>
    <?php
      include('layout/modal/connection-modal.php');
    ?>
    <script type="text/javascript" src="js/cmplus.js"></script>
  </body>
</html>
