let trainers=[
    {
    name: "Rohit",
    age: 32,
    gender: "male",
    hobbies: ["cricket", "reading", "travel"],
    salary: 80000,
    isMarried: true,
    address: { city: "Pune", state: "Maharashtra" }
    },
    {
    name: "Harsha",
    age: 29,
    gender: "male",
    hobbies: ["gaming", "gym", "movies"],
    salary: 55000,
    isMarried: false,
    address: { city: "Nagpur", state: "Maharashtra" }
  },
  {
    name: "Avinash",
    age: 33,
    gender: "male",
    hobbies: ["programming", "reading", "hiking"],
    salary: 72000,
    isMarried: true,
    address: { city: "Nashik", state: "Maharashtra" }
  },
  {
    name: "Mohit",
    age: 33,
    gender: "male",
    hobbies: ["programming", "reading", "hiking"],
    salary: 72000,
    isMarried: true,
    address: { city: "Bengaluru", state: "Karnataka" }
  },
  {
    name: "Pradeep",
    age: 33,
    gender: "male",
    hobbies: ["programming", "reading", "hiking"],
    salary: 72000,
    isMarried: true,
    address: { city: "Goa", state: "Goa" }
  },
   {
    name: "Anjali Nair",
    age: 32,
    gender: "Female",
    hobbies: ["Dancing", "Cooking", "Writing"],
    salary: 70000,
    status: "Married",
    address: {
      street: "18 Marine Drive",
      city: "Kochi",
      state: "Kerala",
      pincode: 682001
    }
  },
  {
    name: "Ramesh Patel",
    age: 29,
    gender: "Male",
    hobbies: ["Cycling", "Movies", "Tech Gadgets"],
    salary: 62000,
    status: "Single",
    address: {
      street: "9 CG Road",
      city: "Ahmedabad",
      state: "Gujarat",
      pincode: 380009
    }
  },
  {
    name: "Divya Gupta",
    age: 26,
    gender: "Female",
    hobbies: ["Singing", "Drawing", "Volunteering"],
    salary: 50000,
    status: "Single",
    address: {
      street: "22 Connaught Place",
      city: "Delhi",
      state: "Delhi",
      pincode: 110001
    }
  },
  {
    name: "Harish Kumar",
    age: 38,
    gender: "Male",
    hobbies: ["Football", "Cooking", "Reading"],
    salary: 78000,
    status: "Married",
    address: {
      street: "34 Mount Road",
      city: "Chennai",
      state: "Tamil Nadu",
      pincode: 600002
    }
  },
  {
    name: "Neha Reddy",
    age: 30,
    gender: "Female",
    hobbies: ["Photography", "Traveling", "Fitness"],
    salary: 69000,
    status: "Single",
    address: {
      street: "89 Jubilee Hills",
      city: "Hyderabad",
      state: "Telangana",
      pincode: 500033
    }
  }
]

//1 
trainers=trainers.map(function(t){
    t.dept="development";
    return t;
})
console.log("After adding dept:", trainers);

let above30=trainers.filter(function(t){
    return t.age>30;
})
console.log("above 30",above30);

trainers=trainers.map(function(t){
    delete t.age;
    return t;
})
console.log("After removing age:", trainers);



trainers=trainers.map(function(t){
    t.hobbies.push("coding");
    return t
})

console.log("After adding new hobby:", trainers);

trainers = trainers.map(function(t) {
    t.hobbies.splice(1, 1, "music");
    return t;
});
console.log("After replacing 2nd hobby:", trainers);

trainers = trainers.map(function(t) {
    if (t.salary > 70000) {
        t.salary = t.salary + t.salary * 0.25;
    }
    return t;
});
console.log("After salary hike:", trainers);

let married = trainers.filter(function(t) {
    return t.isMarried == true;
});
console.log("Married employees:", married);

let namesWithCities = trainers.map(function(t) {
    return `${t.name} is from ${t.address.city}`;
});
console.log("Names with cities:", namesWithCities);

trainers = trainers.map(function(t) {
    t.address.city = t.address.city + " (Updated)";
    t.address.pincode = 416001;
    return t;
});
console.log("Updated address:", trainers);


let females = trainers.filter(function(t) {
    return t.gender == "female";
});
console.log("Female employees:", females);