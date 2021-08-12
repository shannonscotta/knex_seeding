
// exports.seed = function(knex) {
//   // Deletes ALL existing entries
//   return knex('table_name').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('table_name').insert([
//         {id: 1, colName: 'rowValue1'},
//         {id: 2, colName: 'rowValue2'},
//         {id: 3, colName: 'rowValue3'}
//       ]);
//     });
// };

// seeds/initial_movies.js
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {id: 1, title: 'Vicky Cristina Barcelona', genre: 'drama', release_date: '2008-08-15'},
        {id: 2, title: 'Orfeu Negro', genre: 'drama', release_date: '1959-12-21'},
        {id: 3, title: 'Midnight in Paris', genre: 'drama', release_date: '2011-05-20'},
      ]);
    });
};