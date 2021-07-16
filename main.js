var people = ["Jay Shetty", "Sadhguru", "Robin Sharma", "Vishen Lakhiani", "Dr.Rangan Chatterjee"];
people.push("Will Smith");
people.pop();
people.shift();
people.sort();
people.reverse();
console.log (people);
document.getElementById("answer_one").innerHTML = people;

var people_length = people.length;
console.log (people_length);
document.getElementById("answer_two").innerHTML = people_length;

var first_name = "nishant";
var last_name = "Bothra";
var full_name = first_name.concat(last_name);
document.getElementById("answer_three").innerHTML = full_name;

var num = [3, 100, 339, 96, 0.5];
var max_num = Math.max.apply(Math, num);
/* min */
console.log(max_num);
document.getElementById("answer_four").innerHTML = max_num;

var book = ["Think Like A Monk", "The 5 Am Club", "Karma"];
var book_two = ["Becoming Supernetural", "Mind Body Heart", "The Monk Who Sold His Ferrari"];
var book_library = book.concat(book_two);
console.log(book_library);
document.getElementById("answer_five").innerHTML = book_library



