/**
 * Created by Evan on 12/24/15.
 */

/* Boolean Logic*/
/**
if(true) {
    alert("Hello, World!");
} else {
    alert("Something is very, very wrong.");
}
**/

/* While Loop*/
/**
var x = 1

while (x <= 10) {
    console.log("The current number is " + x);
    x++;
}
**/


/* For Loop */
/**
for (var i = 0; i < 10;  i++) {
    if (i < 5) {
        console.log(i + " is less than five.")
    } else if (i > 5) {
        console.log(i + " is greater than five.")
    } else {
        console.log(i + " is equal to five.")
    }
}
**/

/* Arrays */
/**
var listOfFriends = ["Christopher Botkin", "Genevieve Jones", "Alex Kincade"];

for (var i = 0; i < listOfFriends.length; i++) {
    console.log(listOfFriends[i] + " is a great friend of mine.");
}
**/


/* Functions */

function addTwoNumbers() {
    var firstNumber = document.getElementById("first_number").value;
    var secondNumber = document.getElementById("second_number").value;
    document.getElementById("result").innerHTML = Number(firstNumber) + Number(secondNumber);
}

/* Objects */
/**
var user = {
    first_name: "Evan",
    last_name: "Kincade",
    sayHello: function() {
        console.log("Hello, world!")
    }
};

user.sayHello();

user.email = "test@example.com";
user.sayBye = function() {
    alert("Bye!");
};
**/

/* Prototypes and Inheritance */
/**
var User = function(first_name, last_name, email) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;

};

User.prototype.sayHello = function() {
    console.log("Hello");
};
**/

