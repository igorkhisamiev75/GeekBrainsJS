function CelsToFaringeyght() {
    let numCels = document.getElementById("numCels");
    let tFar = (9 / 5) * numCels.value + 32;
    document.getElementById("celsToFaring").innerHTML = "Температура по F " + String(tFar);
    alert(tFar);
}
document.getElementById("mybutton").onclick = CelsToFaringeyght;
