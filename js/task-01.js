'use strict'
import users from "./users.js";
// console.log(users);

// Task-01 
//Получить массив имен всех пользователей (поле name).
console.log('Task-01');
const getUserNames = users => {
   return users.map ( user => user.name);
  };
  
  console.log(getUserNames(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// Task-02
//Получить массив объектов пользователей по цвету глаз (поле eyeColor).
console.log('Task-02');
const getUsersWithEyeColor = (users, color) => {
    return users.filter ((user) => user.eyeColor === color);
  };
  
  console.log(getUsersWithEyeColor(users, 'blue')); 
  // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// Task-03
//Получить массив имен пользователей по полу (поле gender).
console.log('Task-03');
const getUsersWithGender = (users, gender) => {
    return users
    .filter ((user) => user.gender === gender)
    .map ((user) => user.name);
  };
  
  console.log(getUsersWithGender(users, 'male'));
   // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// Task-04
//Получить массив только неактивных пользователей (поле isActive).
console.log('Task-04');
const getInactiveUsers = users => {
    return users.filter ((user) => user.isActive === false);
  };
  
  console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// Task-05
//Получить пользоваля (не массив) по email (поле email, он уникальный).
console.log('Task-05');
const getUserWithEmail = (users, email) => {
    return users.find ((user) => user.email === email);
  };
  
  console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
  console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// Task-06
//Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).
console.log('Task-06');
const getUsersWithAge = (users, min, max) => {
    return users.filter((user) => user.age > min && user.age < max);
  };
  
  console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
  
  console.log(getUsersWithAge(users, 30, 40));
  // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// Task-07
//Получить общую сумму баланса (поле balance) всех пользователей.
console.log('Task-07');
const calculateTotalBalance = users => {
    return users.reduce((acc, user) => acc + user.balance, 0);
  };
  
  console.log(calculateTotalBalance(users)); // 20916

// Task-08
//Массив имен всех пользователей у которых есть друг с указанным именем.
console.log('Task-08');

const getUsersWithFriend = (users, friendName) => {
    return users
    .filter((user) => user.friends.includes(friendName))
    .map((user) => user.name);
  };
  
  console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
  console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// Task-09
//Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
console.log('Task-09');
const getNamesSortedByFriendsCount = users => {
    return users
    .sort((a ,b) => a.friends.length - b.friends.length)
    .map((user) => user.name);
  };
  
  console.log(getNamesSortedByFriendsCount(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// Task-10
//Получить массив всех умений всех пользователей (поле skills), 
//при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
console.log('Task-10');
const getSortedUniqueSkills = users =>
    users
    .reduce((allSkills, user) => {
      user.skills.forEach(skill => {
        if (!allSkills.includes(skill)) {
            allSkills.push(skill);
        }
      });

      return allSkills;
    }, [])
    .sort();
  
  console.log(getSortedUniqueSkills(users));
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 
  //'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]