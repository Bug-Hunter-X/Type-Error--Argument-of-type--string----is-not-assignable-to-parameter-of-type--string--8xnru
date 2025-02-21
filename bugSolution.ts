function greeter(person: string | string[]): string {
  if (typeof person === 'string') {
    return "Hello, "+ person + "!";
  } else {
    return "Hello, " + person.join(', ') + "!";
  }
}

let user = ["Jane User"];
let user2 = "Jane User";
console.log(greeter(user));//correct
console.log(greeter(user2));//correct