const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (true) {
            resolve('promise completed!');
        } else {
            reject();
        }
    }, 1000)
});

promise
    .then(data => console.log(data))
    .catch(() => (console.log('error')));