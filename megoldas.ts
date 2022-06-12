//1.) Diák infó [DiakInfo]

function diakInfo(name, team, course) {
  if (course == true) {
    console.log(name + " " + "[Team0" + team + "]" + " - Junior Frontend");
  } else {
    console.log(name + " " + "[Team0" + team + "]" + " - Webprogramozó");
  }
}

diakInfo("Minta Márton", 8, true);
diakInfo("Minta Márton", 8, false);

//2.) Magatartás - Szorgalom Szöveges értékelés [SzovegesErtekeles]

function szovegesErtekeles(grade: number): void {
  let evaluating: [string, string][];
  evaluating = [
    ["hanyag", "rossz"],
    ["változó", "változó"],
    ["jó", "jó"],
    ["példás", "példás"],
  ];

  switch (grade) {
    case 2:
      console.log("[" + evaluating[0] + "]");
      break;
    case 3:
      console.log("[" + evaluating[1] + "]");
      break;
    case 4:
      console.log("[" + evaluating[2] + "]");
      break;
    case 5:
      console.log("[" + evaluating[3] + "]");
      break;
    default:
      console.log("Nem jó értéket adtál meg! Kérlek válassz 2,3,4,5 között!");
  }
}

szovegesErtekeles(1);
szovegesErtekeles(3);

//3.) Hárommal osztható számok listája [HarommalOszthatokSzama]

let arrayThree: number[] = [10, 23, 12, 24, 31, 33, 42, 20];
function HarommalOszthatokSzama(vizsgaltTomb: number[]): number {
  let oszthatok: number = 0;
  for (let i = 0; i < vizsgaltTomb.length; i++) {
    if (vizsgaltTomb[i] % 3 == 0) {
      oszthatok++;
    }
  }
  return oszthatok;
}

console.log(HarommalOszthatokSzama(arrayThree));

//4.) Nyerőszám sorsoló [Nyeroszamok]

function randomszamGenerator(
  mennyiseg: number,
  alsoHatar: number,
  felsoHatar: number
): number[] {
  if (mennyiseg > felsoHatar - alsoHatar) {
    return [];
  }
  const randomTomb: number[] = [];
  for (let i = 0; i < mennyiseg; i++) {
    let rnd = 0;
    do {
      rnd = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
    } while (randomTomb.indexOf(rnd)>=0);
    randomTomb.push(rnd);
  }
  return randomTomb;
}

console.log(randomszamGenerator(5,1,90));
