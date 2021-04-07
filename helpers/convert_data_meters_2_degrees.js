//https://gist.github.com/onderaltintas/6649521
//Skript zum konvertieren 


var meters2degrees = function (x, y) {
    var lon = x * 180 / 20037508.34;
    var lat = Math.atan(Math.exp(y * Math.PI / 20037508.34)) * 360 / Math.PI - 90;
    return [lon, lat]
}
//Beispieldaten

x = 874339.538913801196031
y = 5810494.249466745182872

//x = 872648.404791355715133
//y = 5811804.934792154468596

//x = 875632.120069372933358
//y = 5811561.679097732529044

console.log(meters2degrees(x, y))