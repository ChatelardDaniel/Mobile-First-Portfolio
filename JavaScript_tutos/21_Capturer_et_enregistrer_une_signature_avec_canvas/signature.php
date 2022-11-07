<?php
if($_SERVER['REQUEST_METHOD']=== 'POST'){
    $data = json_decode(file_get_contents('php://input'), false);
    
    list($type, $data) = explode(';', $donnees->image);
    list(, $image) = explode(',', $data);

    $image_decodee = base64_decode($image);

    $fichier = md5(uniqid()). '.png';

    if(file_put_contents(__DIR__."/images/$fichier", $image_decodee)){
        echo 'Succcès';
    }else{
        echo 'Echec';
    }
}