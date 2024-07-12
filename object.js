// let person = {
//     name:'kamal',
//     age:30,
//     friends:[
//        'Shola','Ade','Ibraheem'
//     ],
//     greet:function(){
//       alert('Hello World')
//     }
//   }
//    person = {
//     'name':'kamal',
//     age:30,
//     friends:[
//        'Shola','Ade','Ibraheem'
//     ],
//     greet:function(){
//       alert('Hello World')
//     },
//     isAdmin:true
//   }
//   console.log(person['name'])
let person = {
    name:'jamaldeen',
    age:30,
    hobbies:[
       'reading','playing','sleeping'
    ],
    speek:function(){
      return this.hobbies
    }
  }
  console.log(person.speek());