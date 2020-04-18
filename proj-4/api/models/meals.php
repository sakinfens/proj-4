<?php

class Meal{
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
  static functions all(){
    $meals = array();

    $results = pg_query("SELECT *FROM meals")
  }
}

 ?>

 INSERT INTO meals (title, image, instuctions) VALUES ('Boiling Water', 'https://images.radio.com/kvilfm/boiling_water_775x515.jpg', 'put water in the pot then turn up the heat');
