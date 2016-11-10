# stopWatch
stopWatch applicaiton in pure JS

Example of a stopWatch timer similiar to that found on the iOS

Cited - Chris Akers PA

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <!--<script src="app.js"></script>-->
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <div id="show" class="clockStyle">00 : 00 : 00 AM</div>
    <hr>
    <p id="text">Creativity is</p>
    <p id="text">intelligence having fun</p>
    <hr>
    <p>FawadYousuf</p>
    <script type="text/javascript">
        function startTime() {
    var cd = new Date();
    var diem = "AM"
    var h = cd.getHours();
    var m = cd.getMinutes();
    var s = cd.getSeconds();

    if (h == 0) {
    h = 12;
    }
    else if (h > 12) {
        h = h - 12;
        diem = "PM";
    }
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    var myClock =  h + " : " + m + " : " + s + " " + diem;
    document.getElementById("show").innerHTML = myClock;
    setTimeout("startTime()" , 1000);
}
startTime();

</script>
</body>

</html>
