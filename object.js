let person = {
    first_name :"saif",
    last_name : "mahin",
    age : 22,
    city: "dhaka",
    isBangladeshi : true,
    getName : () => {
        return (`my full name is ${person.first_name} ${person.last_name}`);
    }
}
console.log(person.getName());