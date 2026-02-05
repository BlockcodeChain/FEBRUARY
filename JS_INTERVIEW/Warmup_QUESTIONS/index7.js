// in an array of objects filter out those objects whcih have enders value male 
let arrobj=[
    {
        name:"john",
        gender:"male"
    },
    {
        name:"doe",
        gender:"male"
    },
    {
        name:"jane",
        gender:"female"
    }
];
const result =arrobj.filter((obj)=> obj.gender==="male")

console.log(result)

// const result =arrobj.filter((obj)=> obj.gender==="male").map(obj=>obj.name)
// console.log(result)