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

// module.exports.listWithNumberActors = () =>{
//     return Movie
//         .aggregate([{
//         $project: {
//         id: "$id",
//         title: "$title",
//         NumberOfActor: {
//               $size: "$cast"
//             }
//           }
//         }])
//         .exec()
// }

// module.exports.listOfActors = () => {
//     return Movie
//         .aggregate([{$unwind: "$cast"},{$group: {_id: "$cast"}},{$sort: {_id: 1}}])
//         .exec()
// }

// module.exports.listActorMovie = () => {
//     return Movie.aggregate([
//         {
//           $unwind: "$cast"
//         },
//         {
//           $group: {
//             _id: "$cast",
//             films: {
//               "$addToSet": {
//                 "id": "$id",
//                 "title": "$title"
//               }
//             }
//           }
//         }
//       ])
//       .exec()
// }

// module.exports.listMovieGenre = () => {
//     return Movie.aggregate([
//         {
//           $unwind: "$genres"
//         },
//         {
//           $group: {
//             _id: "$genres",
//             films: {
//               "$addToSet": {
//                 "id": "$id",
//                 "title": "$title"
//               }
//             }
//           }
//         }
//       ])
//       .exec()
// }

// module.exports.newMovie = (movie) => {
//     var newPost = new Movie
//     ({
//         content: movie.content
//     })
//     return newPost.save()
// }

// module.exports.delete = id =>{
//     return Movie
//         .findByIdAndDelete(id)
//         .exec()
// }

// module.exports.lookUpByMyId = id  => {
//     return Movie
//         .findOne({id: id})
//         .exec()
// }
