console.log('Before');
getUser(1, (user) => {
    console.log('Callback user', user);
});
console.log('After');


function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading form a database')
        callback({ id: id, gitHubUser: 'Utsav' })
    }, 2000);
}