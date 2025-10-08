<?php 
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    try {
        $nombre = $_POST["nombre"];
        $apellidos = $_POST["apellidos"];
        $edad = $_POST["edad"];
        $email = $_POST["email"];
        $numero = $_POST["telefono"];
        $datosRecibidos = json_encode(["serverResponse" => "Success","nombre" => $nombre, "apellidos" => $apellidos, "edad" => $edad, "email" => $email, "numero" => $numero]);
    
        echo $datosRecibidos;
    } catch (Exception $e) {
        $errorMostrar = "Ha ocurrido un error:" .$e->getMessage();
        echo json_encode(["error" => $errorMostrar]);
    }

}

?>