// Exercise 1

/*
let dog = {};

dog.name = 'dooby';
dog.legs = 4;
dog.color = 'light golden';
dog.age = '2 years';
dog.bark = function(){

  return 'woof woof';
} 

// console.log(dog.bark());
// console.log(dog.name , dog.legs , dog.color , dog.age);

dog.breed = 'golden retriever';
dog.getDogInfo = function(){
  return `hello hoooman! my name is ${this.name} i am ${this.age} old ${this.breed} and i loves to do ${this.bark()}`
}

console.log(dog.getDogInfo())

*/

// Exercise 2

/*

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

*/

/*
let maxNumOfSkills = '';
let max = 0;

for(const user in users){
  if(users[user].skills.length > max){
      max = users[user].skills.length;
      maxNumOfSkills = user
    }
}
console.log(maxNumOfSkills)
*/


/*
let loginCount = 0;

for(const user in users){
  if(users[user].isLoggedIn == true)
  {
    loginCount++
  }
}
console.log(`Total Number Of Login Users Are ${loginCount}`)
*/


/*
let UserHaving50PlusPoints = 0;

for(const user in users){
  if(users[user].points >= 50){
    UserHaving50PlusPoints++
  }
}

console.log(`${UserHaving50PlusPoints} users having 50 or more than 50 Points `)
*/


/*
let myObject = Object.assign({} , users)
myObject.darshan = {};
console.log(users)
console.log(myObject)
*/


/*
for(const user in users){

  if(users[user].skills.includes('MERN')){
    console.log(user)
  }
  else
  console.log('Yikes')
}
*/

// console.log(Object.keys(users))
// console.log(Object.entries(users))
// console.log(Object.values(users))


// Exercise 3


// question 2 

const users = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
  ];

  
  const products = [
{
  _id: 'eedfcf',
  name: 'mobile phone',
  description: 'Huawei Honor',
  price: 200,
  ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 }
  ],
  likes: []
},
{
  _id: 'aegfal',
  name: 'Laptop',
  description: 'MacPro: System Darwin',
  price: 2500,
  ratings: [    { userId: 'fg12cy', rate: 5 },
],
  likes: ['fg12cy']
},
{
  _id: 'hedfcg',
  name: 'TV',
  description: 'Smart TV:Procaster',
  price: 400,
  ratings: [{ userId: 'fg12cy', rate: 5 }],
  likes: ['fg12cy']
}
]

  const Username = document.querySelector('input');
  const forms = Array.from(document.querySelectorAll('form'));
  const Submit = document.querySelector('button');

  forms.forEach(form => {
  form.addEventListener('submit', (e) => e.preventDefault())

  })  


  Submit.addEventListener('click' , () => {

    for(let user in users)
      if(user.username == Username.value){
        console.log("An Account with this username is already exist.")
      }
  
      let newUser =  {username : Username.value,};
      console.log(users)
      users.push(newUser);
    })


// add rating

const userid = document.querySelector('.userid');
const rating = document.querySelector('.rating');
const submit = document.querySelector('.submit');
const productNumber = document.querySelector('.product-number');
const Description = document.querySelector('textarea');




// function submitRating(){


  submit.addEventListener('click' , () => {

    let newRating = {
      userId : userid.value,
      rate : +rating.value,
    }

    products[productNumber.value].ratings.push(newRating)

    console.log(products[productNumber.value].ratings)
  
  })
// }

// submitRating();




// showing rating 






let total = +0;
let avgRating = +0;
let productName = '';

function avgRatingOfProduct(){
  
 let NumberOfProducts = products[productNumber.value].ratings.length;

 products[productNumber.value].ratings.forEach(rating => {

  total += rating['rate'];
  
  avgRating = total/NumberOfProducts;

  productName = products[productNumber.value].name;
 })

 console.log(total)
 console.log(avgRating)
 console.log(productName)

 Description.innerText = `Average Rating of ${productName} is ${avgRating}`;


}

const showRate = document.querySelector('.showrating')

showRate.addEventListener('click' , () => {
  avgRatingOfProduct()

})





// like product





const likeButton = document.querySelector('.likeproduct');
const useridforlike = document.querySelector('.useridforlike');
const productNumberforlike = document.querySelector('.product-number');

function likeproduct(){


  likeButton.addEventListener('click', () => {
    products[productNumberforlike.value].likes.push(useridforlike.value);
    console.log(products[productNumberforlike.value])
  })

}

likeproduct()

const inputs = Array.from(document.querySelectorAll('input'));
let clear = document.querySelector('.clear');
clear.addEventListener('click', () => {

  inputs.forEach(input => {

    input.value = '';

    })

    Description.innerText = ''
  
  })



