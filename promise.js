const p = new Promise((resolve) => {
    // Kick off some async work
    // ...
    // reject(err)
    setTimeout( ()=> {
        resolve(1);
    },2000);
});

p.then(result => {
    console.log(`the result is ${result}`);
});


/******************************************
 * Running Parellel promise
 */

const p1 = new Promise( (resolve) => {
    setTimeout( () => {
        resolve('P1 is resolved');
    }, 2000);
});

const p2 = new Promise( (resolve) => {
    setTimeout( () => {
        resolve('P2 is resolved');
    }, 5000);
})

Promise.all([p,p1,p2])
.then(result => console.log(result));