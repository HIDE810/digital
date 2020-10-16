function showValue(valA, valB, valC) {
    
    var a = valA && valC || !valA && !valC || valB;
    var b = !valA || valB && valC || !valB && !valC;
    var c = valA || !valB || valC;
    var d = !valA && !valC || !valA && valB || valB && !valC || valA && !valB && valC;
    var e = !valA && !valC || valB && !valC;
    var f = valA && !valB || valA && !valC || !valB && !valC;
    var g = valA && !valB || !valA && valB || valB && !valC;
    
    document.getElementById("a").innerHTML = a ? "&nbsp;---" : "&nbsp;";
    document.getElementById("b").innerHTML = b ? "|" : "&nbsp;";
    document.getElementById("c").innerHTML = c ? "|" : "&nbsp;";
    document.getElementById("d").innerHTML = d ? "&nbsp;---" : "&nbsp;";
    document.getElementById("e").innerHTML = e ? "|" : "&nbsp;";
    document.getElementById("f").innerHTML = f ? "|" : "&nbsp;";
    document.getElementById("g").innerHTML = g ? "&nbsp;---" : "&nbsp;";
    
    var output = [];
    
    if(a) output.push("a");
    if(b) output.push("b");
    if(c) output.push("c");
    if(d) output.push("d");
    if(e) output.push("e");
    if(f) output.push("f");
    if(g) output.push("g");
    
    console.clear();
    console.log(valA + ", " + valB + ", " + valC);
    console.log(output);
}

function funcRadio() {
    elementA = document.getElementById("idA");
    elementB = document.getElementById("idB");
    elementC = document.getElementById("idC");
    showValue(Boolean(Number(elementA.number.value)), Boolean(Number(elementB.number.value)), Boolean(Number(elementC.number.value)));
}