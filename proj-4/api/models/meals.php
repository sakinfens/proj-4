<?php

$dbconn = null;
if(getenv('DATABASE_URL')){
    $connectionConfig = parse_url(getenv('DATABASE_URL'));
    $conn = pg_connect(getenv("DATABASE_URL"));
    $host = $connectionConfig['host'];
    $user = $connectionConfig['user'];
    $password = $connectionConfig['pass'];
    $port = $connectionConfig['port'];
    $dbname = trim($connectionConfig['path'],'/');
    $dbconn = pg_connect(
        "host=".$host." ".
        "user=".$user." ".
        "password=".$password." ".
        "port=".$port." ".
        "dbname=".$dbname
    );
} else {
    $dbconn = pg_connect("host=localhost dbname=meals");
}
$dbconn = pg_connect("host=localhost dbname=meals");

class Meal {
  public $id;
  public $title;
  public $image;
  public $instructions;
  public function __construct($id, $title, $image, $instructions){
    $this->id = $id;
    $this->title = $title;
    $this->image = $image;
    $this->instructions = $instructions;
  }
}
class Meals {
  static function all(){
    $meals= array();
    $results = pg_query("SELECT * FROM meals");
    $row_object = pg_fetch_object($results);
    while($row_object){
      $new_meal = new Meal(
        intval($row_object->id),
        $row_object->title,
        $row_object->image,
        $row_object->instructions
      );
      $meals[] = $new_meal;
      $row_object = pg_fetch_object($results);
    }
    return $meals;
  }
  static function create($meal){
    $query = "INSERT INTO meals (title, image, instructions) VALUES ($1, $2, $3)";
    $query_params = array($meal->title, $meal->image, $meal->instructions);
    pg_query_params($query, $query_params);
    return self::all();
  }
  static function update($updated_meal){
      $query = "UPDATE meals SET title = $1, image = $2, instructions = $3 WHERE id = $4";
      $query_params = array($updated_meal->title, $updated_meal->image, $updated_meal->instructions, $updated_meal->id);
      $result = pg_query_params($query, $query_params);
      return self::all();
    }
    static function delete($id){
      $query = "DELETE FROM meals WHERE id = $1";
      $query_params = array($id);
      $result = pg_query_params($query, $query_params);
      return self::all();
    }
}
 ?>
