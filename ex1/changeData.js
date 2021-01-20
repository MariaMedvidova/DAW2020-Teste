'use strict';

const fs = require('fs');
let rawdata = fs.readFileSync('data.json');
let data = JSON.parse(rawdata);

function getPosition(string, subString, index) {
  return string.split(subString, index).join(subString).length;
}

//"title": "Registo de batismo n.º 2: Cândida. Pai: José Figueira Quintal; Mãe: Maria Arcénia de Jesus",

data.forEach((b)=>{
    var name = b.title.substring(
        b.title.indexOf(":") + 2, 
        getPosition(b.title, ".", 2)
    );

    var father = b.title.substring(
        b.title.indexOf(":") + 2, 
        getPosition(b.title, ".", 2)
    );

    var mother = b.title.substring(
        b.title.indexOf(":") + 2, 
        getPosition(b.title, ".", 2)
    );

    b.name = name;
    b.father = father;
    b.mother = mother;
})

fs.writeFileSync('data.json', JSON.stringify(data));