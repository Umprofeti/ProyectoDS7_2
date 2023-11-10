<?php 
class Conexion {

    private $host = "localhost";
    private $user = "root";
    private $pass= "";
    private $db = "ds7";
    private $conn;

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