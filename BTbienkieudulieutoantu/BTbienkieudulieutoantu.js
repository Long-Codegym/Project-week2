//bat tap1
function sumMedium(){
    let inputPhysic;
    let inputChemsitry;
    let inputBiology;
    inputPhysic = prompt("Enter the physic");
    inputChemsitry = prompt("Enter the chemitry");
    inputBiology = prompt("Enter the biology");
    let physic = parseInt(inputPhysic);
    let chemitry = parseInt(inputChemsitry);
    let biology = parseInt(inputBiology);
    let sum = physic+chemitry+biology;
    let medium = sum/3;
    document.write(" Sum =" + sum);
    document.write(" medium ="+ medium);
}


// bai tap 2
function degreeCtoF() {
    let degreeC;
    let degreeF;
    degreeC = prompt("Enter the C");
    degreeF = prompt("Enter the F");
    let C = parseInt(degreeC);
    let F = parseInt(degreeF);
    let CtoF = 9/5 * C + 32;
    document.write("F=" +CtoF)
}

// bai tap 3, 4
function perimeterAcreage() {
    let inputPi;
    let inputDiameter;
    let inputRadius;
    inputPi = prompt("nhập Pi");
    inputDiameter = prompt("nhập đường kính diameter ");
    inputRadius = prompt("nhập bán kính radius");
    let pi = parseInt(inputPi);
    let r1 = parseInt(inputDiameter);
    let r2 = prompt(inputRadius);
    let perimeter = r1 * pi;
    let acreage = r2^2 * pi;
    document.write("perimeter =" + perimeter);
    document.write("acreage =" + acreage);
}


