// Baptism controller

var Baptism = require('../models/baptism')

//Returns baptisms list
module.exports.list = () => {
    return Baptism
        .find({})
        .exec()
}

module.exports.lookUpById = id  => {
    return Baptism
        .findById(id)
        .exec()
}

//Returns only a list with the names of individuals baptized alphabetically;
module.exports.listBaptized = () =>{
  return Baptism
    .distinct('name')
    .exec()
}

//Returns a list of pairs, year and number of baptisms in that year.
module.exports.listnumberPerYear = () =>{
  return Baptism
   .aggregate( [
    { $group: { _id: "$year", countOfBaptisms: { $sum: 1 } } }
 ] )
}

module.exports.listParents = () =>{
  return Baptism
  .aggregate([
    { $project : { _id : 1, father : 1, mother: 1 } }]
  )
    .exec()
}

module.exports.listByYear = (ano) =>{
  return Baptism
  .find({year: ano})
  .exec()
}