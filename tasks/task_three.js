let profile = {
    name: 'Chris',
    age: 50,
    city: 'Amawbia',
    occupation: 'Web developer'
};
for (let key in profile) {
    console.log(`${key}:${profile[key]}`) // output is Name:Chris, age:50, city:Amawbia, occupation:web developer
  }