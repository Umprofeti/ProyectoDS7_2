<?php 
class Conexion {

    private $host;
    private $user;
    private $pass;
    private $db;
    private $conn;

    public function __construct($host, $user, $pass, $db) {
        $this->host = $host;
        $this->user = $user;
        $this->pass = $pass;
        $this->db = $db;
    }

    public function conectar() {
        $this->conn = new mysqli($this->host, $this->user, $this->pass, $this->db);
        if ($this->conn->connect_errno) {
            die("Fallo la conexión a MySQL: " . $this->conn->connect_errno . " " . mysqli_connect_error());
        }

        return $this->conn;
    }

    public function cerrar() {
        $this->conn->close();
    }
}
?>