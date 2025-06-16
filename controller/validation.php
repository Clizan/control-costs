<?php
    # include connection with database
    include_once '../model/dao/connection.php';
    $objConnection = new Conexao();
    $conn = $objConnection->conect();

    # recovere the values that passing to scritp.js page
    $user     = $_POST['passUser'];
    $password = $_POST['passPassword'];

    # variable that must return to index.html page
    $return = null;

    if (!empty($user) && !empty($password)){ 
        try {
            # Searching in the database the 'user' and 'password'
            $stmt = $conn->prepare("SELECT user, password FROM ctrl_users WHERE user = :user AND password = :password");
            $stmt->bindParam(':user', $user, PDO::PARAM_STR);
            $stmt->bindParam(':password', $password, PDO::PARAM_STR);
            $stmt->execute();

            # return quantity datos of searching
            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($row) {
                $return = 1;
            } else {
                $return = 0;
            }

        } catch (Exception $e) {
            error_log("Erro de autenticação" .$e->getMessage());
            $return = 0;
        }
    } else {
        $return = 0;
    }

    # return value of the servere
    echo json_encode((int) $return);
?>