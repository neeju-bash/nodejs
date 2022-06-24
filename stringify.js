const user = {
    name: 'Jack',
    isMarried: false,
    age: 25,
  }
  
  const userJSON = JSON.stringify(user);
  console.log(userJSON); // {"name": "Jack", "isMarried": false, "age": 25}

  const jsonString = '{"name": "Jack", "isMarried": false, "age": 25}';
const parsedUser = JSON.parse(jsonString);

console.log(parsedUser); // {name: 'Jack', isMarried: false, age: 25}