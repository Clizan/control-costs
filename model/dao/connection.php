<?php 
    class Conexao{
        private $host   = "localhost";
        private $dbname = "control_cost";
        private $user   = "root";
        private $pass   = "";
        private $connection;

        function conect(){
            try {
                $this->connection = new PDO("mysql:host=$this->host;dbname=$this->dbname", $this->user, $this->pass);
                // Habilita modo de erro do PDO
                $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                return $this->connection;
            } catch (PDOException $e) {
                die("Erro de conexão: " . $e->getMessage());
            }
        }
    }
?>