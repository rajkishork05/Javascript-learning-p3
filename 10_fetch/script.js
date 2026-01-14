// // async await method

// async function getData(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await response.json()
//     console.log(data)

// }
// console.log("hello")
// getData()


// // by using .then .catch

// fetch("https://jsonplaceholder.typicode.com/users").then((rawData)=>{
//     let data = rawData.json();
//     return data
// }).then((data)=> {
//     // data.forEach(elem => {
//     //     console.log(`E-mail list : ${elem.name}`)
//     // })
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })
