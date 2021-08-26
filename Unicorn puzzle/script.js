const board=
['a1','a2','a3','a4','b1','b2','b3','b4','c1','c2','c3','c4','d1','d2','d3','d4']

const pieces=
['p1','p2','p3','p4','q1','q2','q3','q4','r1','r2','r3','r4','s1','s2','s3','s4']

// Lager en liste med tilfeldige bildenavn (newImages):
const images=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
const imagesCopy = [...images]
const newImages = []
for (number in images){
    var randomIndex=Math.floor(Math.random()*imagesCopy.length);
    newImages.push(images[randomIndex]);
    delete imagesCopy[randomIndex]
}
// Legger bilder inn i brikkene utifra listen newImages:
for (number in newImages){
    var navnpåbilde = 'unicorn'+newImages[number];
    document.getElementById(pieces[number]).innerHTML=`
    <img src=${navnpåbilde} alt="brikke">
    `;
}






