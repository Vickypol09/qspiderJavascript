//filter throught obj

let Trainers=[
    {   Name: 'Rohit', 
        dept:"Dev",
        isMarried:false
    },
    {   Name: 'Harsah', 
        dept:"Test",
        isMarried:false
    },
    {   Name: 'Avinash', 
        dept:"Dev",
        isMarried:True
    },
    {   Name: 'Pradeep', 
        dept:"Both",
        isMarried:True
    },
]

let devTrainers=Trainers.filter((obj)=>obj.dept=='Dev')
console.log(devTrainers);

let MarriedTrainers=Trainers.filter((ele)=>ele.isMarried)
console.log(MarriedTrainers);