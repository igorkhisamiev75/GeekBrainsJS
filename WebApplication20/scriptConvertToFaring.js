function CelsToFaringeyght() {
    let numCels = document.getElementById("numCels");
    let tFar = (9 / 5) * numCels.value + 32;
    let str = "Температура по F " + String(tFar);
    document.getElementById("celsToFaring").innerHTML = str;
   /* document.getElementById("celsToFaring").innerHTML = "Температура по F " + String(tFar);*/
    alert(str);
}
document.getElementById("mybutton").onclick = CelsToFaringeyght;
