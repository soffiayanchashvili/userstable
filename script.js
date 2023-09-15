// const fetchUsers = new Promise ((resolve, reject) => {
//     fetch (`https://jsonplaceholder.typicode.com/users`)
//     .then (response => {return response.json()})
//     .then (response => resolve(response))
//     .catch (error => reject(error));
// });

const fetchUsers = new Promise ((resolve, reject) => {
    fetch (`https://jsonplaceholder.typicode.com/users`)
    .then (response => console.log(response.json()))
    .then (response => resolve(response))
    .catch (error => reject(error));
});


// useEffect(() => {
//     fetchUsers()
// },[]);

fetchUsers 
.then((res) => console.log(res))
.catch((err) => console.log(err))


// const users = (fetch) => {
//     fetch.forEach((fetchUsers) => {
//         console.log(fetchUsers.name);
//     });
// }
// users(fetchUsers)