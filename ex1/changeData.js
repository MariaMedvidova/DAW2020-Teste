'use strict';

const fs = require('fs');
let rawdata = fs.readFileSync('data.json');
let data = JSON.parse(rawdata);

function getPosition(string, subString, index) {
  return string.split(subString, index).join(subString).length;
}

//"title": "Registo de batismo n.º 2: Cândida. Pai: José Figueira Quintal; Mãe: Maria Arcénia de Jesus",

data.forEach((b)=>{
    var id = b.ref.replace(/\//g, "_")

    var name = b.title.substring(
        b.title.indexOf(":") + 2, 
        getPosition(b.title, ".", 2)
    );

    var father = b.title.substring(
        getPosition(b.title, ":", 2)+2, 
        getPosition(b.title, ";", 1)
    );

    var mother = b.title.substring(
        getPosition(b.title, ":", 3)+2, 
        b.title.length
    );

    var registerNumber = b.title.substring(
        getPosition(b.title, "º", 1)+2, 
        getPosition(b.title, ":", 1)
    );

    var year = b.date.substring(0, 4);
    
    b.year = year;
    b._id = id;
    b.name = name;
    b.father = father;
    b.mother = mother;
    b.registerNumber = registerNumber;
})

fs.writeFileSync('data.json', JSON.stringify(data));