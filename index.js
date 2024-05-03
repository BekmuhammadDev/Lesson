// function aniqlash(oyraqami) {
//     if (oyraqami >=1 && oyraqami <= 3) {
//         return "bahor";
//     }else if (oyraqami >= 4 && oyraqami <= 6) {
//         return "yoz";
//     }else if (oyraqami >=7 && oyraqami <=9 ) {
//         return "kuz";
//     }else if (oyraqami >=10 && oyraqami <=12) {
//         return"qish";
//     }else{
//         return "aniq oy raqami emas"
//     }
// }
// console.log(aniqlash(7));



// function yoshAniqlash(tugilganYil) {
//     let hozirgiSana = new Date();
//     let hozirgiYil = hozirgiSana.getFullYear();
//     let yosh = hozirgiYil - tugilganYil;

//     if (yosh > 0) {
//         return yosh;
//     } else {
//         return "Noto'g'ri tug'ilgan yil kiritildi.";
//     }
// }

// let tugilganYil = prompt("tug'ilgan yilingizni kiriting:");
// let foydalanuvchiYoshi = yoshAniqlash(tugilganYil);

// console.log(foydalanuvchiYoshi);



// function aniqlash(son) {
//     if (son % 2 == 0) {
//         return "juft";
//     } else {
//         return "toq"
//     }
// }




// function aniqlash(operator) {
//     if (99) {
//         return"uzmobile";
//     }else if (97) {
//         return "mobiuz"
//     }else if (94) {
//         return"ucel";
//     }else if (90) {
//         return"Belline";
//     }else  {
//         return "aniq cod emas";
//     }

// }
// alert(aniqlash(97));



//  k va n butun sonlari berilgan (n > 0). k sonini n marta chiqaruvchi programma tuzilsin.


// function aniqlash() {
// let k = +prompt("Istalgan sonni kiriting:")
// let n = +prompt("Necha marta takrorlansin?")

// if (isNaN(k) || isNaN(n) ||  k === null || n === null) {
//     console.error("Noto'g'ri kiritish! Raqamlarni kiriting va 'OK' tugmasini bosing.");
// } else {
//     for (let i = 1; i <= n; i++) {
//         console.log(k);
//     }
// }
// }




//  a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar kvadratlarning yig'indisini chiqaruvchi programma tuzilsin.

// let a = +prompt("a sonini kiriting:")
// let b = +prompt("b sonini kiriting (a<b):")
// let c=0;

// for (let i = a; i <=b; i++) {
//     c=c+i*i
// }

// console.log(Sonlarning kvadratlari yig'indisi: ${c})





// passport: function(){
//     console.log(`
//     full name:${erson.name}
//     age: ${person.age}
//     iaMarried:${person.ismarried}
//     address: ${person.address}
//     `);
// }
// console.log(person.name );
// console.log(person.age);
// console.log(person.email);
// console.log(person.ismarried);

// person.passport()


// function findElement(arr, n) {
//    if (n < 0 || n > arr.length - 1) {
//       console.log(0);
//    }else{
//       console.log(arr[n]);
//    }
// }
//  findElement([6,25,91,23,72,9,18,6],5)


// let arr = [25, 91, 23, 72, 9, 18, 6]
// let result = arr.includes(23)
// console.log(result);

// function findElement(arr, n) {
//    if (n < 0 || n > arr.length) {
//       console.log(0);
//    } else {
//       console.log(arr[n]);
//    }
// }
// findElement([6, 25, 91, 23, 72, 9, 18, 6], 5)

// let arr = [6, 25, 91, 23, 72, 9, 18, 6];
// arr.push(13);
// console.log(arr);

// let arr = [6, 25, 91, 23, 72, 9, 18, 6]
// arr.unshift(13);
// console.log(arr);
// let arr = [6, 25, 91, 23, 72, 9, 18, 6]
// arr.(23);
// console.log(arr);

// let aboutme = {
//     name:"Bekmuhammad",
//     age:"17",
//     name:"Bekmuhammad",
//     sure_name:"Aripov",
//      age:21,
//      hobby:['chess','reding','play game','footbal play'],
//     ismarried:false,
//    contact:{
//     phone:"+998998953501",
//     email:"aripovbekmuhammad2@gmail.com",
//    }


// }
// console.log(aboutme);
// for ( let element in aboutme);
// console.log(`${element}:${aboutme[element]}`);

// let question = [
//     "ismingiz nima",
//     "Yoshingiz nechchida",
//     "qaysi kursda o'qimoqchisiz",
//     "ertalab yoki abetdan keyin kurs uchun vaqtingiz bormi",
//     "darsda uxlamang",

// ];

// let answer = [];
// let currentQuestionIndex = 0;

// function askQuestion() {
//     while (currentQuestionIndex < question.lenght) {
//         let answer = prompt(question[currentQuestionIndex]);

//         if (!answer) {
//             continue;
//         } else {
//             answer.push(answer);
//             currentQuestionIndex++;
//         }
//     }
// }

// function displayAnswer() {
//     console.log("here are your answer:");
//     for (let i = 0; i < answer.length; i++) {
//         console.log(`${i + 1}.${question[i]}:${answer[i]}`);
//     }
// }

// askQuestion();
// displayAnswer();


// let questions = [
//     "Ismingiz nima?",
//     "Yoshingiz nechida?",
//     "Qaysi kursda o'qimoqchisiz (Frontend/Backend)?",
//     "Ertalab yoki abetdan keyin kurs uchun vaqtingiz bor?",
//     "Darda uxlamang!",
//   ];

//   let answers = [];
//   let currentQuestionIndex = 0;


//   function askQuestion() {
//     while (currentQuestionIndex < questions.length) {
//       let answer = prompt(questions[currentQuestionIndex]);

//       if (!answer) {
//         continue;
//       } else {
//         answers.push(answer);

//         currentQuestionIndex++;
//       }
//     }
//   }

//   function displayAnswers(){
//       console.log("Here are your answers: ");
//       for (let i = 0; i < answers.length; i++) {
//           console.log(`${i+1}. ${questions[i]}:${answers[1]}`);
//           console.log("============================================================");
//       }
//   }

//   askQuestion();
//   displayAnswers();

// const person={
//     name:"Bekmuhammad",
//     sure_name:"Aripov",
//     age:21,
//     hobby:['chess','reding','play game','footbal play'],
//     ismarried:false,
//     phone:"+998998953501",
//     email:"aripovbekmuhammad2@gmail.com",
//     address:{
//         city:"toshkent",
//         country:"uzbekistan",
//         zipcode:"121212"
//     },

//     passport:function(){
//       console.log(`
//       fullname:${person.name}
//       age:${person.age}
//       address:${person.address}
//       `);
//     }
// }

// person.passport()

// console.log(person.ismarried);


// const arr = []
// arr.push(12)
// arr.push(13)
// arr.push(14)
// arr.push(12)
// arr.push(13)
// arr.push(14)



// const slic=arr.slice(0,3)
// arr.splice(0,5)

// console.log(slic);
// console.log(arr);


// const arr=[1,2,3,4,5,];
// const arr1=["a","s","f","g",];
// const arr2=arr.concat(arr1);

// console.log(arr2);
// console.log(arr.join("+"));

// console.log(arr.includes(3));



// let skills = ["html","css","scss","bootstrap","tailwind","javascript"];

// skills.forEach(  (value,index,) => {
//     console.log(`${index + 1}.${value}`);
// });


// function numberSum(arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// let arr = [10, 23, 33, 21, 5];
// let yigindi = numberSum(arr);
// console.log("Massivdagi raqamlar yig'indisi:", yigindi);

 



