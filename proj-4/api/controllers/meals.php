<?php
include_once __DIR__ . '/../models/meals.php';
header('Content-Type: application/json');
if ($_REQUEST['action'] === 'index') {
  echo json_encode(Meals::all());
} elseif ($_REQUEST['action'] === 'meal') {
  $request_body = file_get_contents('php://input');
  $body_object = json_decode($request_body);
  $new_meal = new Post(null, $body_object->name, $body_object->image, $body_object->body);
  $all_meals = Meals::create($new_meal);
  echo json_encode($all_meals);
} else if ($_REQUEST['action'] === 'update'){
  $request_body = file_get_contents('php://input');
  $body_object = json_decode($request_body);
  $updated_meal = new Meal($_REQUEST['id'], $body_object->name, $body_object->image, $body_object->body);
  $all_meals = Meals::update($updated_meal);
  echo json_encode($all_meals);
  } else if ($_REQUEST['action'] === 'delete') {
    $all_meals = Meals::delete($_REQUEST['id']);
    echo json_encode($all_meals);
  }
 ?>
