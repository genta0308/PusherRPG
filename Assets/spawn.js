var prefab:GameObject;
function Start () {

}
private var clickPosition : Vector3;
function Update () {
if (Input.GetButtonDown("Fire1")) {
    clickPosition = Input.mousePosition;
    var offs=Vector3(Mathf.Sin(Time.time*7),0,0);
    clickPosition.z = 11f;
    clickPosition.y = 320f;

    Instantiate(prefab,Camera.main.ScreenToWorldPoint(clickPosition),transform.rotation);
    score.score -= 1;

}
}
