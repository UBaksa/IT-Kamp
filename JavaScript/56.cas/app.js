for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// 3 3 3
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// 0 1 2
// Funkcija za prikupljanje podataka na serveru.
// function getUsers() {
//   return fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))
//     .finally(() => setTimeout(getUsers, 1000 * 60 * 5)); //ovako jer je 1000 u milisekudnama i ovo predstavlja 1 sekundu.
// }

// getUsers();

// Asinhrona funkcija za prikupljanje podataka sa servera:

// const getUsers = async () => {
//   const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//   const users = await data.json();
//   console.log(users);
// };
// getUsers();

// prikupiti sve usere,a nakon toga vratiti json sa svim userima koji su prikazani sa svojsvtima:id,name,username,email(ispisan malim slovima,phone,adress sa svojsvtima street,suite.)

const getUsers = async () => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await data.json();
  const mapUsers = users.map(function (user) {
    return {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email.toLowerCase(),
      phone: user.phone,
      address: {
        street: user.address.street,
        suite: user.address.suite,
      },
    };
  });
  //   const filter = users.filter(function (element) {
  //     return [
  //       element.id,
  //       element.name,
  //       element.username,
  //       element.email.toLowerCase(),
  //       element.phone,
  //       element.address.street,
  //       element.address.suite,
  //     ];
  //   });
  //   console.log(filter);
  console.log(mapUsers);
};
getUsers();
