//1.) Diák infó [DiakInfo]
function diakInfo(name, team, course) {
    if (course == true) {
        console.log(name + " " + "[Team0" + team + "]" + " - Junior Frontend");
    }
    else {
        console.log(name + " " + "[Team0" + team + "]" + " - Webprogramozó");
    }
}
diakInfo("Minta Márton", 8, true);
diakInfo("Minta Márton", 8, false);
//2.) Magatartás - Szorgalom Szöveges értékelés [SzovegesErtekeles]
function szovegesErtekeles(grade) {
    var evaluating;
    evaluating = [
        ["hanyag", "rossz"],
        ["változó", "változó"],
        ["jó", "jó"],
        ["példás", "példás"],
    ];
    switch (grade) {
        case 2:
            return "[" + evaluating[0] + "]";
            break;
        case 3:
            return "[" + evaluating[1] + "]";
            break;
        case 4:
            return "[" + evaluating[2] + "]";
            break;
        case 5:
            return "[" + evaluating[3] + "]";
            break;
        default:
            return "Nem jó értéket adtál meg! Kérlek válassz 2,3,4,5 között!";
    }
}
console.log(szovegesErtekeles(1));
console.log(szovegesErtekeles(3));
//3.) Hárommal osztható számok listája [HarommalOszthatokSzama]
var arrayThree = [10, 23, 12, 24, 31, 33, 42, 20];
function HarommalOszthatokSzama(vizsgaltTomb) {
    var oszthatok = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i] % 3 == 0) {
            oszthatok++;
        }
    }
    return oszthatok;
}
console.log(HarommalOszthatokSzama(arrayThree));
//4.) Nyerőszám sorsoló [Nyeroszamok]
function randomszamGenerator(mennyiseg, alsoHatar, felsoHatar) {
    if (mennyiseg > felsoHatar - alsoHatar) {
        return [];
    }
    var randomSet = new Set();
    while (randomSet.size < mennyiseg) {
        randomSet.add(Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar);
    }
    return Array.from(randomSet);
}
console.log(randomszamGenerator(5, 1, 90));
