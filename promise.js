const p = new Promise((resolve, reject) => {
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