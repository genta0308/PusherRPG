#pragma strict
static var score : int;

function Awake(){
    score = 100;
}

function Start () {

}

function Update () {
  GetComponent.<GUIText>().text = score.ToString();

}
