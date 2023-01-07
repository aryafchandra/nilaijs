function getValue(){
    let detail = document.getElementById("detail").value;
    detail = detail.split(/\r?\n/);
    console.log(detail);
    // console.log(detail.at(-1))
    document.getElementById("test").innerHTML= calculateScore(detail);
}

function calculateScore(arrayScore){
    var total = 0;
    for (const element of arrayScore) {
        var percentage = element.split("\t").at(-2);
        var score = element.split("\t").at(-1);
        total += parseFloat(percentage.slice(0,-1)) / 100 * parseFloat(score);
      }
    return total;
}