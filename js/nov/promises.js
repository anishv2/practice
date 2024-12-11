// const container = document.querySelector('.main');

// document.addEventListener('click', function(e){

//     const randVal = Math.floor(Math.random() * 100);
//     const circle = document.createElement('div');
//     circle.classList.add('circle');
//     circle.style.top = e.clientY - randVal + 'px';
//     circle.style.left = e.clientX - randVal + 'px';
//     circle.style.width = randVal * 2 + 'px';
//     circle.style.height = randVal * 2 + 'px';

//     document.body.appendChild(circle);
// });

console.log("Start");

const p1 = new Promise((res, rej) => {
  res("Promise 1 resolved");
});

const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise 2 resolved");
  }, 0);
});

p1.then((d) => {
  console.log(d);
});

p2.then((d) => {
  console.log(d);
});

console.log("End");

function blockOperation(secs) {
  const end = Date.now() + secs;
  while (Date.now() < end) {}
  console.log("Blocking operation finished");
}

// blockOperation(5000);

var a = "global";

function iAmLocal() {
  a = "is I am local";
}

iAmLocal();

console.log(a);

// new Promise((resolveOuter) => {
//   resolveOuter(
//     new Promise((resolveInner) => {
//       setTimeout(resolveInner, 1000);
//     })
//   );
// });

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved");
  }, 300);
});

// myPromise
//   .then((value) => `${value} and bar`)
//   .then((value) => `${value} and bar again`)
//   .then((value) => `${value} and again`)
//   .then((value) => `${value} and again`)
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// myPromise
//   .then((d)=>{
//     console.log('d', d);
//   }, (er)=>{
//     console.log(er);
//   })

const prom1 = new Promise((res, rej) => {
  res("prom1 resolved");
});

const prom2 = new Promise((res, rej) => {
  rej("prom2 rejected");
});

const prom3 = new Promise((res, rej) => {
  res("prom3 resolved");
});

const res = Promise.all([prom1, prom2, prom3])
  .then((res) => {
    console.log("result", res);
  })
  .catch((err) => console.log("Promise Error ", err));

console.log('RES', res);
