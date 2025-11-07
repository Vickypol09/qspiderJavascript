const trainers = [
  {
    name: "Rohit sir",
    age: 25,
    gender: "Male",
    hobbies: ["Riding", "teaching", "gym"],
    salary: 65000,
    status: "Single",
    address: {
      street: "12 MG Road",
      city: "pune",
      state: "Maharashtra",
      pincode: 400001
    }
  },
  {
    name: "Harsha sir",
    age: 28,
    gender: "male",
    hobbies: ["Reading", "Yoga", "Cooking"],
    salary: 55000,
    status: "Single",
    address: {
      street: "45 Baner Street",
      city: "Pune",
      state: "Maharashtra",
      pincode: 411045
    }
  },
  {
    name: "Pradeep sir",
    age: 28,
    gender: "Male",
    hobbies: ["Gaming", "Hiking", "Photography"],
    salary: 72000,
    status: "Single",
    address: {
      street: "23 Civil Lines",
      city: "Delhi",
      state: "Delhi",
      pincode: 110001
    }
  },
  {
    name: "Sejal mam",
    age: 27,
    gender: "Female",
    hobbies: ["Painting", "Music", "Traveling"],
    salary: 60000,
    status: "Single",
    address: {
      street: "14 Residency Road",
      city: "Bangalore",
      state: "Karnataka",
      pincode: 560025
    }
  },
  {
    name: "Vikram Singh",
    age: 40,
    gender: "Male",
    hobbies: ["Reading", "Teaching", "Gardening"],
    salary: 85000,
    status: "Married",
    address: {
      street: "56 Park Avenue",
      city: "Jaipur",
      state: "Rajasthan",
      pincode: 302001
    }
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
];

console.log(trainers);

// Departments list (10 values)
const departments = [
  "AI & ML",
  "Web Development",
  "Data Science",
  "Cyber Security",
  "Cloud Computing",
  "Blockchain",
  "UI/UX Design",
  "DevOps",
  "Mobile App Development",
  "Game Development"
];

// 1 Add dept using map()
const updatedTrainers = trainers.map((trainer, index) => ({
  ...trainer,
  dept: departments[index]  // assign dept based on index
}));

console.log(updatedTrainers);

// 2 destructure to remove 'age'
const deleteAge = trainers.map((trainer, index) => {
 
  const { age, ...rest } = trainer;
  return {
    ...rest,
    dept: departments[index]
  };
});

console.log(deleteAge);


// 3 filter those whose age > 30
const above30 = updatedTrainers.filter(trainer => trainer.age > 30);

console.log(above30);


// 4 Different hobbies for each trainer
const hobbiesList = [
  ["Riding", "Gym", "Teaching"],
  ["Reading", "Cooking", "Music"],
  ["Gaming", "Hiking", "Photography"],
  ["Painting", "Music", "Traveling"],
  ["Reading", "Gardening", "Teaching"],
  ["Dancing", "Writing", "Cooking"],
  ["Cycling", "Movies", "Tech Gadgets"],
  ["Singing", "Drawing", "Volunteering"],
  ["Football", "Cooking", "Reading"],
  ["Photography", "Traveling", "Fitness"]
];

//4 Add dept + hobbies using map
const addhobbies = trainers.map((trainer, index) => ({
  ...trainer,
  dept: departments[index],
  hobbies: hobbiesList[index]
}));

console.log(addhobbies);


//5 Replace the second hobby (index 1) with a new one
const updatedHobbies = trainers.map(trainer => ({
  ...trainer,
  hobbies: trainer.hobbies.map((hobby, index) =>
    index === 1 ? "Coding" : hobby // replace 2nd hobby
  )
}));

console.log(updatedHobbies);

//6 updating salary whose trinaer sal>70000

const updatedSalaries = trainers.map(trainer => ({
  ...trainer,
  salary:
    trainer.salary > 70000
      ? trainer.salary + trainer.salary * 0.25  
      : trainer.salary                         
}));

console.log(updatedSalaries);

//7 Filter married trainers
const marriedEmployees = trainers.filter(trainer => trainer.status === "Married");

console.log("Married Employees:");
console.table(marriedEmployees);

// 8 Print name and city 
console.log("Employees and their Cities:");
trainers.forEach(trainer => {
  console.log(`${trainer.name} → ${trainer.address.city}`);
});

//8 print the emplyoee names with cites
const nameCityList = trainers.map(trainer => ({
  Name: trainer.name,
  City: trainer.address.city
}));

console.table(nameCityList);

//9 updating the addres for each emplyoee

const updatedAddress = trainers.map(trainer => ({
  ...trainer,
  address: {
    ...trainer.address,
    city: trainer.address.city + " (Branch Office)"
  }
}));

console.log(updatedAddress);

//10 Extract only female employees
const femaleEmployees = trainers.filter(trainer => trainer.gender.toLowerCase() === "female");

console.table(femaleEmployees);
