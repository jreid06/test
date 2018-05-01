var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'beve'
});

connection.connect();

connection.query('SELECT * FROM blog_posts', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

connection.end();
