let users;
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    let filterdUsers = data.filter(user => user.userId>5).map(user => ({title : user.title, userId :user.userId}) );
    console.log("filterddata");
    console.log(filterdUsers); // Handle the JSON data here
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });

// setTimeout( () => {
//     console.log(users.filter((user) => user.userId>5));
// }, 5000);

// const filteredUsers = users.filter((user) => user.userID>5);
// console.log(filteredUsers);