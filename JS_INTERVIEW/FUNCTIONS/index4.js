// create a fn that builds a username from full name

function buildUsername(fullName) {
    // remove spaces and convert to lowercase
    return fullName.replace(/\s+/g, '').toLowerCase();
}

// Usage
let username = buildUsername("Samridhi Sahu");
console.log(username);  // "samridhisahu"

// replace(/\s+/g, '') → removes all spaces


function buildUsername(fullName) {
    let parts = fullName.trim().split(" "); // split by space
    let initials = parts[0][0].toLowerCase(); // first letter of first name
    let lastName = parts[parts.length - 1].toLowerCase(); // last name
    return initials + lastName;
}

// Usage
console.log(buildUsername("Samridhi Sahu"));  // "ssahu"
console.log(buildUsername("John Doe"));       // "jdoe"



function buildUsername(fullName) {
    let parts = fullName.trim().split(" ");
    let initials = parts[0][0].toLowerCase();
    let lastName = parts[parts.length - 1].toLowerCase();
    let randomNum = Math.floor(Math.random() * 100); // 0-99
    return initials + lastName + randomNum;
}

console.log(buildUsername("Samridhi Sahu"));  // "ssahu42"
