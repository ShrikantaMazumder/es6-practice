const name = "Shrikanta Mazumder";
console.log(name);

const numbers = [12,80,90];
numbers[0] = 70;
console.log(numbers);
numbers.push(100);
console.log(numbers);

// it will generate error
// numbers = [14,46,54];


/**
 * Individual items can be changed. But hole object can not be changed
 * It will generate error
 */
const studentDetails = {
    name: "Shrikanta Mazumder",
    age: 24,
    address: "Chattogram, Bangladesh"
}
console.log(studentDetails);

//Let

let userName = "Black Hawk";
console.log(userName);
userName = "Pirate John";
console.log(userName);