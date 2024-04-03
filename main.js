// ! Task 1
// let eded = parseInt(prompt("Eded daxil edin"));
// if (eded === 1) {
//     console.log(eded + " 3-un quvvetidi");
// } else if (eded < 1) {
//     console.log(eded + " 3-un quvveti deyil");
// } else {
//     while (eded % 3 === 0) {
//         eded /= 3;
//     }
//     if (eded === 1) {
//         console.log(eded + " 3-un quvvetidi");
//     } else {
//         console.log(eded + " 3-un quvveti deyil");
//     }
// }



//! Task 2
// let eded = parseInt(prompt("Eded daxil edin"));
// let reversEded = 0;
// for (let gecEded = eded; gecEded > 0; gecEded = parseInt(gecEded / 10)) {
//     let son = gecEded % 10;
//     reversEded = reversEded * 10 + son;
// }
// if (eded === reversEded) {
//     console.log(eded + " polidromdur");
// } else {
//     console.log(eded + " polidrom deyil");
// }



//!Task 3
// let eded = parseInt(prompt("Eded daxil edin"));
// let koren = 0;
// while (koren * koren <= eded) {
//     koren++;
// }
// let nearKoren = koren - 1;
// console.log(eded + " yaxin koren " + nearKoren);



//!Task 4

// let arr = [2, 7, 1, 5, 11, 3];
// let summ = 0;
// for(let i = 0; i<arr.length; i++){
//     if(arr[i]<10){
//         summ ++
//     }
// }
// console.log(summ);